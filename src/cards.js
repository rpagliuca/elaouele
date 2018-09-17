import React from 'react';
import { Card, CardTitle, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import Palpite from './palpite';
import { connect } from 'react-redux';
import Animation from 'react-addons-css-transition-group';
import Loadable from 'react-loading-overlay';

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
                    <Loadable background="#FFFFFFDD" color="#777777" active={!this.props.isReady} spinner text="Carregando palpites...">
                        {(this.props && this.props.cards.length && this.props.cards.map((i, k) => (
                            <Card key={k} className={'palpite-' + i.palpite.toLowerCase()}>
                                <CardBody>
                                    <CardTitle>{i.nome}</CardTitle>
                                    <CardSubtitle>{i.palpite}</CardSubtitle>
                                </CardBody>
                            </Card>
                        ))) || (this.props.isReady && (
                            <Card>
                                <CardBody>
                                    <CardTitle>Nenhum palpite :-(</CardTitle>
                                    <CardSubtitle>Seja o primeiro!</CardSubtitle>
                                </CardBody>
                            </Card>
                        ))}
                    </Loadable>
                </Animation>
            </CardColumns>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        isReady: state.uiCards.isReady
    };
};

export default connect(mapStateToProps)(Cards);
