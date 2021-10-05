import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'

const Details = (props) => {
    const { cId } = useParams()
    const { cName, teacher, price, ctype, cThumb } = props
    console.log(props)
    return (
        <div className="card-details">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.cThumb} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;