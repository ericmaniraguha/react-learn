import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputref = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputref.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' requeired id='title' ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='title'>Meetup Image</label>
          <input type='url' requeitextred id='image' ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' requeitextred id='address' ref={addressInputref} />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            id='description'
            requeired
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
