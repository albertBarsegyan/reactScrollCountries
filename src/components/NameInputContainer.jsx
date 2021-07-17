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
    const { sendNameError, sendSurnameError } = this.props;
    return (
      <div className="flex flex-col items-center justify-around">
        <div className="my-2">
          <CommonInput
            type="text"
            name="userName"
            placeholder="Name"
            errorMessage={nameError}
            onChange={(e) => {
              this.usernameValidator(e, 'nameError', 'Invalid name.');
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'nameError', 'Name is empty.');
              sendNameError(nameError);
            }}
          />
        </div>
        <div className="my-2">
          <CommonInput
            type="text"
            name="userSurname"
            placeholder="Surname"
            errorMessage={surnameError}
            onChange={(e) => {
              this.usernameValidator(e, 'surnameError', 'Invalid surname.');
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'surnameError', 'Surname is empty.');
              sendSurnameError(surnameError);
            }}
          />
        </div>
      </div>
    );
  }
}

export default NameInputContainer;
