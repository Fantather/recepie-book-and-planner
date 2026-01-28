import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './pages/SearchPage/SearchPage';
import RecipeFormPage from './pages/RecipeFormPage/RecipeFormPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailsPage';

import { initRecipes } from './data/initRecipes';
function App() {
  return (
    <>
      <RecipeFormPage/>
      {/* <SearchPage/> */}
      {/* <RecipeDetailsPage recipe={initRecipes[0]}/> */}
    </>
  )
}

export default App
