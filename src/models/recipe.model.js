import * as ingredientModel from "./ingredient.model"
import * as categoryModel from "./category.model"
import * as instructionModel from "./instruction.model"

export const FIELD = {
    NAME: "name",
    IMG_URL: "imgUrl",
    CATEGORIES: "categories",
    INGREDIENTS: "ingredients",
    TEMPERATURE_C: "temperatureC",
    DURATION_MINUTES: "durationMinutes",
    INSTRUCTIONS: "instructions"
}
const {NAME, IMG_URL, CATEGORIES, INGREDIENTS, TEMPERATURE_C, DURATION_MINUTES, INSTRUCTIONS} = FIELD;

export function getRecipe(
    name = "", 
    imgUrl = "", 
    categories = categoryModel.getDefaultCategoriesArray(), 
    ingredients = ingredientModel.getDefaultIngredientsArray(), 
    temperatureC = "", 
    durationMinutes = "", 
    instructions = instructionModel.getDefaultInstructionsArray() // <-- Теперь берем отсюда
) {
    return {
        [NAME]: name, 
        [IMG_URL]: imgUrl,
        [CATEGORIES]: categories,
        [INGREDIENTS]: ingredients,
        [TEMPERATURE_C]: temperatureC,
        [DURATION_MINUTES]: durationMinutes, 
        [INSTRUCTIONS]: instructions
    } 
}

export function getEmptyRecipe() {
    return getRecipe();
}


// === Работа с Названием ===
export function updateName(recipe, newName) {
    return {...recipe, [NAME]: newName};
}


// === Работа с Картинкой ===
export function updateImgUrl(recipe, newImgUrl) {
    return {...recipe, [IMG_URL]: newImgUrl};
}


// === Работа с Категориями ===

export function addCategory(recipe, newCategory) {
    const currentList = recipe[CATEGORIES];
    const newList = categoryModel.addCategory(currentList, newCategory);
    return { ...recipe, [CATEGORIES]: newList };
}

export function removeCategory(recipe, targetCategory) {
    const currentList = recipe[CATEGORIES];
    const newList = categoryModel.removeCategory(currentList, targetCategory);
    return { ...recipe, [CATEGORIES]: newList };
}

export function toggleCategory(recipe, targetCategory) {
    const currentList = recipe[CATEGORIES];
    const newList = categoryModel.toggleCategory(currentList, targetCategory);
    return { ...recipe, [CATEGORIES]: newList };
}


// === Работа с Ингредиентами  ===

export function addIngredient(recipe, newIngredient) {
    const currentList = recipe[INGREDIENTS];
    const newList = ingredientModel.addIngredient(currentList, newIngredient);
    return {...recipe, [INGREDIENTS]:newList};
}

export function removeIngredient(recipe, targetIndex) {
    const currentList = recipe[INGREDIENTS];
    const newList = ingredientModel.removeIngredient(currentList, targetIndex);
    return {...recipe, [INGREDIENTS]:newList};
}

export function updateIngredient(recipe, targetIndex, field, newValue) {
    const currentList = recipe[INGREDIENTS];
    const newList = ingredientModel.updateIngredientInArray(currentList, targetIndex, field, newValue);
    return {...recipe, [INGREDIENTS]:newList};
}


// === Работа с Температурой ===
export function updateTemperature(recipe, newTemperature) {
    return {...recipe, [TEMPERATURE_C]: newTemperature}
}


// === Работа с Длительностью ===
export function updateDurationMinutes(recipe, newDuration) {
    return {...recipe, [DURATION_MINUTES]: newDuration}
}

// === Работа с Инструкциями ===

export function addInstruction(recipe) {
    const newInstruction = instructionModel.getEmptyInstruction();
    const currentList = recipe[INSTRUCTIONS];
    
    const newList = instructionModel.addInstruction(currentList, newInstruction);
    return { ...recipe, [INSTRUCTIONS]: newList };
}

export function removeInstruction(recipe, targetId) {
    const currentList = recipe[INSTRUCTIONS];
    const newList = instructionModel.removeInstruction(currentList, targetId);
    return { ...recipe, [INSTRUCTIONS]: newList };
}

export function updateInstruction(recipe, targetId, newText) {
    const currentList = recipe[INSTRUCTIONS];
    const newList = instructionModel.updateInstructionInArray(currentList, targetId, newText);
    return { ...recipe, [INSTRUCTIONS]: newList };
}