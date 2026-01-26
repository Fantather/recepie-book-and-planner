export default function IngredientList({ ingredients }) {
    return (
        <ul className="list-group">
            {ingredients.map((item, index) => (
                <li 
                    key={index} 
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span>{item.name}</span>
                    <span className="text-muted fw-bold">
                        {item.amount > 0 ? item.amount : ""} {item.unit}
                    </span>
                </li>
            ))}
        </ul>
    );
}