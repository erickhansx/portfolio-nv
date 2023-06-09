import { Fragment } from 'react';
import About from './components/About/About';
import ContactForm from './components/Contact/ContactForm';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import DropdownMenu from './components/UI/DropdownMenu';
import Navbar from './components/UI/Navbar';
import NavItem from './components/UI/NavItem';
import CTA from './components/CTA/CTA';

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
      <CTA />
      <ContactForm />
    </Fragment>
  );
}

export default App;
