import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import firebase from './Firestore';
import adicionarPalpite from './actions/adicionar-palpite';
import fetchPalpites from './actions/fetch-palpites';

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

class Palpite extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.props.setPalpitarFormRef(this.myRef);
        this.state = {
            nome: "",
            palpite: ""
        }
        db.collection('palpites').orderBy("created", "desc")
            .onSnapshot(function(querySnapshot) {
                props.fetchPalpites(db, querySnapshot);
            });
    }
    send() {
        this.props.adicionarPalpite(db, {
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
            <Form className="form-palpite" onSubmit={e => { this.send(); e.preventDefault(); }}>
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
                    <Input ref={this.myRef} required value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} />
                </FormGroup>
                <Button>Enviar palpite</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => { return {} };

const mapDispatchToProps = dispatch => {
    return {
        adicionarPalpite: (db, data) => adicionarPalpite(dispatch, db, data),
        fetchPalpites: (db, data) => fetchPalpites(dispatch, db, data)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Palpite);
