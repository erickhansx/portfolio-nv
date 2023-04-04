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
        <a
          href="https://github.com/erickhansx"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://www.linkedin.com/in/erickhansx/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/TheErickHans"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://medium.com/@erickhansx"
          target="_blank"
          rel="noreferrer"
        >
          <FaMediumM />
        </a>
        <a
          href="https://wellfound.com/u/erick-hans"
          target="_blank"
          rel="noreferrer"
        >
          <FaAngellist />
        </a>
      </div>
    </div>
  );
};

export default LinksAnimation;
