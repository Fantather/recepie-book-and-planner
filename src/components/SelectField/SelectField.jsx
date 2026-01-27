import { Form } from "react-bootstrap"

export default function SelectField({options, defaultOption, value, onChange, name}) {
    return(
        <Form.Select value={value} onChange={onChange} name={name}>
            <option value="">{defaultOption}</option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </Form.Select>
    )
}