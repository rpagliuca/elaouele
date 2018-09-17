import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import Charts from './charts';

export default (props) => {
    return (
        <div>
            <Jumbotron>
                <Row>
                    <Col md="6">
                        <h1 className="display-3">Olá, mundo!</h1>
                        <p className="lead">Logo vocês saberão se sou menina ou menino.</p>
                    </Col>
                    <Col md="6" className="align-self-center justify-content-center">
                        <Charts />
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};
