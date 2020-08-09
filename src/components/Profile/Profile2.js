import React, { Component } from 'react';
import firebase from '../../base';
import './profile.css';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Gym from '../GymLocation/Gyms';


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            regimen: {},
            MealPlan: {},
        }
    }
    
    useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
          },
          heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
          },
          secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
          },
      }));
      

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = () => {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            const userData = firebase.database().ref('UserProfile/' + user.uid);
            userData.on('value', (snapshot) => {
                let data = snapshot.val()
                this.setState({
                    user: {...data}
                }, () => {
                        let userData = this.state.user;
                        if (userData.fitnessGoal === "Burn Fat") {
                            const RegimenVal = firebase.database().ref('Regimen/LoseFat');
                            RegimenVal.on('value', (snapshot) => {
                                let data1 = snapshot.val();
                                console.log(data1);
                                this.setState({
                                    regimen: { ...data1 }
                                })
                            })
                            const MealPlanVal = firebase.database().ref('MealPlan/LoseFat');
                            MealPlanVal.on('value', (snapshot) => {
                                let data2 = snapshot.val();
                                console.log(data2);
                                this.setState({
                                    MealPlan: { ...data2 }
                                })
                            })
                        }
                        else if (userData.fitnessGoal === "Build Muscle") {
                            const RegimenVal = firebase.database().ref('Regimen/Build_Muscle');
                            RegimenVal.on('value', (snapshot) => {
                                let data3 = snapshot.val();
                                console.log(data3);
                                this.setState({
                                    regimen: { ...data3 }
                                })
                            })
                            const MealPlanVal = firebase.database().ref('MealPlan/Build_Muscle');
                            MealPlanVal.on('value', (snapshot) => {
                                let data4 = snapshot.val();
                                console.log(data4);
                                this.setState({
                                    MealPlan: { ...data4 }
                                })
                            })
                        }
                        else if (userData.fitnessGoal === "Tone Up") {
                            const RegimenVal = firebase.database().ref('Regimen/Tone_Muscle');
                            RegimenVal.on('value', (snapshot) => {
                                let data5 = snapshot.val();
                                console.log(data5);
                                this.setState({
                                    regimen: { ...data5 }
                                })
                            })
                            const MealPlanVal = firebase.database().ref('MealPlan/Tone_Muscle');
                            MealPlanVal.on('value', (snapshot) => {
                                let data6 = snapshot.val();
                                console.log(data6);
                                this.setState({
                                    MealPlan: { ...data6 }
                                })
                            })
                        }

                        else {
                            // user is not authenticated 
                            // nothing should be rendered from the database.
                        }
                })
                console.log(data)
            })

        } else {
            // No user is signed in.
            // handled by privateRoute
        }
    }
    render() {
        let user = this.state.user
        let regimen = this.state.regimen
        let MealPlan = this.state.MealPlan
        const classes = this.useStyles;
        return (
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>My Profile</Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                            <h5>Name: {user.firstName} {user.lastName} </h5>
                            <h5>Borough: {user.borough}</h5>
                            <h5>Gender: {user.gender}</h5>
                            <h5>Height: {user.height} tall</h5>
                            <h5>Weight: {user.weight}lbs</h5>
                            <h5>Body Type: {user.bodyType}</h5>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>My Goal</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <h5>My Goal is to {user.fitnessGoal}</h5>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>My Recommended Regimen Plan</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <h5>First Regimen Item: {regimen.first_item}</h5>
                            <h5>Second Regimen Item: {regimen.second_item}</h5>
                            <h5>Third Regimen Item: {regimen.third_item}</h5>
                            <h5>Fourth Regimen Item: {regimen.fourth_item}</h5>
                            <h5>Fifth Regimen Item: {regimen.fifth_item}</h5>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>My Recommended Meal Plan</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <h5>First Meal Plan Item: {MealPlan.first_item} </h5>
                            <h5>Second Meal Plan Item: {MealPlan.second_item}</h5>
                            <h5>Third Meal Plan Item: {MealPlan.third_item}</h5>
                            <h5>Fourth Meal Plan Item: {MealPlan.fourth_item}</h5>
                            <h5>Fifth Meal Plan Item: {MealPlan.fifth_item}</h5>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Gym />
            </div>
        )
    }
}
