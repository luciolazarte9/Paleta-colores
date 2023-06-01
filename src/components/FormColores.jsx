import {Form, Button, Card, Container} from "react-bootstrap";
import { useState, useEffect } from "react";

const FormColores = () => {
    let coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];
    const [colores, setColores] = useState(coloresLocalStorage);
    const [color, setColor] = useState('');

    useEffect(() => {
       localStorage.setItem('listaColores', JSON.stringify(colores)); 
    },[colores]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setColor([...colores, color]);
        setColor('');
    };

    return (
        <>
        <Card className="d-flex">
            <Container className="row justify-content-center mt-3 mb-3 align-items-center">
            <Card.Title className="">Administrar colores</Card.Title>
            <hr />
            <div className="color-card" style={{ backgroundColor: color }}>
            <p>{color}</p>
            </div>
            <Form className="col-lg-8 col-md-8" onSubmit={handleSubmit}>
                <Form.Group className="d-flex">
                   <Form.Control type = "text" placeholder = "Ingrese un color" onChange = {(e) => setColor(e.target.value)}   value = {color}/>
                   <Button className="ms-3" variant="primary" type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            </Container>
        </Card>        
        </>
    )

}

export default FormColores;