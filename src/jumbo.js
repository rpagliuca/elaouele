import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Olá, mundo!</h1>
        <p className="lead">Logo vocês saberão se sou menina ou menino.</p>
        <hr className="my-2" />
        <p>Palpites?</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
