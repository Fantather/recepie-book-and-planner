import { useEffect, useState } from "react";


/**
 * Поле для ввода с валидацией
 * @param {Function} validityCheck Функция для проверки значения, берётся из utils/validators 
 */
export default function InputField({value, onChange, validityCheck, onValidityChange, className}) {
    // Исправление: useState вызывается как функция
    const [errors, setErrors] = useState([]); 

    function validationInput() {
        const currentErrors = validityCheck(value);
        setErrors(currentErrors);

        // Если длина массива ошибок 0, значит ошибок нет
        const isValid = currentErrors.length === 0;
        // Сообщаю родителю результат
        onValidityChange(isValid);
    }

    // Debounce в пол секунды для валидации
    useEffect(() => {
        const timerId = setTimeout(() => {
            validationInput();
        }, 500);

        return () => clearTimeout(timerId);
    }, [value]);

    // Добавить error card для вывода ошибок с новой строки, каждая ошибка это div
    return (
        <div className={className}>
            {errors.length > 0 && <div style={{color: 'red'}}>{errors.join('\n')}</div>}
            
            <div>
                <input type="text" onChange={onChange} value={value} />
            </div>
        </div>
    );
}