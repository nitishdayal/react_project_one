import React from 'react';

import { cartoonCharacters } from '../data/data';


export class DropDownOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOptions: cartoonCharacters
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.updateInput(e.target.innerHTML);
  }

  render() {
    const typeAheadOptions = this.state.filteredOptions;

    return this.props.searchParams.length > 0 ? (
      <ul>
        {
          typeAheadOptions
            .filter((option) => option.toLowerCase().includes(this.props.searchParams))
            .map((searchValue, index) => {
              return (
                <li key={index}>
                  <button key={index}
                    onClick={this.handleClick}
                  >{searchValue}</button>
                </li>);
            })
        }
      </ul>
    ) : null;
  }
}

DropDownOptions.propTypes = {
  searchParams: React.PropTypes.string,
  updateInput: React.PropTypes.func
};
