import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Row, Col, Button } from 'reactstrap';
import Charts from './charts';
import chupeta from './img/chupeta.png';
import { connect } from 'react-redux';

class Jumbo extends React.Component{
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
                <Jumbotron className={"jumbo-resultado-" + this.props.sexo}>
                    <Row>
                        <Col md="6">
                            <h1 className="display-3">
                                {!this.props.sexo && "Olá, mundo!"}
                                {this.props.sexo === 'menino' && "Sou menino!"}
                                {this.props.sexo === 'menina' && "Sou menina!"}
                            </h1>
                            <p><img src={chupeta} alt="" /></p>
                            <p className="lead">
                                {!this.props.sexo && "Logo vocês saberão se sou menina ou menino."}
                            </p>
                            {!this.props.sexo && <Button outline size="lg" onClick={this.handleClick}>Palpitar</Button>}
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

const mapStateToProps = state => {
    return {
        sexo: state.config.sexo
    }
};

export default connect(mapStateToProps)(Jumbo);
