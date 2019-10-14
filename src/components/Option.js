import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionId)
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
