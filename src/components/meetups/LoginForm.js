import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './LoginForm.module.css';

function LoginForm(props) {
  const usernameInputRef = useRef();
  const passwordInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUserName = usernameInputRef.current.value;
    const enteredPassword = passwordInputref.current.value;

    const loginDate = {
      title: enteredUserName,
      Password: enteredPassword,
    };
    // console.log(loginDate);
    props.onAddLogin(loginDate);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>User Name </label>
          <input type='text' requeired id='username' ref={usernameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            requeitextred
            id='password'
            ref={passwordInputref}
          />
        </div>

        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
}
export default LoginForm;
