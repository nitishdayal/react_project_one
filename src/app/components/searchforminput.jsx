import React, { PropTypes } from 'react';


export const SearchFormInput = (props) => {
  const passVal = (e) => props.onChange(e.target.value);

  return (
      <div>
        <input
          name="searchInput"
          onChange={passVal}
          onFocus={passVal}
          value={props.value}
          autoFocus
        />
      </div>
  );
};

SearchFormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
