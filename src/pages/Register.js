import { useHistory } from 'react-router-dom';

import RegisterForm from '../components/meetups/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  function addRegisterHandler(registerData) {
    fetch(
      'https://react-getting-started-1f619-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Registration Page</h1>
      <RegisterForm onAddSignup={addRegisterHandler} />
    </section>
  );
}

export default RegisterPage;
