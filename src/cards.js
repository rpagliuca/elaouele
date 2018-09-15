import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import Palpite from './palpite';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards: []};
    }
    render(props) {
        return (
            <CardColumns>
                <Card>
                    <CardBody>
                        <CardTitle>Palpite</CardTitle>
                        <Palpite />
                    </CardBody>
                </Card>
                {this.state.cards.map(i => (
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                ))}
            </CardColumns>
        );
    }
}
