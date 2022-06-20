import {addNumbers} from "../store/rootReducer";

const generatePrimeArray = (amountOfNum: number) => {
    let res: any = [];

    const isPrime = (num: number) => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    for (let j = 0; j < amountOfNum; j++) {
        if (isPrime(j)) {
            res.push(j);
        }

    }
    res.push(...res.slice(0))
    return (addNumbers(res.sort(() => Math.random() - 0.5)))
}

export default generatePrimeArray;