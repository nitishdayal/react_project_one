import React, { Component } from 'react';

import { DropDownOptions } from './components/dropdownoptions';
import { SearchFormInput } from './components/searchforminput';
import { cartoonCharacters } from '../data/data';


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOptions: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      filteredOptions: value.replace(/ {2}/g, ' ')
    });
  }

  render() {
    return (
      <div>
        <SearchFormInput
          onChange={this.handleChange}
        />
        <DropDownOptions
          filteredOptions={cartoonCharacters}
          searchParams={this.state.filteredOptions.toLowerCase()}
          updateInput={(value) => this.setState({ filteredOptions: value })}
        />
      </div>
    );
  }
}
