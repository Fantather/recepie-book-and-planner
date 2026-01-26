import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    function saveValue() {
        localStorage.setItem(key, JSON.stringify(value));
    }

    useEffect(() => {
        const timerId = setTimeout(saveValue, 500);
        return () => clearTimeout(timerId);
    }, [key, value])

    return [value, setValue];
}