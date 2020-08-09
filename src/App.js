import React, { Component } from 'react';
import { AuthProvider } from './Auth';
import Routes from './Routes';
import firebase from './base';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       loggedIn: false
    }
  }

  componentDidMount() {
    this.handleLoggingIn()
  }

  handleLoggingIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          ...this.state,
          open: false,
          loggedIn: true,
        })
      }
    })
  }

  handleSignOut = () => {
    firebase.auth().signOut();
    this.setState({
      ...this.state,
      loggedIn: false,
    })
  }

  render() {
    return (
      <div className='App'>
        <AuthProvider>
          <Navbar bg='light' expand='lg' sticky='top'>
            <Navbar.Brand href='/'>CityFit</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/profile'>Profile</Nav.Link>
                    <Nav.Link href='/catalog'>Catalog</Nav.Link>
                    <Nav.Link href='/forum'> Fit Forums</Nav.Link>
                </Nav>
                <Nav>
                {
                  this.state.loggedIn ? 
                    <Nav.Link href='#' onClick={this.handleSignOut}>Sign Out</Nav.Link> 
                    : 
                    (
                      <>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/signup'>Sign Up</Nav.Link>
                      </>
                    )
                }
                </Nav>
            </Navbar.Collapse>  
          </Navbar>

          <Routes />
        </AuthProvider>
      </div>
      
    );
  }
}

export default App;
