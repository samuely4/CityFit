import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/typography';
import firebase from '../../base';

class Confirm extends Component {
    submit = () => {
        const { user: {firstName, lastName, borough, gender, height, weight, bodyType, fitnessGoal}} = this.props;
        // e.preventDefault();
        if(firstName === ''){
            alert("First Name Cannot Be Empty")
            this.props.twoStepsBack();
        } else if(lastName === ''){
            alert("Last Name Cannot Be Empty")
            this.props.twoStepsBack();
        } else if(
            borough === '' || 
            gender ==='' || 
            height === '' || 
            weight === '' || 
            bodyType === '' || 
            fitnessGoal === ''
        ) {
            alert("No Field Can be Left Empty")
            this.props.prevStep();
        } else{ 
            this.addUserProfile();
            this.props.nextStep();
        }
         //PROCESS FORM
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    addUserProfile(){
        const { user: {firstName, lastName, borough, gender, height, weight, bodyType, fitnessGoal}} = this.props;
        const uid = firebase.auth().currentUser.uid;
        const email = firebase.auth().currentUser.providerData[0].uid;
        console.log('email ', email)
        var UserInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            borough: borough,
            gender: gender,
            height: height,
            weight: weight,
            bodyType: bodyType,
            fitnessGoal: fitnessGoal
        }
        /* Send the UserProfile to Firebase */
        firebase.database().ref('UserProfile').child(uid).set( UserInfo ); 
    }

    render() {
        const { classes } = this.props;
        const infoName = ['First Name', 'Last Name', 'Borough', 'Gender', 'Height', 'Weight', 'Body Type', 'Fitness Goal'];

        return (
            <form className='signUp'>
                <React.Fragment>
                    <Typography variant='h4'>Confirm Your Information</Typography>
                    <List dense={true}>
                        {
                            Object.keys(this.props.user).map((data, i) => {
                                return (
                                    <ListItem key={data} className={classes.listItem}>
                                        <ListItemText
                                            primary={infoName[i]}
                                            secondary={this.props.user[data]}
                                        />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                    <br />
                    <Button
                        variant='contained'
                        color='secondary'
                        className={classes.button} 
                        onClick={this.back}
                    >
                        Back
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}                             
                        onClick={this.submit.bind(this)}
                    >
                        Submit
                    </Button>
                </React.Fragment>
            </form>
        );
    }
}

export default Confirm;
