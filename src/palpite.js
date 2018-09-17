import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import firebase from './Firestore';

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

class Palpite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            palpite: ""
        }

        db.collection('palpites') // .where("state", "==", "CA")
            .onSnapshot(function(querySnapshot) {
                var cities = [];
                querySnapshot.forEach(function(doc) {
                    cities.push(doc.data());
                });
                console.log("Current cities in CA: ", cities.join(", "));

            });

    }
    send() {
        db.collection('palpites').add({
            nome: this.state.nome,
            palpite: this.state.palpite
        });  
        this.props.adicionarPalpite({
            nome: this.state.nome,
            palpite: this.state.palpite
        });
        this.setState({
            nome: "",
            palpite: ""
        });
    }
    render(props) {
        return (
            <Form onSubmit={e => { this.send(); e.preventDefault(); }}>
                <FormGroup tag="fieldset">
                    <Label for="exampleEmail">Você acha que sou menina ou menino?</Label>
                    <FormGroup check>
                        <Label check>
                            <Input
                                name="palpite"
                                required
                                type="radio"
                                value="Menina"
                                onChange={e => this.setState({ palpite: e.target.value})}
                                checked={this.state.palpite === 'Menina'}
                            />
                            {' '}
                            Menina
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                name="palpite"
                                type="radio"
                                value="Menino"
                                onChange={e => this.setState({ palpite: e.target.value})}
                                checked={this.state.palpite === 'Menino'}
                            />
                            {' '}
                            Menino
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Qual é seu nome?</Label>
                    <Input required value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} />
                </FormGroup>
                <Button>Palpitar</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => { return {} };

const mapDispatchToProps = dispatch => {
    return {
        adicionarPalpite: data => dispatch({ type: 'ADICIONAR_PALPITE', data: data})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Palpite);
