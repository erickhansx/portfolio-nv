import SectionWrapper from '../Layout/SectionWrapper';
import Button from '../UI/Button';
import classes from './Intro.module.scss';

const Intro = () => {
  return (
    <SectionWrapper styles={'height-80 flex'}>
      <div id="hero" className={`${classes['text-intro']}`}>
        <h6>creative & intuitive developing</h6>
        <p>
          building the web,
          <br /> one stack at a time.
        </p>
        <Button>Contact me</Button>
      </div>
    </SectionWrapper>
  );
};

export default Intro;
