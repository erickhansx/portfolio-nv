import { Fragment } from 'react';
import classes from './Navbar.module.scss';

const DropdownMenu = () => {
  return (
    <Fragment>
      <a href="#works" className={classes['menu-item']}>
        Works
      </a>
      <a href="#about" className={classes['menu-item']}>
        About
      </a>
      <a href="#contact" className={classes['menu-item']}>
        Contact
      </a>
      <a href="#contact" className={classes['menu-item']}>
        Start a project
      </a>
      <a href="#" className={classes['menu-item']}>
        Take me back to the start
      </a>
    </Fragment>
  );
};

export default DropdownMenu;
