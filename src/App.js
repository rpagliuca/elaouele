import React, { Component } from 'react';
import "./css/style.scss"
import Jumbo from './jumbo';
import { Container } from 'reactstrap';
import Cards from './cards';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palpitarFormRef: null
        };
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

export default App;
