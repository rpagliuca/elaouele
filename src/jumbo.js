import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Row, Col, Button } from 'reactstrap';
import Charts from './charts';
import chupeta from './img/chupeta.png';

export default class Jumbo extends React.Component{
    handleClick = e => {
        if (this.props.palpitarFormRef) {
            console.log(this.props.palpitarFormRef);
            const domNode = ReactDOM.findDOMNode(this.props.palpitarFormRef.current);
            domNode.scrollIntoView();
            domNode.focus();
        }
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col md="6">
                            <h1 className="display-3">Olá, mundo!</h1>
                            <p><img src={chupeta} /></p>
                            <p className="lead">Logo vocês saberão se sou menina ou menino.</p>
                            <Button outline size="lg" onClick={this.handleClick}>Palpitar</Button>
                        </Col>
                        <Col md="6" className="align-self-center justify-content-center">
                            <Charts />
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
};
