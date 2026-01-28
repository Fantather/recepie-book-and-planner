import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'; 

import SearchPage from './pages/SearchPage/SearchPage';
import RecipeFormPage from './pages/RecipeFormPage/RecipeFormPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailsPage';

import { initRecipes } from './data/initRecipes';
function App() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Книга рецептов</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Поиск</Nav.Link>
              <Nav.Link as={Link} to="/createRecipe">Добавить рецепт</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<SearchPage/>} />
        <Route path='/createRecipe' element={<RecipeFormPage/>} />
        <Route path='/details/:id' element={<RecipeDetailsPage recipe={initRecipes[0]}/>} />
      </Routes>
    </>
  )
}

export default App
