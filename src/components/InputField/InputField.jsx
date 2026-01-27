import Form from 'react-bootstrap/Form';


/**
 * Я пытался сделать input с валидацией
 * В итоге лучше всего оказалось оставить input глупым, но компонент я решил оставить
 * Хоть сразу будет видно, какие параметры я ожидаю и подумал что стили можно будет скрыть, 
 * если я их добавлю
 * @param {string} name параметр, что бы у e.target был параметр name и сеттер в объекте мог определить, какой input вернул значение
 * @returns {Component}
 */
export default function InputField({ name, value, onChange, onBlur, placeholder }) {
    return (
        <Form.Control
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
        />
    );
}