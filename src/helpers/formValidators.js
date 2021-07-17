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

// password valid
export function passwordValidator(evn, stateName) {
  const inputValue = evn.target.value.trim() ?? evn;

  const allLettersRegex = /^[a-zA-Z]+$/;
  const allNumbersRegex = /^[0-9]+$/;
  if (inputValue.length < 8) {
    this.setState({ [stateName]: 'Password length must be greater than 8 characters.' });
    return;
  }
  if (inputValue.match(allLettersRegex)) {
    this.setState({ [stateName]: 'Password must contain at least one number.' });
    return;
  }
  if (inputValue.match(allNumbersRegex)) {
    this.setState({ [stateName]: 'Password must contain at least one letter.' });
    return;
  }
  if (inputValue.length > 16) {
    this.setState({ [stateName]: 'Password must be lass than 16 characters.' });
    return;
  }
  this.setState({ [stateName]: '' });
  this.setState({ password: inputValue });
}

// repeat password input checker
export function repeatPasswordCheck(evn, stateName) {
  const inputVal = evn.target.value.trim();
  if (inputVal !== this.state.password || inputVal === '') {
    this.setState({ [stateName]: "Passwords don't match!" });
    return;
  }
  this.setState({ [stateName]: '' });
}

// if focus out and input is empty valid
export function emptyInputCheck(evn, stateName, stateValue) {
  if (evn.target.value === '') {
    this.setState({ [stateName]: [stateValue] });
  }
}

export function submitHandler(evn) {
  evn.preventDefault();
  let formObject = new FormData(evn.target);
  const notErrors = Object.values(this.state).every((item) => item === '');

  if (notErrors) {
    formObject = [...formObject.entries()];
    console.log(formObject);
  }
}
