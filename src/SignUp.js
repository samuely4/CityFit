import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

const styles = {
	button: {
		margin: 15
	}
}

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		const { email, password, confirmPassword } = event.target.elements;

		if(password.value === confirmPassword.value && password.value.length > 0) {
			try {
				await app
					.auth()
					.createUserWithEmailAndPassword(email.value, password.value);
				history.push("/userform");
			} catch (error) {
				alert(error);
			}
		} else {
			alert('Your Passwords Do Not Match')
		}
	}, [history]);

  	return (
		<div style={{height: '100vh'}}>
			<form onSubmit={handleSignUp} className='signUp'>
				<React.Fragment>
					<h2>Please Enter An Email and A Password</h2>
					<TextField
						name="email"
						type='email'
						label='Email'
					/>
					<br />
					<TextField
						name="password"
						type="password"
						label='Password'
					/>
					<br />
					<TextField
						name="confirmPassword"
						type="password"
						label='Confirm Password'
					/>
					<br />
					<Button
						color='primary'
						variant='contained'
						style={styles.button}
						type="submit"
					>
						Sign Up
					</Button>
				</React.Fragment>
			</form>
		</div>
  	);
};

export default withRouter(withStyles(styles)(SignUp));
