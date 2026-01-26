import { createContext, useContext, useMemo } from "react";
import { initRecipes } from "../data/initRecipes";


export const RecipesContext = createContext({
    recipes: [],
    addRecipe: () => {},
    deleteRecipe: () => {}
});

export default function RecipesContextProvider({children}) {
    const [recipes, setRecipes] = useLocalStorage("recipes", initRecipes);

    function addRecipe(recipe) {
        setRecipes(prev => [...prev, recipe]);
    }

    function deleteRecipe(targetId) {
        setRecipes(prev => prev.filter(({id}) => id !== targetId));
    }

    const contextValue = useMemo(() => ({
        recipes,
        addRecipe,
        deleteRecipe
    }), [recipes])

    return (
        <RecipesContext.Provider value={contextValue}>
            {children}
        </RecipesContext.Provider>
    );
}

export const useRecipes = () => useContext(RecipesContext);