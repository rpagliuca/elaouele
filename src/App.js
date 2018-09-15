import React, { Component } from 'react';
import "./css/style.scss"
import Jumbo from './jumbo';
import { Container } from 'reactstrap';
import Cards from './cards';

class App extends Component {
  render() {
    return (
        <Container>
            <Jumbo />
            <Cards />
        </Container>
    );
  }
}

export default App;
