import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class CustomNav extends Component {

    render() {
        return (
            <Navbar bg='light' expand='lg' fixed="top">
                <Navbar.Brand href='/'>CityFit</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                        <Nav.Link href='/signup'>Sign Up</Nav.Link>
                        <Nav.Link href='/catalog'>Catalog</Nav.Link>
                        <Nav.Link href='/GymLocation'>Gym Locations</Nav.Link>
                        <Nav.Link href='/Forum'>Forums</Nav.Link>
                    </Nav>
                    <Link to='#' onClick={this.handleOpenModal}>Login</Link>
                </Navbar.Collapse>  
            </Navbar>
        )
    }
}
