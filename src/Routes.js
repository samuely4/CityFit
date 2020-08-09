import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from './components/Registration/UserForm';
import Profile from './components/Profile/Profile2';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import Catalog from './components/Catalog/CatalogHome';
import Workouts from './components/Catalog/CatalogNavigator';
import Gyms from './components/GymLocation/Gyms';
// import Forum from './components/Forum/Forum';
import Forum from './components/Forum/Forum2';
import PostThread from './components/Forum/PostThread';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <PrivateRoute exact path='/userform' component={UserForm} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/catalog' component={Catalog} />
                <Route path='/catalog/:category' component={Workouts} />
                {/* <Route exact path='/gym_location' component={Gyms} /> */}
                {/* <Route exact path='/forum' component={Forum}/>  */}
                <Route exact path='/forum' component={Forum}/> 
                <PrivateRoute exact path='/forum/:postid' component={PostThread}/> 
            </Router>
        )
    }
}
