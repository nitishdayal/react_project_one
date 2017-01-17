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
    this.setState({ searchParams: event.target.value.replace(/ /g, '').toLowerCase() });
  }


  render() {
    return (
      <div>
        <input name="searchInput"
          onChange={this.handleChange}
          autoFocus="true"
        />
        <DropDownOptions searchParams={this.state.searchParams} />
      </div>
    );
  }
}
