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
      <div className="border-b border-purple-500 px-4 py-6">
        <form action="get">
          <NameInputContainer />
          <AuthorizationContainer />
          <GenderContainer />
          <SubmitButton />
        </form>
      </div>
    );
  }
}
export default FormContainer;
