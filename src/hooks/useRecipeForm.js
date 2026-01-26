import { useState } from "react";
import { useRecipes } from "../context/recipesContext";
import useLocalStorage from "./useLocalStorage";

// utils
import { validateName, validateDurationTime, validateIngredient, validateTemperature } from "../utils/validators";
import { removeByIndex } from "../utils/arrayFunc";

const emptyNewRecipe = {
    name: "", 
    imgUrl: "",
    categories: [],       // Массив строк
    ingredients: [],      // Массив объектов
    temperatureC: "",     // Number
    durationMinutes: "",  // Number 
    instructions: []      // Массив строк
}

const emptyErrors = {
    errorName: [], 
    errorIngredient: [],
    errorTemperature: [],
    errorDurationMinutes: []
}

const emptyIngredient = {
    name: "",       // Строка
    amount: "",     // Number
    unit: ""        // Строка
}

const emptyInstruction = "";

export default function useRecipeForm() {
    const {newRecipe, setNewRecipe} = useLocalStorage("newRecipe", emptyNewRecipe);
    const [validityRegistry, setValidityRegistry] = useState({});
    const {addRecipe} = useRecipes();


    // Изменение всех простых полей объекта
    function handleFieldChange(e) {
        const {name, value} = e.target;
        setNewRecipe(prev => ({...prev, [name]:value}));
    }

    // Управление ингридиентами
    function addIngredient() {
        setNewRecipe(prev => ({
            ...prev, 
            ingredients: [...prev.ingredients, emptyIngredient]
        }));
    }

    function changeIngredient(index, field, value) {
        setNewRecipe(prev => ({
            ...prev, 
            ingredients: prev.ingredients.map((ingredient, i) => 
                index === i ? {...ingredient, [field]: value} : ingredient
            )
        }))
    }

    function removeIngredient(index) {
        setNewRecipe(prev => ({
            ...prev,
            ingredients: removeByIndex(prev.ingredients, index)
        }))
    }

    // Управление категориями
    function addCategory(newCategory) {
        setNewRecipe(prev => ({
            ...prev,
            categories: prev.categories.includes(newCategory) ? prev 
            : {...prev, categories: [...prev.categories, newCategory]}
        }));
    }

    function removeCategory(targetIndex) {
        setNewRecipe(prev => ({
            ...prev,
            categories: removeByIndex(prev.categories, targetIndex)
        }))
    }

    // Управление Инструкциями
    function addInstruction() {
        setNewRecipe(prev => ({
            ...prev,
            instructions: [...prev.instructions, emptyInstruction]
        }));
    }

    function changeInstruction(targetIndex, newValue) {
        setNewRecipe(prev => ({
            ...prev,
            instructions: prev.instructions.map((oldInstruction, i) => 
                targetIndex === i ? newValue : oldInstruction 
            )
        }))
    }

    function removeInstruction(index) {
        setNewRecipe(prev => ({
            ...prev,
            instructions: removeByIndex(prev.instructions, index)
        }));
    }

    // === Валидация ===

    // Реакция на изменение статуса валидности компонента
    function handleValidityChange(targetId, newValue) {
        setValidityRegistry(prev => ({
            ...prev,
            [targetId]: newValue
        }))
    }

    //Проверка валидности всех полей формы
    function validateForm() {
        const { name, ingredients, temperatureC, durationMinutes } = newRecipe;
        
        const tempErrors = {...emptyErrors};
        tempErrors.errorName = validateName(name);
        tempErrors.errorTemperature = validateTemperature(temperatureC);
        tempErrors.errorDurationMinutes = validateDurationTime(durationMinutes);
        tempErrors.errorIngredient = ingredients.map(ingredient => validateIngredient(ingredient));
        setErrors(tempErrors);

        const isValidate = tempErrors.errorName.length === 0 && 
                    tempErrors.errorTemperature.length === 0 &&
                    tempErrors.errorDurationMinutes.length === 0 &&
                    tempErrors.errorIngredient.every(
                        errs => errs.length === 0
                    )

        return isValidate;
    }

    return {
        newRecipe, 

        errors,
        setErrors,

        addRecipe, 

        handleFieldChange,

        addCategory, 
        removeCategory, 

        addIngredient, 
        changeIngredient,
        removeIngredient, 

        addInstruction,
        changeInstruction,
        removeInstruction    
    };
}