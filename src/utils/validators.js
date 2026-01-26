export function validateName(name) {
    return [
        isStringEmpty(name) ? "Название не может быть пустым" : null
    ].filter(Boolean);
}

export function validateDurationTime(time) {
    return [
        isStringEmpty(time) ? "Нужно указать примерное время приготовления" : null,
        !isInteger(time) ? "Время приготовления должно быть целым числом" : null
    ].filter(Boolean);
}

export function validateTemperature(temp) {
    return [
        isStringEmpty(temp) ? "Нужно указать температуру приготовления" : null,
        !isInteger(temp) ? "Температура должна быть целым числом" : null
    ].filter(Boolean);
}

export function validateIngredient({name, amount}) {
    return [
        isStringEmpty(name) ? "Нужно указать название ингридиента" : null,
        isStringEmpty(amount) ? "Нужно указать количество для ингридиента" : null,
        !isInteger(amount) ? "Количество ингридиентов должно быть целым числом" : null
    ].filter(Boolean);
}


// === Вспомогательные функции ===

// Возвращает true, если строка пуста
function isStringEmpty(str) {
    return !str || str.trim().length === 0;
}

// Возвращает true, если строку содержит только число
function isInteger(num) {
    return /^\d+$/.test(num);
}