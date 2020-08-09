import React, { useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

const Login = () => {
  const handleLogin = (
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        alert(error);
      }
    }
  )

  const { currentUser } = useContext(AuthContext);

  if (currentUser === 'wait') {
    return <Redirect to="/login" />;
  } else if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={handleLogin} id='loginContainer'>
      <div id='loginImage'></div>

        <div id='login'>
          <h3>Welcome to CityFit</h3>
          <h6>Please Enter Your Email and Password</h6>
          <TextField
            name="email"
            label='Email'
            type='email'
          />
          <br />
          <TextField
            name="password"
            label='Password'
            type="password"
          />
          <br />
          <Button
            color='primary'
            style={styles.button}
            type="submit"
            variant='contained'
          >
            Login
          </Button>
          <Button
            color='primary'
            style={styles.button}
            type="submit"
            variant='contained'
          >
            <Link to='/signup' style={{textDecoration: 'none', color: 'white'}}>Sign Up</Link>
          </Button>
        </div>
    </form>
  );
};

const styles = {
  button: {
    margin: 15
  }

}

export default withRouter(Login);
