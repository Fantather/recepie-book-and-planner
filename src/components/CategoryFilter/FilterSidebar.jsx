import { Card, Form, Stack } from "react-bootstrap";
import "./FilterSidebar.css"

export default function FilterSidebar({points, selectedPoints, onFilterClick}) {
    return(
        <Card className="filter-sidebar h-100">
            <Card.Body>
                <Card.Title>Категории</Card.Title>
                <Stack className="d-flex flex-direction-column gap-2">
                    {Object.values(points).map(point => {
                        const isSelected = selectedPoints.includes(point);
                        return (
                            <Form.Check type="checkbox" 
                                key={point} 
                                label={point}
                                checked={isSelected}
                                onClick={() => onFilterClick(point)}
                            />
                        )
                    })}
                </Stack>
            </Card.Body>
        </Card>
    );
}