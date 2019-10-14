import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <p>Total of elements: {props.options.length}</p>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option, i) => (
          <Option
            key={i}
            optionId={i}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

export default Options;
