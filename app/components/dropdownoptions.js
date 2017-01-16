import React from 'react';

import { cartoonCharacters } from '../data/data';


export class DropDownOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOptions: cartoonCharacters
    };
  }

  render() {
    const datalistOptions = this.state.filteredOptions;
    return this.props.searchParams.length > 0 ?
    (
      <datalist id="cartoonCharacters">
        {
          datalistOptions
          .filter((option) => option.toLowerCase().includes(this.props.searchParams.toLowerCase()))
          .map((searchValue, index) => <option key={index} value={searchValue} />)
        }
      </datalist>
    ) :
    null;
  }
}

DropDownOptions.propTypes = {
  searchParams: React.PropTypes.string
};
