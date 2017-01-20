import React from 'react';


export class SearchFormInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input name="searchInput"
          onChange={this.props.onChange}
          value={this.props.value}
          autoFocus
        />
      </div>
    );
  }
}

SearchFormInput.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.string
};
