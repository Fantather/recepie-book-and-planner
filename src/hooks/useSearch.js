import { useState } from "react";

export default function useSearch(allRecipes = [] ,initQuery = "", initSelectedCategories = []) {
    const [query, setQuery] = useState(initQuery);
    const [selectedCategories, setSelectedCategories] = useState(initSelectedCategories);
    const currentRecipes = getSortedRecipes();

    function getSortedRecipes() {
        return allRecipes
                    .filter(recipy => 
                        selectedCategories.every(selectedCategory =>
                            recipy.categories.includes(selectedCategory)
                        )
                    )
                    .filter(({name}) => name.includes(query));
    }

    function toggleCategory(name) {
        if(selectedCategories.includes(name)) {
            unselectCategory(name);
        } else {
            selectCategory (name);
        }
    }

    // Вспомогательные функци
    function selectCategory(name) {
        setSelectedCategories(prev => [...prev, name]);
    }

    function unselectCategory(deletingName) {
        setSelectedCategories(prev => 
            prev.filter(categoryName => categoryName !== deletingName)
        )
    }

    return {currentRecipes, query, selectedCategories, setQuery, toggleCategory};
}