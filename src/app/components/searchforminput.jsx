import React from 'react';


export const SearchFormInput = (props) => {
  return (
      <div>
        <input
          name="searchInput"
          onChange={props.onChange}
          value={props.value}
          autoFocus
        />
      </div>
  );
};

SearchFormInput.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.string
};
