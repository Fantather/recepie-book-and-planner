import { Card } from "react-bootstrap";

export default function InstructionList({instructions}) {
    const maxSteps = instructions.length;
    return(
        <div>
            {instructions.map((instruction, index) => 
                <Card key={index} className="mb-3">
                    <Card.Header>Шаг {index + 1}/{maxSteps}</Card.Header>
                    <Card.Body>{instruction}</Card.Body>
                </Card>
            )}
        </div>
    );
}