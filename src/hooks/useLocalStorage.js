import { useState, useEffect } from 'react';
import { expenses } from '../constants/constants';

export default function useLocalStorage() {
    const getValue = () => {
        const storedData = localStorage.getItem("expenses");
        if (storedData) {
            return JSON.parse(storedData);
        }
        return expenses;
    }
    const [state, setState] = useState(getValue);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(state))
    }, [state]);

    return [state, setState];
};