import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' requeired id='title' />
        </div>

        <div className={classes.control}>
          <label htmlFor='title'>Meetup Image</label>
          <input type='url' requeitextred id='image' />
        </div>

        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' requeitextred id='address' />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea id='description' requeired rows='5'></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
