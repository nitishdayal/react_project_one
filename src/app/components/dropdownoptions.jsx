import React from 'react';


export class DropDownOptions extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const filteredOptions = this.props.filteredOptions;
    const searchParams = this.props.searchParams;

    const typeAheadOptions =
      filteredOptions
        .filter((option) => option.toLowerCase().includes(searchParams))
        .map((searchValue, index) => {
          return (
            <li key={index}>
              <button key={index}
                onClick={(e) => this.props.updateInput(e.target.innerHTML)}
              >{searchValue}</button>
            </li>);
        });

    return this.props.searchParams.length > 0 ? (
      <ul>
        {typeAheadOptions}
      </ul>
    ) : null;
  }
}

DropDownOptions.propTypes = {
  filteredOptions: React.PropTypes.array,
  searchParams: React.PropTypes.string,
  updateInput: React.PropTypes.func
};
