import React from 'react';

import { DropDownOptions } from './components/dropdownoptions';
import { SearchFormInput } from './components/searchforminput';
import { cartoonCharacters } from '../data/data';


export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOptions: cartoonCharacters,
      searchParams: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchParams: event.target.value.replace(/ {2}/g, ' ')
    });
  }

  render() {
    return (
      <div>
        <SearchFormInput
          value={this.state.searchParams}
          onChange={this.handleChange}
        />
        <DropDownOptions
          filteredOptions={this.state.filteredOptions}
          searchParams={this.state.searchParams.toLowerCase()}
          updateInput={(value) => this.setState({ searchParams: value })}
        />
      </div>
    );
  }
}
