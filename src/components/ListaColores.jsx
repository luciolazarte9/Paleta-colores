import CardColores from "./CardColores";
import {Form, Button, Card, Container} from "react-bootstrap";

const CardsCreadas = ({color, borrarColor}) => {
    return(
        colores.map((color, indexColor)=> <CardColores color={color} key = {indexColor} borrarColor={borrarColor}></CardColores>)
    )
}