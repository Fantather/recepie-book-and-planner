import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link } from 'react-router-dom'; 

import SearchPage from './pages/SearchPage/SearchPage';
import RecipeFormPage from './pages/RecipeFormPage/RecipeFormPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailsPage';

import { initRecipes } from './data/initRecipes';
function App() {
  return (
    <>
      <article>
        <Link to="/">Поиск</Link>
        <Link to="/createRecipe">Добавить рецепт</Link>
      </article>
      <Routes>
        <Route path='/' element={<SearchPage/>} />
        <Route path='/createRecipe' element={<RecipeFormPage/>} />
        <Route path='/details/:id' element={<RecipeDetailsPage recipe={initRecipes[0]}/>} />
      </Routes>
    </>
  )
}

export default App
