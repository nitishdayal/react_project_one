import React from 'react';


export const DropDownOptions = (props) => {
  const filteredOptions = props.filteredOptions;
  const searchParams = props.searchParams;

  const typeAheadOptions =
    filteredOptions
      .filter((option) => option.toLowerCase().includes(searchParams))
      .map((searchValue, index) => {
        return (
          <li key={index}>
            <button
              key={index}
              onClick={(e) => props.updateInput(e.target.innerHTML)}
            >{searchValue}</button>
          </li>);
      });

  return props.searchParams.length > 0 ? (
    <ul>
      {typeAheadOptions}
    </ul>
  ) : null;
};

DropDownOptions.propTypes = {
  filteredOptions: React.PropTypes.array,
  searchParams: React.PropTypes.string,
  updateInput: React.PropTypes.func
};
