import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Mojang = {
    id: number,
    value: number,
    isActive: boolean,
    isCompleted: boolean,
}

type MojangState = {
    list: Mojang[]
    selected: Mojang[]
}

const initialState: MojangState = {
    list: [],
    selected: []
}

const rootReducer = createSlice({
    name: 'mojang',
    initialState,
    reducers: {
        addNumbers(state, action: PayloadAction<any>) {
            state.list.push(...action.payload.map((item: number, index: number) => {
                return {
                    id: index + 1,
                    value: item,
                    isCompleted: false
                }
            }))
        },
        toggleActive: function (state, action: PayloadAction<Mojang>) {
            if (action.payload.isCompleted) {
                return;
            }

            if (state.selected.length === 2) {
                state.selected = []
            }

            if (state.selected.length && state.selected[0].id !== action.payload.id && (state.selected[0].value === action.payload.value)) {
                for (let i = 0; i < state.list.length; i++) {
                    if (state.list[i].value === action.payload.value) {
                        state.list[i].isCompleted = true;
                    }
                }
            }

            if (state.selected.length && (state.selected[0].id === action.payload.id)) {
                state.selected = []
            } else {
                state.selected.push(action.payload)
            }

        }
    },
});

export const {addNumbers, toggleActive} = rootReducer.actions;

export default rootReducer.reducer;
