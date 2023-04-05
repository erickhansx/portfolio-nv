import classes from './CTA.module.scss';
import Button from '../UI/Button';
import SectionWrapper from '../Layout/SectionWrapper';

const CTA = () => {
  return (
    <SectionWrapper styles={'height-80 flex'}>
      <div className={classes['lets-connect']}>
        <h1 className={classes.header}>
          <span className={classes.lets}>Let's</span>{' '}
          <span className={classes.connect}>Connect!</span>
        </h1>
        <div className={classes.skillsh}>
          <h1>Some of my skills are:</h1>
        </div>
        <div className={classes.skills}>
          <span className={classes.circular}>Web Development</span>
          <span className={classes.circular}>React</span>
          <span className={classes.circular}>Project Management</span>
          <span className={classes.circular}>Remote Working</span>
          <span className={classes.circular}>Ruby on Rails</span>
          <span className={classes.circular}>Postgresql</span>
          <span className={classes.circular}>Communication</span>
          <span className={classes.circular}>JavaScript</span>
        </div>
        <div className={classes.cta}>
          <span className={classes['cta-span']}>
            Are you minding a project?
          </span>
          <a href="#contact" className={classes.button}>
            <Button>Contact Me</Button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
