/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

// user name and surname valid
export function usernameValidator(evn, stateName, stateValue) {
  const nameRegex = /^[a-zA-Z0-9_.-]*$/;

  if (evn.target.value.trim().match(nameRegex)) {
    this.setState({ [stateName]: '' });
    return;
  }
  this.setState({ [stateName]: [stateValue] });
}
// user email valid
export function emailValidator(evn, stateName, stateValue) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (evn.target.value.match(regexEmail)) {
    this.setState({ [stateName]: '' });
    return;
  }
  this.setState({ [stateName]: [stateValue] });
}

// if focus out and input is empty
export function emptyInputCheck(evn, stateName, stateValue) {
  if (evn.target.value === '') {
    this.setState({ [stateName]: [stateValue] });
  }
}
