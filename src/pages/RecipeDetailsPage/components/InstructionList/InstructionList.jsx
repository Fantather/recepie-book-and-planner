import { Card } from "react-bootstrap";

export default function InstructionList({instructions}) {
    const maxSteps = instructions.length;
    return(
        <div>
            {instructions.map((instruction, index) => 
                <Card key={instruction.id} className="mb-3">
                    <Card.Header>Шаг {index + 1}/{maxSteps}</Card.Header>
                    <Card.Body>{instruction.text}</Card.Body>
                </Card>
            )}
        </div>
    );
}