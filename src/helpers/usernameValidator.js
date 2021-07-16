export const usernameValidator = (inputValue) => inputValue.trim();
export const emailValidator = (inputEmail) => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.match(regexEmail)) {
    return true;
  }
  return false;
};
