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
      <div className="w-full flex md:flex-row flex-col-reverse md:items-baseline items-center justify-center mt-4 gap-10 md:gap-20">
        <FormContainer sendTextCode={(dataFromForm) => this.setState({ formData: dataFromForm })} />
        <UserDataContainer formObject={formData} />
      </div>
    );
  }
}
export default Header;
