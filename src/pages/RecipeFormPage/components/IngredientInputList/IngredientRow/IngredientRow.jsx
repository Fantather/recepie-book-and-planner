import { UNITS } from "../../../../../data/units";

import { validateIngredientAmount, validateIngredientName } from "../../../../../utils/validators";

import { getIngredient, FIELD } from "../../../../../models/ingredient.model";

import { useState } from "react";
import useValidation from "../../../../../hooks/useValidation";

import InputField from "../../../../../components/InputField/InputField";
import SelectField from "../../../../../components/SelectField/SelectField";
import ErrorCard from "../../../../../components/ErrorCard/ErrorCard";
import { Row, Col, Button } from "react-bootstrap";


export default function IngredientRow({ingredient, onChange, onDelete}) {
    const nameValidate = useValidation(ingredient.name, validateIngredientName);
    const amountValidate = useValidation(ingredient.amount, validateIngredientAmount);
    const errors = [
        ...nameValidate.errors,
        ...amountValidate.errors
    ];

    console.log(errors);

    const {name, amount, unit} = ingredient
    return(
        <div>
            <ErrorCard errors={errors}/>
            <Row className="mb-2">
                <Col md={5}>
                    <InputField 
                        value={name} 
                        onChange={onChange} 
                        onBlur={nameValidate.onBlur}
                        placeholder="Название ингридиента"
                        name={FIELD.NAME} 
                    />
                </Col>
                <Col xs={6} md={3}>
                    <InputField 
                        value={amount} 
                        onChange={onChange} 
                        onBlur={amountValidate.onBlur}
                        placeholder="Количество ингридиента"
                        name={FIELD.AMOUNT}  
                    />
                </Col>
                <Col xs={6} md={3}>
                    <SelectField
                        options={Object.values(UNITS)} 
                        value={unit} 
                        onChange={onChange}
                        name={FIELD.UNIT}  
                        defaultOption="Выберите единицу измерения"
                    />
                </Col>
                <Col xs="auto" md={1} className="d-flex align-items-start">
                    <Button onClick={onDelete} variant="outline-danger">X</Button>
                </Col>
            </Row>
        </div>
    )
}

// outline-danger / outline-secondary
// Можно добавить size="sm" если кнопка кажется огромной