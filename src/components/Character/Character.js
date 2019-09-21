import React from 'react';
import PropTypes from 'prop-types';
import './Character.css';

const Character = React.memo(({ name, isSelected, onClick }) => {
  let className = `character`;
  if (isSelected) {
    className += ' active';
  }
  return (
    <div className={className} onClick={onClick}>
      {name}
    </div>
  );
});

Character.propTypes = {
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

export { Character };
