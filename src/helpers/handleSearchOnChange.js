export default function handleSearchOnChange(e, targetState, searchType) {
  if (this.state[searchType] === 'default') {
    this.setState({ [searchType]: 'name' });  
  }

  this.setState({ [targetState]: e.target.value });
}
