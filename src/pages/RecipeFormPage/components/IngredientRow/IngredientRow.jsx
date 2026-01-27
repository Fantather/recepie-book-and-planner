import { UNITS } from "../../../../data/units";

import { validateIngredientAmount } from "../../../../utils/validators";

import { getIngredient, FIELD } from "../../../../models/ingredient.model";

import { useState } from "react";
import useValidate from "../../../../hooks/useValidation";

import InputField from "../../../../components/InputField/InputField";
import SelectField from "../../../../components/SelectField/SelectField";
import ErrorCard from "../../../../components/ErrorCard/ErrorCard";
import { Row, Col } from "react-bootstrap";


export default function IngredientRow({initName, initAmount, initUnit}) {
    const [ingredient, setIngredient] = useState(
        getIngredient(initName, initAmount, initUnit)
    );

    const nameValidate = useValidate(ingredient.name, validateName);
    const amountValidate = useValidate(ingredient.amount, validateIngredientAmount);
    const errors = [
        ...nameValidate.errors,
        ...amountValidate.errors
    ];


    function setIngredientField({target}) {
        setIngredient(prev => ({
            ...prev,
            [target.name]: target.value
        }));
    }


    const {name, amount, unit} = ingredient
    return(
        <div>
            <ErrorCard errors={errors}/>
            <Row>
                <Col md={6}>
                    <InputField 
                        value={name} 
                        onChange={setIngredientField} 
                        onBlur={nameValidate.onBlur}
                        placeholder="Название ингридиента"
                        name={FIELD.NAME} 
                    />
                </Col>
                <Col xs={6} md={3}>
                    <InputField 
                        value={amount} 
                        onChange={setIngredientField} 
                        onBlur={amountValidate.onBlur}
                        placeholder="Количество ингридиента"
                        name={FIELD.AMOUNT}  
                    />
                </Col>
                <Col xs={6} md={3}>
                    <SelectField
                        options={UNITS} 
                        value={unit} 
                        onChange={setIngredientField}
                        name={FIELD.UNIT}  
                        defaultOption="Выберите единицу измерения"
                    />
                </Col>
            </Row>
        </div>
    )
}