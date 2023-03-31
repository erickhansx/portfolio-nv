import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  let i = 0;
  const childrenArray = React.Children.toArray(props.children);
  const chars = childrenArray[0].split('');

  const onHandleClick = (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    props.onClick(index);
  };

  return (
    <button
      type={props.type ? props.type : 'button'}
      className={classes.button}
      data-index={props['data-index']}
      onClick={onHandleClick}
    >
      {chars.map((char) => {
        i++;
        if (char === ' ') {
          return <span key={i} style={{ '--k': i, width: '1ch' }}></span>;
        }
        return (
          <span key={i} style={{ '--k': i }}>
            {char}
          </span>
        );
      })}
    </button>
  );
};

export default Button;
