import classes from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
  return (
    <section className={`${classes['padding-global']} ${props.styles}`}>
      {props.children}
    </section>
  );
};

export default SectionWrapper;
