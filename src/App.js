import { Fragment } from 'react';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import DropdownMenu from './components/UI/DropdownMenu';
import Navbar from './components/UI/Navbar';
import NavItem from './components/UI/NavItem';

function App() {
  return (
    <Fragment>
      <Navbar>
        <NavItem>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <Intro />
      <About />
    </Fragment>
  );
}

export default App;
