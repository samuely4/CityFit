import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './catalog.css';

class CatalogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        arms: {
          img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          desc:'Strong arms are the cornerstone of your upper body exercises and essential proper weightlifting form. While making everyday tasks easier.',
          credit: 'Photo by Danielle Cerullo on Unsplash'
        }, 
        legs: {
          img: 'https://images.unsplash.com/photo-1541600383005-565c949cf777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          desc: 'Improving leg strength is the first step in improving athletic performance and a strong lower body helps prevent injuries.',
          credit: 'Photo by Alora Griffiths on Unsplash'
        }, 
        chest: {
          img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          desc: 'Working your chest does more than improve your physique. These muscles are involved in functions you need throughout the day.',
          credit: 'Photo by Alora Griffiths on Unsplash'
        }, 
        back: {
          img: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          desc: 'The back is one of the most important parts of the human anatomy. Back muscles that play a major role in all functions.They connect the hips, glutes, chest, shoulder and neck.',
          credit: 'Photo by Victor Freitas on Unsplash'
        }, 
        shoulders: {
          img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1349&q=80',
          desc: 'As the least stable joint in your body, your shoulders will benefit from exercises designed to strengthen supporting muscles while gently increasing your range of motion.',
          credit: 'Photo by John Arano on Unsplash'
        },
        cardio: {
          img: 'https://images.unsplash.com/photo-1427384906349-30452365b5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          desc: 'Cardio helps us burn calories and speeds up our metabolism. Cardio exercises improve our Body Mass Index (BMI) as it reduces the amount of our body fat.',
          credit: 'Photo by Curtis MacNewton on Unsplash'
        },
        abs: {
          img: 'https://images.unsplash.com/photo-1529265245520-9bb40daef5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80',
          desc: 'Core exercises train the muscles in your pelvis, lower back, hips and abdomen to work in harmony. This leads to better balance and stability.',
          credit: 'Photo by Tibout Maes on Unsplash'
        }
      }
    }
  }
  
  render() {
    return (
      <>
        <h1 style={{marginTop: '3%'}}>Explore a Muscle Group</h1>
        <div className='centerFlex'>
          {
            Object.keys(this.state.categories).map((name, i) => {
              let disName = name.charAt(0).toUpperCase() + name.slice(1)
              return (
                <Card style={{ width: '20rem', margin: '15px', boxShadow: '3px 4px 8px grey' }} key={name + i}>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={
                      <Tooltip>
                        {this.state.categories[name].credit}
                      </Tooltip>
                    }
                  >
                    <Card.Img variant="top" src={this.state.categories[name].img} credit={this.state.categories[name].credit} height='225em' width='1350em'/>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>{disName}</Card.Title>
                    <Card.Text>
                    {this.state.categories[name].desc}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.history.push(`/catalog/${name}`)}>Explore</Button>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
      </>
     );
  }
}
export default CatalogHome; 