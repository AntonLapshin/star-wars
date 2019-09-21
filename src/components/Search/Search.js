import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = React.memo(({ value, placeholder, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        onChange={e => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        value={value}
        spellCheck={false}
      />
      <span className="input-highlight">{value.replace(/ /g, '_')}</span>
    </div>
  );
});

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

Search.defaultProps = {
  placeholder: 'Search...'
};

export { Search };
