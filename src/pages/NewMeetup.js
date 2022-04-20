import NewMeetupFom from '../components/meetups/NewMeetupForm';
function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-1f619-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupFom onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
