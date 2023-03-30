import classes from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <nav className={classes['nav-menu']}>
      <h6>Erick Hans</h6>
      <ul
        className={classes['navbar-nav']}
        style={{ backgroundColor: 'black' }}
      >
        {props.children}
      </ul>
    </nav>
  );
};

export default Navbar;
