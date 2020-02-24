import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

function ListComponent(props){
    return(
        <Row>
            <Col><ListGroup.Item as="li" >{props.currency}</ListGroup.Item></Col>
            <Col><ListGroup.Item as="li" >{props.value}</ListGroup.Item></Col>
        </Row>
    );
}

export default ListComponent; 