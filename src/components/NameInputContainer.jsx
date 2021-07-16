import React, { Component } from 'react';
import CommonInput from './CommonInput';
import { usernameValidator, emptyInputCheck } from '../helpers/formValidators';

class NameInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: '',
      surnameError: '',
    };
    this.usernameValidator = usernameValidator.bind(this);
    this.emptyInputCheck = emptyInputCheck.bind(this);
  }

  render() {
    const { nameError, surnameError } = this.state;
    return (
      <div className="flex flex-col items-center justify-around">
        <div className="my-2">
          <CommonInput
            type="text"
            name="Hello"
            placeholder="Name"
            errorMessage={nameError}
            onChange={(e) => { this.usernameValidator(e, 'nameError', 'Invalid name'); }}
            onBlur={(e) => { this.emptyInputCheck(e, 'nameError', 'Invalid name'); }}
          />
        </div>
        <div className="my-2">
          <CommonInput
            type="text"
            placeholder="Surname"
            errorMessage={surnameError}
            onChange={(e) => { this.usernameValidator(e, 'surnameError', 'Invalid surname'); }}
            onBlur={(e) => { this.emptyInputCheck(e, 'surnameError', 'Invalid surname'); }}
          />
        </div>
      </div>
    );
  }
}

export default NameInputContainer;
