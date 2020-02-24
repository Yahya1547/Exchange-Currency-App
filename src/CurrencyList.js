import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './CurrencyList.css'

class CurrencyList extends React.Component{

    renderCurrList = () => {
        const styles = {
            borderRadius: 2,
            borderWidth: 1,
            padding: 5,
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }

        //this is to make a list of Currency that available
        
        const currList = Object.keys(this.props.data.list).map((key) => {
            return(
                    <ListGroup.Item variant="primary"as="li" style ={styles}>
                        <h1 id="Curr">{key}</h1>
                        <p>{this.props.data.list[key]}</p>
                        <Button variant="primary" name="changeTo" onClick={this.props.handleChange} value = {key}>Use This Currency</Button>
                    </ListGroup.Item>
            )
        })

        return(
            <div>
                <Container>
                    <ListGroup as="ul">
                        {currList}
                    </ListGroup>
                </Container>
            </div>
        )
    }
    render(){
        return(
            <div class="currencyList">
                {this.renderCurrList()}
            </div>
        )
    }
}

export default CurrencyList;

