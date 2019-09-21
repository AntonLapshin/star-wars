import React from 'react';
import PropTypes from 'prop-types';
import './CharacterDetails.css';
import { schema } from './schema';

const Field = React.memo(({ title, value }) => {
  return (
    <>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </>
  );
});

const CharacterDetails = React.memo(({ data }) => {
  return (
    <div className="character-details">
      <h2>{data.name}</h2>
      <ul>
        {Object.keys(schema).map(key => (
          <li key={key}>
            <Field title={schema[key]} value={data[key]} />
          </li>
        ))}
      </ul>
    </div>
  );
});

CharacterDetails.propTypes = {
  data: PropTypes.object
};

export { CharacterDetails };
