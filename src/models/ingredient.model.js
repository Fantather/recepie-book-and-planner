export const FIELD = {
    ID: "id",
    NAME: "name",
    AMOUNT: "amount",
    UNIT: "unit"
};

// Управление одним ингридиентом
export function getEmptyIngredient() {
    return getIngredient();
}

export function getIngredient(name = "", amount = "", unit = "") {
    return {
        [FIELD.ID]: crypto.randomUUID(),
        [FIELD.NAME]: name, 
        [FIELD.AMOUNT]: amount,
        [FIELD.UNIT]: unit
    }
}

export function updateIngredient(ingredient, field, newValue) {
    return {...ingredient, [field]: newValue};
}



// === Управление массивом ингридиентов ===
// Я понимаю что мог бы сделать поиск через id и это было бы максимально надёжно и в целом удобнее
// Но id я добавил сильно позже, когда модели дописал и начал писать UI и уже не хотел переписывать


export function getDefaultIngredientsArray() {
    return [getEmptyIngredient()];
}

export function pushIngredient(ingredients, newIngredient) {
    return [...ingredients, newIngredient];
}

export function removeIngredient(ingredients, targetIndex) {
    return ingredients.filter((ingredient, i) => i !== targetIndex);
}

export function updateIngredientInArray(ingredients, newValue, targetIndex, field) {
    return ingredients.map((ingredient, i) => 
                targetIndex === i ? 
                updateIngredient(ingredient, field, newValue) 
                : ingredient
            )
}