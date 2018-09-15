import React, { Component } from 'react';
import "bootstrap/scss/bootstrap.scss"
import MyJumbo from './jumbo';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
        <Container>
            <MyJumbo />
        </Container>
    );
  }
}

export default App;
