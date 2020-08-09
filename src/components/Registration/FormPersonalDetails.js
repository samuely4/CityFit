import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { user, handleChange, classes } = this.props;
        const borough = ['Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Bronx'];

        return (
            <div className='signUp'>
                <Typography 
                    className={classes.typography} 
                    variant='h4'
                >
                    Personal Information
                </Typography>

                <InputLabel className={classes.inputLabel}>Borough</InputLabel>
                <Select 
                    value={user.borough}
                    onChange={handleChange('borough')}
                    className={classes.select}
                >
                    {
                        borough.map((name) => {
                            return (
                                <MenuItem value={name} key={name}>{name}</MenuItem>
                            )
                        })
                    }
                </Select>

                <InputLabel className={classes.inputLabel}>Gender</InputLabel>
                <Select
                    value={user.gender}
                    onChange={handleChange('gender')}
                    className={classes.select}
                >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem> 
                </Select>
                
                <InputLabel className={classes.inputLabel}>Height</InputLabel>
                <Select
                    value={user.height}
                    onChange={handleChange('height')}
                    className={classes.select}
                >
                    <MenuItem value ={'5.0'}> 5'0 </MenuItem>
                    <MenuItem value ={'5.1'}> 5'1 </MenuItem>
                    <MenuItem value ={'5.2'}> 5'2 </MenuItem>
                    <MenuItem value ={'5.3'}> 5'3 </MenuItem>
                    <MenuItem value ={'5.4'}> 5'4 </MenuItem>
                    <MenuItem value ={'5.5'}> 5'5 </MenuItem>
                    <MenuItem value ={'5.6'}> 5'6 </MenuItem>
                    <MenuItem value ={'5.7'}> 5'7 </MenuItem>
                    <MenuItem value ={'5.8'}> 5'8 </MenuItem>
                    <MenuItem value ={'5.9'}> 5'9 </MenuItem>
                    <MenuItem value ={'5.10'}> 5'10 </MenuItem>
                    <MenuItem value ={'5.11'}> 5'11 </MenuItem>
                    <MenuItem value ={'6.0'}> 6'0 </MenuItem>
                    <MenuItem value ={'6.1'}> 6'1 </MenuItem>
                    <MenuItem value ={'6.2'}> 6'2 </MenuItem>
                    <MenuItem value ={'6.3'}> 6'3 </MenuItem>
                    <MenuItem value ={'6.4'}> 6'4 </MenuItem>
                    <MenuItem value ={'6.5'}> 6'5 </MenuItem>
                    <MenuItem value ={'6.6'}> 6'6 </MenuItem>
                    <MenuItem value ={'6.7'}> 6'7 </MenuItem>
                    <MenuItem value ={'6.8'}> 6'8 </MenuItem>
                    <MenuItem value ={'6.9'}> 6'9 </MenuItem>
                    <MenuItem value ={'6.10'}> 6'10 </MenuItem>
                </Select>

                <InputLabel className={classes.inputLabel}>Weight</InputLabel>
                <Select 
                    value={user.weight}
                    onChange={handleChange('weight')}
                    className={classes.select} 
                >
                    <MenuItem value ={'< 80'}> Less than 80 </MenuItem>
                    <MenuItem value ={'80 - 120 '}> 80 - 120 </MenuItem>
                    <MenuItem value ={'120 - 160'}> 120 - 160 </MenuItem>
                    <MenuItem value ={'160 - 200'}> 160 - 200 </MenuItem>
                    <MenuItem value ={'200 - 240'}> 200 - 240 </MenuItem>
                    <MenuItem value ={'240 - 280'}> 240 - 280 </MenuItem>
                    <MenuItem value ={'280 - 320'}> 280 - 320 </MenuItem>
                    <MenuItem value ={'> 320'}> Greater than 320 </MenuItem>
                </Select>
                
                <InputLabel className={classes.inputLabel}>BodyType</InputLabel>
                <Select 
                    value ={user.bodyType}
                    onChange={handleChange('bodyType')}
                    className={classes.select}
                >
                    <MenuItem value ={'Skinny'}>Skinny</MenuItem>
                    <MenuItem value ={'Fat'}>OverWeight</MenuItem>
                    <MenuItem value ={'Muscular'}>Muscular</MenuItem>
                </Select>   
   
                <InputLabel className={classes.inputLabel}>Fitness Goal</InputLabel>
                <Select 
                    value={user.fitnessGoal}
                    onChange={handleChange('fitnessGoal')}
                    className={classes.select}
                >
                    <MenuItem value ={'Burn Fat'}>Burn Fat</MenuItem>
                    <MenuItem value ={'Build Muscle'}>Build Muscle</MenuItem>
                    <MenuItem value ={'Tone Up'}>Tone Up</MenuItem>
                </Select>
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
                    onClick={this.continue}
                >
                    Continue
                </Button>
            </div>
        );
    }
}