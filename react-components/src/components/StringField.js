import React from 'react';

const StringField = props => {
  return (
    <div className="words">
      <input
        size={props.value.length + 1}
        onChange={props.onChange}
        type='text'
        value={props.value}
      />
    </div>
  );
}

export default StringField;
