import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import Palpite from './palpite';
import { connect } from 'react-redux';
import Animation from 'react-addons-css-transition-group';

class Cards extends React.Component {
    render() {
        return (
            <CardColumns>
                <Card>
                    <CardBody>
                        <CardTitle>Palpite</CardTitle>
                        <Palpite />
                    </CardBody>
                </Card>
                <Animation
                    transitionName="animation-add-card"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.props && this.props.cards && this.props.cards.map((i, k) => (
                        <Card key={k} className={'palpite-' + i.palpite.toLowerCase()}>
                            <CardBody>
                                <CardTitle>{i.nome}</CardTitle>
                                <CardSubtitle>{i.palpite}</CardSubtitle>
                            </CardBody>
                        </Card>
                    ))}
                </Animation>
            </CardColumns>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    };
};

export default connect(mapStateToProps)(Cards);
