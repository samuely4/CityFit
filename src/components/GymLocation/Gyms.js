import React, { Component } from 'react'
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './gyms.css';

export default class Gyms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            gyms: []
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            location: e.target.value
        })
    }

    findGym = () => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
                headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_YELP_API_KEY
                },
                params: {
                    location: this.state.location,
                    term: 'Gyms',
                    limit: 10
                }
            })
            .then((res) => {
                console.log(res.data.businesses)
                this.setState({
                    ...this.state,
                    gyms: res.data.businesses
                })
            })
            .catch((err) => {
                return err
            })
    }

    render() {
        return (
            <>
                <h3 style={{marginTop: '3%', marginBottom: '0'}}>Find a Gym Near You</h3>

                <div className='flex' style={{flexDirection: 'column'}}>
                    <div id='searchContainer'>
                        <TextField
                            id="outlined-basic"
                            label="Address"
                            value={this.state.location}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            // style={{width: '15em'}}
                        />
                        <Button variant="contained" onClick={this.findGym}>
                            Search
                        </Button>
                    </div>
                    <div id='gymsContainer'>
                        {
                            this.state.gyms ? this.state.gyms.map((data) => {
                                return (
                                    <div className='gymCard' key={data.id}>
                                        <img src={data.image_url} alt={data.name} />
                                        <div className='gymRow'>
                                            <div className='leftCol'>
                                                <p><a href={data.url} target='_blank' rel="noopener noreferrer">{data.name}</a></p>
                                                <div className='rating'>
                                                    <Rating value={data.rating} precision={0.5} readOnly />
                                                    <span style={{color: 'rgb(102, 102, 102)', fontSize: '0.8rem'}}> 
                                                        &nbsp; {data.review_count} reviews
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='rightCol'>
                                                <p>{data.display_phone}</p>
                                                <p>{data.location.address1} {data.location.address2} {data.location.address3}</p>
                                                <p>{data.location.city} {data.location.state} {data.location.zip_code}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <></>
                        }
                        
                    </div>
                </div>
            </>
        )
    }
}
