import SectionWrapper from '../Layout/SectionWrapper';
import classes from './Projects.module.scss';
import { FaCrown } from 'react-icons/fa';
import PETBNB from '../../img/PETBNB-small.jpeg';
import BookStore from '../../img/bookstore.png';
import SpaceRocket from '../../img/Leaderboard.jpeg';
import WorldData from '../../img/world-data.png';
import './Projects.scss';
import { useState } from 'react';
import Modal from './Modal';

const Projects = () => {
  const [projectsList, setProjectList] = useState([
    {
      title: 'PetBNB',
      description:
        'This project was built using React, Redux, React Router, CSS, Bootstrap, Ruby on Rails, and Postgresql, making it easy to book a room for your furry friend! Whether you have a dog or a cat, you can create a pet profile, make reservations, and delete them as needed. All data is stored and retrieved from our secure database, ensuring a seamless experience.',
      short:
        'PETBNB Whether you have a dog or a cat, you can create a pet profile, make reservations, and delete them as needed.',
      img: PETBNB,
      imgPath: require('../../img/PETBNB-small.jpeg'),
      isModalOpen: false,
      github: 'https://github.com/Full-Stack-Capstone/petbnb-front',
      livePage: 'https://fantastic-maamoul-0b2722.netlify.app/',
    },
    {
      title: 'Book Store',
      description:
        'This project is a web application that enables users to input new scores and access a leaderboard displaying the top scores. The application was implemented using the programming language JavaScript and integrated with a dedicated leaderboard API.',
      short:
        'Book Store to keep track of your read and owned books. Add, remove, and keep track of your best scores.',
      img: BookStore,
      imgPath: require('../../img/bookstore.png'),
      isModalOpen: false,
      github: 'https://github.com/erickhansx/bookstore',
      livePage: 'https://fascinating-crostata-787ee2.netlify.app/',
    },
    {
      title: 'Leaderboard',
      description:
        'This project is a web application that enables users to input new scores and access a leaderboard displaying the top scores. The application was implemented using the programming language JavaScript and integrated with a dedicated leaderboard API.',
      short:
        'Leaderboard to keep track of your gaming scores. Add, remove, and keep track of your best scores.',
      img: SpaceRocket,
      imgPath: require('../../img/Leaderboard.jpeg'),
      isModalOpen: false,
      github: 'https://github.com/erickhansx/leaderboard',
      livePage: 'https://erickhansx.github.io/leaderboard/dist/',
    },
    {
      title: 'Leaderboard',
      description:
        'Country Stocks is an app where you can check the stock values filtered by country. The app requests information from an api and displays said information on the screen.',
      short:
        'Country Stocks is an app where you can check the stock values filtered by country. The app requests information from an api and displays said information on the screen.',
      img: WorldData,
      imgPath: require('../../img/world-data.png'),
      isModalOpen: false,
      github: 'https://github.com/erickhansx/react-capstone',
      livePage: 'https://zippy-salamander-5d059d.netlify.app/',
    },
  ]);

  const animationClickHandler = (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    const newProjectList = [...projectsList];
    console.log(projectsList[index]);
    newProjectList[index].isModalOpen = true;
    setProjectList(newProjectList);
  };

  const handleModalClose = (index) => {
    projectsList[index].isModalOpen = false;
    const newProjectList = [...projectsList];
    setProjectList(newProjectList);
  };

  return (
    <SectionWrapper>
      <div id="works" className={classes['works-section']}>
        <div className={classes.header}>
          <h1>Selected Cases</h1>
          <span>
            <FaCrown />
          </span>
        </div>
        <div className="projects">
          {projectsList.map((project, index) => (
            <>
              <div
                className={`works-${index}`}
                data-index={index}
                onClick={(e) => animationClickHandler(e)}
              >
                <div className="works-text">
                  <h1>{project.title}</h1>
                  <span>{project.short}</span>
                </div>
                <div className="animation-container">
                  <div key={index} data-index={index} className="absolute-div">
                    <img src={project.img} alt="" />
                  </div>
                </div>
              </div>
              {projectsList[index].isModalOpen && (
                <Modal
                  onClose={handleModalClose}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  index={index}
                  imgPath={project.imgPath}
                  livePage={project.livePage}
                  github={project.github}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
