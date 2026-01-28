import "./RecipeDetailsPage.css"
import { Container, Row, Col } from "react-bootstrap";

import CategoryList from "../../components/CategoryList/CategoryList";
import RecipeMeta from "./components/RecipeMeta/RecipeMeta";
import IngredientList from "./components/IngredientList/IngredientList";
import InstructionList from "./components/InstructionList/InstructionList";

import { useRecipes } from "../../context/RecipesContext";
import { useParams } from "react-router-dom";

export default function RecipeDetailsPage()
{
    const {recipes} = useRecipes();
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.id === id);
    if (!recipe) {
        return <h2>Рецепт не найден</h2>;
    }

    const {
        name, 
        imgUrl,
        categories, 
        ingredients, 
        temperatureC, 
        durationMinutes, 
        instructions
    } = recipe;

    return(
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <img 
                        src={imgUrl} 
                        alt={name} 
                        className="img-fluid rounded-3 mb-3 w-100"
                    />
                    <h1 className="mb-2">{name}</h1>
                    <div className="mb-4">
                        <CategoryList categories={categories} />
                    </div>
                    <div className="mb-4">
                        <RecipeMeta durationMinutes={durationMinutes} temperatureC={temperatureC}/>
                    </div>
                    <div className="mb-5">
                        <IngredientList ingredients={ingredients} />
                    </div>
                    <div className="mb-5">
                        <h2>Пошагово</h2>
                        <InstructionList instructions={instructions}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}