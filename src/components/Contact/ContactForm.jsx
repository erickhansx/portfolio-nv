import { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import Button from '../UI/Button';
import classes from './ContactForm.module.scss';
import { AiFillStar } from 'react-icons/ai';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/1f1e9820-d03b-11ed-9802-15820248f1c1';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      submitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div> Thank you!</div>
        <div> We'll get back to you soon </div>
      </>
    );
  }

  return (
    <SectionWrapper styles={'height-70'}>
      <div className={classes['form-header__container']}>
        <h1 className={classes['form-header']}>
          <span>
            <AiFillStar />
          </span>
          Contact me
        </h1>
      </div>
      <div className={classes['form-parent']}>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          className={classes.form}
        >
          <div className={classes['form-name']}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="form-name__input"
              required
            />
          </div>

          <div className="form-email">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-email__input"
              required
            />
          </div>

          <div className="form-message">
            <label htmlFor="message">Enter your message</label>
            <textarea
              maxLength="100"
              placeholder="Your message"
              name="message"
              className="form-message__text-area"
              required
            />
          </div>

          <div className="form-button">
            <Button className="" type="submit">
              Send a message
            </Button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
