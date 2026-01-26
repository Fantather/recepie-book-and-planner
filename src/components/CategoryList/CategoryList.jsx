export default function CategoryList({categories}) {
    if (!categories) return;
    return (
        <div className="d-flex gap-2">
        {categories.map(category => 
            <span 
                className="badge rounded-pill bg-primary"
                key={category}
            >
                {category}
            </span>
        )}
        </div>
    )
}