import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  let i = 0;
  const childrenArray = React.Children.toArray(props.children);
  const chars = childrenArray[0].split('');
  return (
    <button
      type={props.type ? props.type : 'button'}
      className={classes.button}
    >
      {chars.map((char) => {
        i++;
        if (char === ' ') {
          return <span style={{ '--k': i, width: '1ch' }}></span>;
        }
        return <span style={{ '--k': i }}>{char}</span>;
      })}
    </button>
  );
};

export default Button;
