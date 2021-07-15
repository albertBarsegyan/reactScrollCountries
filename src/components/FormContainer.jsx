import React from 'react';
import AuthorizationContainer from './AuthorizationContainer';
import GenderContainer from './GenderContainer';
import NameInputContainer from './NameInputContainer';
import SubmitButton from './SubmitButton';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form action="get">
          <AuthorizationContainer />
          <GenderContainer />
          <NameInputContainer />
          <SubmitButton />
        </form>
      </div>
    );
  }
}
export default FormContainer;
