import React, { Component } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

class UserDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(prevProps, prevState) {

  }

  render() {
    const { formObject } = this.props;
    return (
      <div className="flex-col justify-center items-center h-auto w-5/12">
        <div><h1 className="text-center text-gray-800 text-4xl">Form data</h1></div>
        <div className="mt-4">
          <CopyBlock
            text={formObject}
            theme={dracula}
            language="js"
            showLineNumbers="true"
            startingLineNumber="2"
            codeBlock
          />
        </div>
      </div>
    );
  }
}
export default UserDataContainer;
