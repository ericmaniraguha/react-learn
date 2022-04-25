import { useHistory } from 'react-router-dom';

import LoginForm from '../components/meetups/LoginForm';

function LoginPage() {
  const history = useHistory();

  function addLoginHandler(loginData) {
    fetch(
      'https://react-getting-started-1f619-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(loginData),
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
      <h1>Login Page</h1>
      <LoginForm onAddLogin={addLoginHandler} />
    </section>
  );
}

export default LoginPage;
