import Button from '../UI/Button';
import classes from './Modal.module.scss';
import { FaGithubAlt } from 'react-icons/fa';

import { HiOutlineStatusOnline } from 'react-icons/hi';
const Modal = (props) => {
  const index = props.index;
  const onHandleModalClose = (index) => {
    props.onClose(index);
  };
  return (
    <div className={classes.modal}>
      <div className={classes['modal-content']}>
        <div className={classes['modal-header']}>
          <h4 className={classes['modal-title']}>{props.title}</h4>
          <div className={classes['modal-icons']}>
            <a href="#">
              <FaGithubAlt />
            </a>
            <span>View code</span>
            <a href="#">
              <HiOutlineStatusOnline />
            </a>
            <span>Watch live</span>
          </div>
        </div>
        <div className={classes['modal-img']}>
          <img src={props.imgPath} alt="" />
        </div>
        <div className={classes['modal-body']}>
          <p>{props.description}</p>
        </div>
        <div className={classes['modal-footer']}>
          <Button
            data-index={props.index}
            className={classes['button']}
            onClick={() => onHandleModalClose(index)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
