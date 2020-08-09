import React from "react";
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import app from "./base";

const Home = () => {
  function signout() {
    app.auth().signOut()
    return (
      <Redirect to='/login' />
    )
  }
  return (
    <>
      <h1>Home Screen</h1>
      <button onClick={() => signout()}>Sign out</button>
      <Button color='primary' variant='contained'><Link to='/profile' style={{textDecoration: 'none', color: 'white', width: '100%', height: '100%'}}>Profile</Link></Button>
    </>
  );
};

export default Home;
