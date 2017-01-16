import React from 'react';

import { DropDownOptions } from './dropdownoptions';


export class SearchFormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: '',
      id: Date
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchParams: event.target.value, id: Date.now() });
    // const console = window.console;
    // console.log(`${this.state.searchParams}`);
  }

  render() {
    return (
      <div>
        <input list="cartoonCharacters" name="searchInput"
          value={this.state.searchParams} onChange={this.handleChange}
          autoFocus="true"
        />
        <DropDownOptions searchParams={this.state.searchParams} />
      </div>
    );
  }
}
