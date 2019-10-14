import React from 'react';

const Action = (props) => {
  return (
    <button
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      What should I do?
    </button>
  );
};

export default Action;
