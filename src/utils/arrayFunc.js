export function removeByIndex(array, index) {
    return array.filter((item, i) => index !== i);
}