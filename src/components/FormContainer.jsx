import React from 'react';
import AuthorizationContainer from './AuthorizationContainer';
import GenderContainer from './GenderContainer';
import NameInputContainer from './NameInputContainer';
import SubmitButton from './SubmitButton';
import { submitHandler } from '../helpers/formValidators';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: '',
      surnameError: '',
      passwordError: '',
      passwordRepeatError: '',
      emailError: '',
    };
    this.submitHandler = submitHandler.bind(this);
  }

  render() {
    const { surnameError, nameError, passwordError, passwordRepeatError, emailError } = this.state;
    return (
      <div className="border-b border-purple-500 px-4 py-6">
        <form onSubmit={this.submitHandler}>
          <NameInputContainer
            sendNameError={(dataFromChild) => {
              this.setState({ nameError: dataFromChild });
            }}
            sendSurnameError={(dataFromChild) => {
              this.setState({ surnameError: dataFromChild });
            }}
          />
          <AuthorizationContainer
            sendPasswordError={(dataFromChild) => {
              this.setState({ passwordError: dataFromChild });
            }}
            sendPasswordRepeatError={(dataFromChild) => {
              this.setState({ passwordRepeatError: dataFromChild });
            }}
            sendEmailError={(dataFromChild) => {
              this.setState({ emailError: dataFromChild });
            }}
          />
          <GenderContainer />
          <SubmitButton />
        </form>
      </div>
    );
  }
}
export default FormContainer;
