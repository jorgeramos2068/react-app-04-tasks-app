import React from 'react';

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.optionId + 1}. {props.optionText}</p>
      <button
        className="button button--link"
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
