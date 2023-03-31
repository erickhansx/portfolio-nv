import { Fragment } from 'react';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Modal from './components/Projects/Modal';
import Projects from './components/Projects/Projects';
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
      <Projects />
    </Fragment>
  );
}

export default App;
