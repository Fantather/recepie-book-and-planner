// Категории хранятся как массив строк, поэтому FIELD не требуется.


// === Управление массивом категорий ===

export function getDefaultCategoriesArray() {
  return [];
}

/**
 * Добавляет категорию, только если её еще нет в списке.
 * Исключает дубликаты.
 */
export function addCategory(categories, newCategory) {
  if (categories.includes(newCategory)) {
    return categories;
  }
  return [...categories, newCategory];
}

export function removeCategory(categories, targetCategory) {
  return categories.filter((cat) => cat !== targetCategory);
}

/**
 * Переключатель (Toggle).
 * Если категория есть — удаляет, если нет — добавляет.
 * Удобно для UI чекбоксов/фильтров.
 */
export function toggleCategory(categories, targetCategory) {
  if (categories.includes(targetCategory)) {
    return removeCategory(categories, targetCategory);
  }
  return addCategory(categories, targetCategory);
}