import React, { Component } from 'react'
import './Forum.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default class Forum extends Component {
    render() {
        return (
            <div>
                <h1>Fit Forums</h1>
                <br/>
                <h3>
                    The City Fit Forums are a place for users new and old to share their thoughts, experiences
                    and help each other grow on their fitness journey no matter what stage they are at.  
                </h3>
                <div className ="dropDown">
                    
                    <DropdownButton id="dropdown-basic-button" title="Categories">
                        <Dropdown.Item href="#/action-1">Workout Questions</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Gym Partners</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gym Recommendations</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Fitness Health</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Workout Alternatives</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Recovery and Rehabilitation</Dropdown.Item>
                    </DropdownButton>
                    <br/>

                    <DropdownButton id="dropdown-basic-button" title="Borough">
                        <Dropdown.Item href="#/action-1">Brooklyn</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Queens</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Manhattan</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Staten Island</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bronx</Dropdown.Item>
                    </DropdownButton>
                    <br/>

                    <DropdownButton id="dropdown-basic-button" title="Experience">
                        <Dropdown.Item href="#/action-1">Beginner</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Veteran</Dropdown.Item>
                    </DropdownButton>
                    <br/>
                
                </div>

                <h5>Post Name With User/Annonymous </h5>
                <div className ="postName">
                    <div className="panel-body">
                        <textarea className ="pastPost"/>
                    </div>
                </div>
                <br/>

                <h5>Post Name With User Name/Annonymous</h5>
                <div className ="postName">
                    <div className="panel-body">
                        <textarea className ="pastPost"/>
                    </div>
                </div>
                <br/>

                <h5>Post Name With User/Annonymous </h5>
                <div className ="postName">
                    <div className="panel-body">
                        <textarea className ="pastPost"/>
                    </div>
                </div>
                <br/>
               
                
            </div>
        )
    }
}

