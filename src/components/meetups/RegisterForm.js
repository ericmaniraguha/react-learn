import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './RegisterForm.module.css';

function RegisterForm(props) {
  const usernameInputRef = useRef();
  const profileInputRef = useRef();
  const passwordInputref = useRef();
  const confirmpasswordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredProfile = profileInputRef.current.value;
    const enteredPassword = passwordInputref.current.value;
    const enteredConfirmPassword = confirmpasswordInputRef.current.value;

    const registerData = {
      username: enteredUsername,
      profile: enteredProfile,
      password: enteredPassword,
      confirmpassword: enteredConfirmPassword,
    };

    props.onAddRegister(registerData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='registerform'>Registration Form</label>
          <input type='text' requeired id='username' ref={usernameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='profile'>Profile</label>
          <input type='url' requeitextred id='image' ref={profileInputRef} />
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

        <div className={classes.control}>
          <label htmlFor='confirmationpassword'>Confirm Password</label>
          <input id='password' requeired ref={confirmpasswordInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </form>
    </Card>
  );
}
export default RegisterForm;
