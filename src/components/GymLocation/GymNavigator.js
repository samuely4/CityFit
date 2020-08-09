import React, { Component } from 'react'
import BoroughHome from './BoroughHome'
import ListofGyms from './ListofGyms' 

export default class GymNavigator extends Component {
    state = {
        page: 1,
        boroughid : 0
    }
    
    backToBoroughs = () => {
      this.setState({page: 1});
    }

    listGyms = (id) => {
        //takes id of borough to pass to database
        this.setState({page: 2});
        this.setState({boroughid: id})

    }
    
   
    //takes user back to main landing page
    backToMain = () =>{
        this.setState({page: 3});
    }
    
    render(){
      const {page} = this.state;
     
    
      switch (page) {
        case 1:
            return (
                <BoroughHome
                backToMain={this.backToMain} //tied to button that returns user to main landing page
                listGyms = {this.listGyms}
                />   
            )
        case 2:
            return (
                <ListofGyms
                boroughid ={this.state.boroughid}
                backToBoroughs = {this.state.backToBoroughs}
                />
            )
        case 3:
            return (
                null
                //route back to main landing page
            )
        
        default:
      }
    }
    
}
