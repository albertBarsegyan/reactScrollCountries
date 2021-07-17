/* eslint-disable max-len */
import React, { Component } from 'react';
import FormContainer from './FormContainer';
import UserDataContainer from './UserDataContainer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: '',
    };
  }

  render() {
    const { formData } = this.state;
    return (
      <div className="w-full flex flex-row items-baseline justify-center mt-4 gap-40">
        <FormContainer sendTextCode={(dataFromForm) => this.setState({ formData: dataFromForm })} />
        <UserDataContainer formObject={formData} />
      </div>
    );
  }
}
export default Header;
