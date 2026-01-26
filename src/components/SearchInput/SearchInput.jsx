import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

export default function SearchInput({onSearch}) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => onSearch(query), 500);
        return () => clearTimeout(timerId); 
    }, [query])

    return(
        <Form.Group className="d-flex gap-2 align-items-center" controlId="search-input">
            <Form.Label className="me-1">Поиск</Form.Label>
            <Form.Control onChange={e => setQuery(e.target.value)} value={query}/>
        </Form.Group>
    );
}