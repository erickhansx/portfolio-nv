import SectionWrapper from '../Layout/SectionWrapper';
import Button from '../UI/Button';
import classes from './Intro.module.scss';

const Intro = () => {
  return (
    <SectionWrapper styles={'height-80 flex'}>
      <div id="top" className={`${classes['text-intro']}`}>
        <h6>creative & intuitive developing</h6>
        <p>
          building the web,
          <br /> one stack at a time.
        </p>
        <a href="#contact">
          <Button> Contact me</Button>
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Intro;
