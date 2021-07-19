export default function handleSearchOnChange(e, targetState) {
  this.setState({ [targetState]: e.target.value });
}
