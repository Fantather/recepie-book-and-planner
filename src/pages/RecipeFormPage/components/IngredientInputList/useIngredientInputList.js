import { useState } from "react";
import * as ingredientModel from "../../../../models/ingredient.model";


export default function useIngredientInputList(initIngredients = ingredientModel.getDefaultIngredientsArray()) {
    const [ingredients, setIngredients] = useState(initIngredients);

    function updateIngredient(targetIndex, field, newValue) {
        setIngredients(prev => 
            ingredientModel.updateIngredientInArray(prev, targetIndex, field, newValue)
        );
    }

    function addIngredient() {
        const {addIngredient, getEmptyIngredient} = ingredientModel;
        setIngredients(prev =>
            addIngredient(prev, getEmptyIngredient())
        );
    }

    function removeIngredient(targetIndex) {
        setIngredients(prev => 
            ingredientModel.removeIngredient(prev, targetIndex)
        );
    }

    return {ingredients, updateIngredient, addIngredient, removeIngredient};
}