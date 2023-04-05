import SectionWrapper from '../Layout/SectionWrapper';
import classes from './About.module.scss';
import LinksAnimation from './LinksAnimation';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  console.log(myElementIsVisible);
  return (
    <SectionWrapper styles={'flex-right height-70'}>
      <div className={classes.about} id="about">
        <div className={classes['about-main']}>
          <h1>This is my gift, my curse. Who am i? I'm Erick Hans</h1>
          <p ref={myRef}>
            I am a full-stack developer based in Mexico, with years of
            experience in digital consulting across various areas. My passion
            lies in minimal and brutalist design, and I have expertise in React,
            JavaScript, HTML, CSS, Ruby on Rails, and GitHub. When I'm not
            coding, I love to spend time in nature, indulge in some delicious
            pizza, and appreciate different forms of art. As a strategic thinker
            and confident communicator, I can learn new things quickly and
            collaborate effectively with remote teams. Mentoring 5+ junior
            developers to achieve concrete goals on tight deadlines with a
            success rate of 98%. Let's build something great together!
          </p>
          <LinksAnimation />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
