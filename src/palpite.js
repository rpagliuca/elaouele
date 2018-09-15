import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Seu nome:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label for="exampleEmail">Seu palpite:</Label>
            <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Menina
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Menino
                </Label>
            </FormGroup>
        </FormGroup>
        <Button>Palpitar</Button>
      </Form>
    );
  }
}
