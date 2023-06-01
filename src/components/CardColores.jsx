import {Form, Button, Card, Container} from "react-bootstrap";

const CardColores = ({color, borrarColor}) => {
    return (
        <Card className="d-flex">
            <Container className="row justify-content-center mt-3 mb-3 align-items-center">
            <Card.Title className="">{color}</Card.Title>
            <hr />
            <div className="color-card" style={{ backgroundColor: color }}>
            <p>{color}</p>
            </div>
            <Form className="col-lg-8 col-md-8" onSubmit={handleSubmit}>
                <Form.Group className="d-flex">
                   <Form.Control type = "text" placeholder = "Ingrese un color" onChange = {(e) => setTarea(e.target.value)}   value = {color}/>
                   <Button className="ms-3" variant="danger" onClick={()=> borrarColor(color)}>Borrar</Button>
                </Form.Group>
            </Form>
            </Container>
        </Card>  
        );
}

export default CardColores;