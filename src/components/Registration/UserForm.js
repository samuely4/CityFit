import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import { Redirect } from "react-router-dom";

const styles = {
    button: {
        margin: '15px'
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    },
    inputLabel: {
        marginTop: '15px'
    },
    select: {
        width: '135px'
    },
    listItem: {
        textAlign: 'center'
    }
}

class UserForm extends Component {
    //eventually make height and weight scroll menu's
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        borough: '',
        gender: '',
        height: '',
        weight: '',
        bodyType: '',
        fitnessGoal: ''

    }
    //Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step +1
        });
    }
    twoStepsBack = () => {
        const {step} = this.state;
        this.setState({
            step: step - 2
        });
    }

    //Back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const {firstName, lastName,borough, gender,height,weight,bodyType,
        fitnessGoal} = this.state;
        const user = { firstName, lastName, borough, gender, height, weight, bodyType, fitnessGoal }
        const { classes } = this.props
        //Change case 4 to transition to user homescreen
        
        switch (step) {
            case 1:
                return (
                    <div style={{height: '100vh'}}>
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            user={user}
                            classes={classes}
                        /> 
                    </div>  
                )
            case 2:
                return (
                    <div style={{height: '100vh'}}>
                        <FormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            user={user}
                            classes={classes}
                        />
                    </div>
                )
            case 3: 
                return (
                    <div style={{height: '100vh'}}>
                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            twoStepsBack={this.twoStepsBack}
                            user={user}
                            classes={classes}
                        />
                        </div>
                )
            case 4: 
                return <Redirect to="/" />;
            default:
                
        }
       
    }
}

export default withStyles(styles)(UserForm);
