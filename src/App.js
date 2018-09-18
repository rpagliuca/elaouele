import React, { Component } from 'react';
import "./css/style.scss"
import Jumbo from './jumbo';
import { Container } from 'reactstrap';
import Cards from './cards';
import { connect } from 'react-redux';
import firebase from './Firestore';
import fetchedConfig from './actions/fetched-config';

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palpitarFormRef: null
        };
        db.collection('config')
            .onSnapshot(function(querySnapshot) {
                props.fetchedConfig(querySnapshot);
            });
    }
    setPalpitarFormRef = ref => {
        this.setState({
            palpitarFormRef: ref
        });
    }
    render() {
        return (
            <Container>
                <Jumbo palpitarFormRef={this.state.palpitarFormRef} />
                <Cards setPalpitarFormRef={this.setPalpitarFormRef} />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchedConfig: (data) => fetchedConfig(dispatch, data)
    }
};

export default connect(null, mapDispatchToProps)(App);
