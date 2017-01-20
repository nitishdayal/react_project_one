import React from 'react';


export class DropDownOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const typeAheadOptions = this.props.filteredOptions;

    return this.props.searchParams.length > 0 ? (
      <ul>
        {
          typeAheadOptions
            .filter((option) => option.toLowerCase().includes(this.props.searchParams))
            .map((searchValue, index) => {
              return (
                <li key={index}>
                  <button key={index}
                    onClick={(e) => this.props.updateInput(e.target.innerHTML)}
                  >{searchValue}</button>
                </li>);
            })
        }
      </ul>
    ) : null;
  }
}

DropDownOptions.propTypes = {
  filteredOptions: React.PropTypes.array,
  searchParams: React.PropTypes.string,
  updateInput: React.PropTypes.func
};
