/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

// user name and surname valid
export function usernameValidator(evn, stateName, stateValue) {
  const nameRegex = /^[a-zA-Z0-9_ ]*$/;
  const inputValue = evn.target.value.trim();
  if (inputValue.match(nameRegex)) {
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
  const { repeatPassword } = this.state;
  const allLettersRegex = /^[a-zA-Z]+$/;
  const allNumbersRegex = /^[0-9]+$/;

  if (!inputValue.match(/^[a-zA-Z0-9]+$/)) {
    this.setState({ [stateName]: 'Password must contain numbers and letters(A-Z,a-z). ' });
    return;
  }

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
  this.setState({ [stateName]: '', password: inputValue });

  if (repeatPassword !== '' && repeatPassword === inputValue) {
    this.setState({ repeatPasswordError: '' });
    return;
  }
  if (repeatPassword !== '' && repeatPassword !== inputValue) {
    this.setState({ [stateName]: 'Passwords don\'t match. ' });
  }
}

// repeat password input checker
export function repeatPasswordCheck(evn, errorName) {
  const inputValue = evn.target.value.trim();
  if (this.state.password === '') {
    this.setState({ [errorName]: 'Type valid password.' });
    return;
  }
  if (inputValue !== this.state.password || inputValue === '') {
    this.setState({ [errorName]: "Passwords don't match!" });
    return;
  }

  this.setState({ repeatPassword: inputValue, [errorName]: '', passwordError: '' });
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

  const { sendTextCode } = this.props;
  // check is there error inside inputs
  const notErrors = Object.values(this.state)
    .every((item) => item === '');

  if (notErrors) {
    formObject = JSON.stringify(Object.fromEntries([...formObject.entries()]), null, ' ');
    sendTextCode(formObject);
    evn.target.reset();
  }
}
export function handlePasswordBlur(e, current, target) {
  if (e.target.value !== '' && e.target.value === this.state[target] && this.state.passwordError === '' && this.state.repeatPasswordError === '') {
    this.setState({ [current]: '', [target]: '' });
  }
}

// name first letter to upper case
function formatInputName(string) {
  let formateString;
  if (string.includes(' ')) {
    formateString = string.split(' ').map((item) => item[0].toUpperCase() + item.substring(1, item.length).toLowerCase()).join(' ');
    return formateString;
  }
  formateString = string[0].toUpperCase() + string.substring(1, string.length).toLowerCase();
  return formateString;
}
