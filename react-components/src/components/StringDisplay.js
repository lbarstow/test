import React from 'react';

const StringDisplay = props => {
  let value = props.value.split("").reverse().join("");
  return (
    <div className="words display">
      {value}
    </div>
  );
}

export default StringDisplay;
