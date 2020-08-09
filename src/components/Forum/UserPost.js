import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

export default class UserPost extends Component {
    render() {
        return (
            <div>
                <h1>Input Post</h1>
                <br/>

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

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Make My Post Anonymous" />
                    </Form.Group>
                    

                <div className ="post">
                    <div className="panel-body">
                        <textarea className ="form-control post"/>
                        <button className= "btn btn-success post-editor-button">Post</button>
                    </div>
                </div>
                <div className ="previous-post">
                    </div>
                
            </div>
        )
    }
}
