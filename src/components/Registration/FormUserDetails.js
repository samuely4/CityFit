import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { user, handleChange, classes } = this.props;

        return (
            <div className='signUp'>
                <Typography 
                    className={classes.typography} 
                    variant='h4'
                >
                    Personal Information
                </Typography>

                <TextField 
                    label= 'Enter Your First Name'
                    name='firstName'
                    onChange={handleChange('firstName')}
                    value={user.firstName}
                />
                <br/>
                <TextField 
                    label= 'Enter Your Last Name'
                    name='lastName'
                    onChange={handleChange('lastName')}
                    value={user.lastName}
                />
                <br/>

                <Button
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    onClick={this.continue}
                >
                    Continue
                </Button>
            </div>
        );
    }
    
}

export default FormUserDetails;