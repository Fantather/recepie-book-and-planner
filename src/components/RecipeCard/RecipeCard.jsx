import "./RecipeCard.css"

import { Card, Ratio } from "react-bootstrap";
import CategoryList from "../CategoryList/CategoryList";

export default function RecipeCard({imgUrl, name, categories, description}) {
    return(
        <Card className="h-100">
            <Ratio aspectRatio="16x9">
                <Card.Img src={imgUrl} alt="name" className="object-fit-cover"/>
            </Ratio>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <CategoryList categories={categories} />
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}