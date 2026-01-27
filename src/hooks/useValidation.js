import { useEffect, useState } from "react";

const defaultValidateObj = {
    isValid: true, 
    errors: []
}

export default function useValidate(monitoredValue, ...validityChecks) {
    const [errors, setErrors] = useState([[]]);

    // Если длина у внутренних массивов будет 0, значит ошибок нет
    const isValid = errors.every(error => error.length === 0);
    const [isTouched, setIsTouched] = useState(false);


    // Debounce в пол секунды для валидации
    useEffect(() => {
        const timerId = setTimeout(() => {
            validationInput();
        }, 500);

        return () => clearTimeout(timerId);
    }, [monitoredValue]);

    function validationInput() {
        const currentErrors = validityChecks.map(check => check(monitoredValue));
        setErrors(currentErrors);
    }

    
    // Определяет, трогал ли пользователь поле, что бы позволить выводить ошибки
    function onBlur() {
        setIsTouched(true);
    }

    return {
        isValid: isTouched ? isValid : true, 
        errors: isTouched ? errors : [], 
        onBlur
    };
}