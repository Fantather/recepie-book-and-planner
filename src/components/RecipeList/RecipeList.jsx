import { Row, Col } from "react-bootstrap";
import RecipeCard from "./components/RecipeCard/RecipeCard";

export default function RecipeList({recipes}) {
    return(
        <Row className="g-3">
            {recipes.map(recipe => 
                <Col md={4} key={recipe.id}>
                    <RecipeCard {...recipe}/>
                </Col>
            )}
        </Row>
    );
}