import classes from './LinksAnimation.module.scss';
import {
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
  FaMediumM,
  FaAngellist,
} from 'react-icons/fa';

const LinksAnimation = () => {
  return (
    <div className={classes['animation-container']}>
      <div className={classes['animation-container--links']}>
        <a href="https://github.com/erickhansx" target="_blank">
          <FaGithubAlt />
        </a>
        <a href="https://www.linkedin.com/in/erickhansx/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/TheErickHans" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://medium.com/@erickhansx" target="_blank">
          <FaMediumM />
        </a>
        <a href="https://wellfound.com/u/erick-hans" target="_blank">
          <FaAngellist />
        </a>
      </div>
    </div>
  );
};

export default LinksAnimation;
