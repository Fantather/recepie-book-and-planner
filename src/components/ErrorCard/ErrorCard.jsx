import { Alert } from "react-bootstrap";


export default function ErrorCard({errors}) {
    return(
        (errors.length !== 0) && 
        <Alert variant="danger">
            {errors.map((error, index) => <div key={index}>{error}</div>)}
        </Alert>
    )
}