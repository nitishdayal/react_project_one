import React, { PropTypes } from 'react';


export const DropDownOptions = (props) => {
  if (props.searchParams.length < 1) { return null; }

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

  return (
    <ul>
      {typeAheadOptions}
    </ul>
  );
};

DropDownOptions.propTypes = {
  filteredOptions: PropTypes.array,
  searchParams: PropTypes.string,
  updateInput: PropTypes.func
};
