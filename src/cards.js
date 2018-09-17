import React from 'react';
import { Card, CardTitle, CardColumns, CardText,
 CardSubtitle, CardBody } from 'reactstrap';
import Palpite from './palpite';
import { connect } from 'react-redux';
import Animation from 'react-addons-css-transition-group';
import Loadable from 'react-loading-overlay';
import Emoji from 'react-twemoji';

const EMOJI_OPTIONS = {
}

class Cards extends React.Component {
    render() {
        return (
            <CardColumns>
                <Card className="card-empty">
                    <CardBody>
                        <CardTitle>Palpite</CardTitle>
                        <Palpite setPalpitarFormRef={this.props.setPalpitarFormRef} />
                    </CardBody>
                </Card>
                <Animation
                    transitionName="animation-add-card"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    <Loadable background="#FFFFFFDD" color="#777777" active={!this.props.isReady} spinner text="Carregando palpites...">
                        {(this.props && this.props.cards.length && this.props.cards.map((i, k) => (
                            <Card key={k} className={'card-palpite palpite-' + i.palpite.toLowerCase()}>
                                <CardBody>
                                    <Emoji options={EMOJI_OPTIONS}><CardTitle>{i.nome}</CardTitle></Emoji>
                                    <Emoji options={EMOJI_OPTIONS}><CardText>{i.recado}</CardText></Emoji>
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
