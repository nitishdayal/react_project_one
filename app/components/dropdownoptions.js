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
    const typeAheadOptions = this.state.filteredOptions;
    return this.props.searchParams.length > 0 ?
      (
        <ul>
          {
            typeAheadOptions
              .filter((option) => option.toLowerCase().includes(this.props.searchParams))
              .map((searchValue, index) => <li key={index}>
              <button key={index}>{searchValue}</button>
              </li>)
          }
        </ul>
      ) : null;
  }
}

DropDownOptions.propTypes = {
  searchParams: React.PropTypes.string
};
