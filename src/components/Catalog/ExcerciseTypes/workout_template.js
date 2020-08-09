import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from '../../../loader';

export default class WorkTemp extends Component {
    render() {
        if(this.props.workouts === undefined) {
            return <Loader />
        } else {
            return (
                <>
                    <h1 style={{marginTop: '3%'}}>{this.props.workoutGroup}</h1>
                    <div className='centerFlex'>
                        {
                            Object.keys(this.props.workouts).map((name, i) => {
                                console.log(this.props.workouts[name].image)
                                let dispName = name.split('_')
                                dispName.map((val, i) => {
                                    dispName[i] = dispName[i].charAt(0).toUpperCase() + dispName[i].slice(1)
                                    return true
                                })

                                dispName = dispName.join(' ')

                                return (
                                    <Card style={{ width: '18rem', margin: '15px' }} key={name + i}>
                                        <Card.Img variant="top" src={this.props.workouts[name].image} style={{ height: '15rem' }}/>
                                        <Card.Body>
                                            <Card.Title>{dispName}</Card.Title>
                                            <Card.Text>
                                                {this.props.workouts[name].description.slice(0, 100)}..
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => this.props.getExInfo(name)}>Show More</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </div>

                    <Button
                        variant = 'info'
                        onClick = {() => this.props.prevProp.history.goBack()}
                        style={{margin: '2rem'}}
                    > 
                        Return to Catalog
                    </Button>
                    
                </>
            )
        }
    }
}