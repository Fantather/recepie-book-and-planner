
export default function MetaElement({icon, label, value, unit}) {
    return(
        <div className="col-auto d-flex align-items-center gap-2">
            <span className="fs-2">{icon}</span>
            <div className="d-flex flex-column">
                <span className="text-muted small">{label}</span>
                <span className="fw-bold">{value} {unit}</span>
            </div>
        </div>
    );
}