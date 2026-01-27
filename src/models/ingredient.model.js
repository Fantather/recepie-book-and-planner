export const FIELD = {
    NAME: "name",
    AMOUNT: "amount",
    UNIT: "unit"
};


export function getEmptyIngredient() {
    return getIngredient();
}

export function getIngredient(name = "", amount = "", unit = "") {
    return {
        [FIELD.NAME]: name, 
        [FIELD.AMOUNT]: amount,
        [FIELD.UNIT]: unit
    }
}