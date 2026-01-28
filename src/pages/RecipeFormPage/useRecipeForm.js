import { useState } from "react";
import * as recipeModel from "../../models/recipe.model"; // Путь может отличаться в зависимости от структуры папок
import * as ingredientModel from "../../models/ingredient.model";

export default function useRecipeForm(initRecipe) {
  // Если начальный рецепт не передан, создаем пустой через модель
  const [recipe, setRecipe] = useState(initRecipe || recipeModel.getEmptyRecipe());

  // === Основные поля ===

  function changeName(newName) {
    setRecipe(prev => recipeModel.updateName(prev, newName));
  }

  function changeImgUrl(newUrl) {
    setRecipe(prev => recipeModel.updateImgUrl(prev, newUrl));
  }

  function changeTemperature(newTemp) {
    setRecipe(prev => recipeModel.updateTemperature(prev, newTemp));
  }

  function changeDuration(newDuration) {
    setRecipe(prev => recipeModel.updateDurationMinutes(prev, newDuration));
  }

  // === Категории ===

  // Добавить/удалить категорию


  // === Ингредиенты ===
  
  function addIngredient() {
    const emptyIngredient = ingredientModel.getEmptyIngredient();
    setRecipe(prev => recipeModel.addIngredient(prev, emptyIngredient));
  }

  function removeIngredient(index) {
    setRecipe(prev => recipeModel.removeIngredient(prev, index));
  }

  function updateIngredient(index, field, value) {
    setRecipe(prev => recipeModel.updateIngredient(prev, index, field, value));
  }

  // === Инструкции ===
  
  function addInstruction() {
    setRecipe(prev => {
        const newInstruction = instructionModel.getEmptyInstruction();
        recipeModel.addInstruction(prev, newInstruction);
    });
  }

  function removeInstruction(id) {
    setRecipe(prev => recipeModel.removeInstruction(prev, id));
  }

  function updateInstruction(id, text) {
    setRecipe(prev => recipeModel.updateInstruction(prev, id, text));
  }

  return {
    recipe,
    // Поля
    changeName,
    changeImgUrl,
    changeTemperature,
    changeDuration,
    // Коллекции
    toggleCategory,
    addIngredient,
    removeIngredient,
    updateIngredient,
    addInstruction,
    removeInstruction,
    updateInstruction
  };
}