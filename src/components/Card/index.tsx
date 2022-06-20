import React from 'react';

import {useAppDispatch, useAppSelector} from "../../service/hooks";
import styles from './Card.module.css'
import classNames from "classnames";
import generatePrimeArray from "../../service/generateNum";
import {toggleActive} from "../../store/rootReducer";

export default function Card() {
    const dispatch = useAppDispatch();
    const numbersList = useAppSelector(state => state.mojang.list)
    const selectedItems = useAppSelector(state => state.mojang.selected)

    return (
        <div className={styles.root}>
            {
                !numbersList.length ? <div className={styles.btn}>
                    <button onClick={() => dispatch(generatePrimeArray(50))}>Start Game</button>
                </div> : numbersList.map((item: any) => {
                    return (
                        <div className={classNames(styles.cardItem, {
                            [styles.completed]: item.isCompleted
                        })} onClick={() => dispatch(toggleActive(item))}
                             key={item.id}>
                            <div
                                className={classNames(styles.cardValue, {
                                    [styles.active]: selectedItems.find((el) => el.id === item.id),
                                    [styles.completed]: item.isCompleted
                                })}
                            >
                                {item.value}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}