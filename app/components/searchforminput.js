import React from 'react';

import { DropDownOptions } from './dropdownoptions';


export class SearchFormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      searchParams: event.target.value.replace(/ {2}/g, ' ').toLowerCase()
    });
  }

  render() {
    return (
      <div>
        <input name="searchInput"
          onChange={this.handleChange}
          value={this.state.searchParams}
          autoFocus
        />
        <DropDownOptions
          searchParams={this.state.searchParams}
          updateInput={(value) => this.setState({ searchParams: value.toLowerCase() })}
        />
      </div>
    );
  }
}
