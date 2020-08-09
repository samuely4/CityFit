import React, { Component } from 'react'
import '../Catalog/catalog.css'

export default class BoroughHome extends Component {

    showBrooklyn = e =>{
        e.preventDefault();
        this.props.listGyms(1);
      }
    
    showManhattan = e =>{
        e.preventDefault();
        this.props.listGyms(2);
      }

      showQueens = e =>{
        e.preventDefault();
        this.props.listGyms(3);
      }

      showStatenIsland = e =>{
        e.preventDefault();
        this.props.listGyms(4);
      }

      showBronx = e =>{
        e.preventDefault();
        this.props.listGyms(5);
      }


    render() {
        return (
          <div >
            <h1>Find the Best Gyms In the City</h1>
            <button
              onClick={this.showBrooklyn}
              className="button"
            >
              Brooklyn
              </button>

            <button
              onClick={this.showManhattan}
              className="button"
            >
              Manhattan
              </button>

            <button
              onClick={this.showQueens}
              className="button"
            >
              Queens
              </button>

            <button
              onClick={this.showStatenIsland}
              className="button"
            >
              StatenIsland
              </button>

            <button
              onClick={this.showBronx}
              className="button"
            >
              Bronx
              </button>
          </div>
            
        )
    }
}
