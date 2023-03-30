import SectionWrapper from '../Layout/SectionWrapper';
import classes from './About.module.scss';
import LinksAnimation from './LinksAnimation';

const About = () => {
  return (
    <SectionWrapper styles={'flex-right height-70'}>
      <div className={classes.about}>
        <div className={classes['about-main']}>
          <h1>This is my gift, my curse. Who am i? I'm Erick Hans</h1>
          <p>
            I am a full-stack developer based in Mexico, with years of
            experience in digital consulting across various areas. My passion
            lies in minimal and brutalist design, and I have expertise in React,
            JavaScript, HTML, CSS, Ruby on Rails, and GitHub. When I'm not
            coding, I love to spend time in nature, indulge in some delicious
            pizza, and appreciate different forms of art. Let's build something
            great together!
          </p>
        </div>
        <LinksAnimation />
      </div>
    </SectionWrapper>
  );
};

export default About;
