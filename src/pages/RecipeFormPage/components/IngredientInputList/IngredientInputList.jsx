import useIngredientInputList from "./useIngredientInputList";

import { Row, Col, Button } from "react-bootstrap";
import IngredientRow from "./IngredientRow/IngredientRow";


export default function IngredientInputList({initIngredients}) {
    const {
        ingredients, 
        updateIngredient, 
        addIngredient, 
        removeIngredient
    } = useIngredientInputList(initIngredients);

    return(
        <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
                <h3>Ингридиенты</h3>
                <Button onClick={addIngredient} variant="outline-primary">
                    + Добавить
                </Button>
            </Col>
            {ingredients.map((ingredient, index) => 
                    <IngredientRow 
                        key={ingredient.id}
                        ingredient={ingredient} 
                        onChange={e => {
                            const {name, value} = e.target;
                            updateIngredient(index, name, value)
                        }} 
                        onDelete={() => removeIngredient(index)}
                    />
                )
            }
        </Row>
    )
}