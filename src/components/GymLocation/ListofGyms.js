import React, { Component } from 'react'
import firebase from '../../base';

export default class ListofGyms extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            Gym1: {},
            Gym2: {},
            Gym3: {},
            Gym4: {},
            Gym5: {},
        }
    }


    getGymInfo = () => {
        console.log(this.props.boroughid)
        let boroughName;
        let startingId;
        if (this.props.boroughid === 1) {
            boroughName = "Brooklyn";
            startingId = 10001;
        }
        else if (this.props.boroughid === 2) {
            boroughName = "Manhattan";
            startingId = 10011;
        }
        else if (this.props.boroughid === 3) {
            boroughName = "Queens";
            startingId = 10006;
        }
        else if (this.props.boroughid === 4) {
            boroughName = "Staten_Island";
            startingId = 10021;
        }
        else if (this.props.boroughid === 5) {
            boroughName = "Bronx";
            startingId = 10016;
        }
        console.log(boroughName);
        const GymData1 = firebase.database().ref('Catalog/' + boroughName).child(startingId);
        GymData1.on('value', (snapshot) => {
            let data1 = snapshot.val()
            console.log(data1)
            this.setState({
                Gym1: { ...data1 }
            })
        })

        const GymData2 = firebase.database().ref('Catalog/' + boroughName).child(startingId + 1);
        GymData2.on('value', (snapshot) => {
            let data2 = snapshot.val()
            console.log(data2)
            this.setState({
                Gym2: { ...data2 }
            })
        })

        const GymData3 = firebase.database().ref('Catalog/' + boroughName).child(startingId + 2);
        GymData3.on('value', (snapshot) => {
            let data3 = snapshot.val()
            console.log(data3)
            this.setState({
                Gym3: { ...data3 }
            })
        })

        const GymData4 = firebase.database().ref('Catalog/' + boroughName).child(startingId + 3);
        GymData4.on('value', (snapshot) => {
            let data4 = snapshot.val()
            console.log(data4)
            this.setState({
                Gym4: { ...data4 }
            })
        })

        const GymData5 = firebase.database().ref('Catalog/' + boroughName).child(startingId + 4);
        GymData5.on('value', (snapshot) => {
            let data5 = snapshot.val()
            console.log(data5)
            this.setState({
                Gym5: { ...data5 }
            })
        })
    }

    componentDidMount() {
        this.getGymInfo();
    }

    render() {
        let Gym1 = this.state.Gym1;
        let Gym2 = this.state.Gym2;
        let Gym3 = this.state.Gym3;
        let Gym4 = this.state.Gym4;
        let Gym5 = this.state.Gym5;
        switch (this.props.boroughid) {
            case 1:
                return (
                    <div>
                        <h2>List of Gyms in Brooklyn</h2>
                        <h3>Name: {Gym1.Name}</h3>
                        <h3>Addres: {Gym1.address}</h3>
                        <h3>Phone Number: {Gym1.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym2.Name}</h3>
                        <h3>Addres: {Gym2.address}</h3>
                        <h3>Phone Number: {Gym2.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym3.Name}</h3>
                        <h3>Addres: {Gym3.address}</h3>
                        <h3>Phone Number: {Gym3.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym4.Name}</h3>
                        <h3>Addres: {Gym4.address}</h3>
                        <h3>Phone Number: {Gym4.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym5.Name}</h3>
                        <h3>Addres: {Gym5.address}</h3>
                        <h3>Phone Number: {Gym5.phone_number}</h3>
                    </div>

                )
            case 2:
                return (
                    <div>
                        <h2>List of Gyms in Manhattan</h2>
                        <h3>Name: {Gym1.Name}</h3>
                        <h3>Addres: {Gym1.address}</h3>
                        <h3>Phone Number: {Gym1.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym2.Name}</h3>
                        <h3>Addres: {Gym2.address}</h3>
                        <h3>Phone Number: {Gym2.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym3.Name}</h3>
                        <h3>Addres: {Gym3.address}</h3>
                        <h3>Phone Number: {Gym3.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym4.Name}</h3>
                        <h3>Addres: {Gym4.address}</h3>
                        <h3>Phone Number: {Gym4.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym5.Name}</h3>
                        <h3>Addres: {Gym5.address}</h3>
                        <h3>Phone Number: {Gym5.phone_number}</h3>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <h2>List of Gyms in Queens</h2>
                        <h3>Name: {Gym1.Name}</h3>
                        <h3>Addres: {Gym1.address}</h3>
                        <h3>Phone Number: {Gym1.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym2.Name}</h3>
                        <h3>Addres: {Gym2.address}</h3>
                        <h3>Phone Number: {Gym2.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym3.Name}</h3>
                        <h3>Addres: {Gym3.address}</h3>
                        <h3>Phone Number: {Gym3.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym4.Name}</h3>
                        <h3>Addres: {Gym4.address}</h3>
                        <h3>Phone Number: {Gym4.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym5.Name}</h3>
                        <h3>Addres: {Gym5.address}</h3>
                        <h3>Phone Number: {Gym5.phone_number}</h3>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <h2>List of Gyms in Staten Island</h2>
                        <h3>Name: {Gym1.Name}</h3>
                        <h3>Addres: {Gym1.address}</h3>
                        <h3>Phone Number: {Gym1.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym2.Name}</h3>
                        <h3>Addres: {Gym2.address}</h3>
                        <h3>Phone Number: {Gym2.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym3.Name}</h3>
                        <h3>Addres: {Gym3.address}</h3>
                        <h3>Phone Number: {Gym3.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym4.Name}</h3>
                        <h3>Addres: {Gym4.address}</h3>
                        <h3>Phone Number: {Gym4.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym5.Name}</h3>
                        <h3>Addres: {Gym5.address}</h3>
                        <h3>Phone Number: {Gym5.phone_number}</h3>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <h2>List of Gyms in Bronx</h2>
                        <h3>Name: {Gym1.Name}</h3>
                        <h3>Addres: {Gym1.address}</h3>
                        <h3>Phone Number: {Gym1.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym2.Name}</h3>
                        <h3>Addres: {Gym2.address}</h3>
                        <h3>Phone Number: {Gym2.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym3.Name}</h3>
                        <h3>Addres: {Gym3.address}</h3>
                        <h3>Phone Number: {Gym3.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym4.Name}</h3>
                        <h3>Addres: {Gym4.address}</h3>
                        <h3>Phone Number: {Gym4.phone_number}</h3>
                        <br />
                        <h3>Name: {Gym5.Name}</h3>
                        <h3>Addres: {Gym5.address}</h3>
                        <h3>Phone Number: {Gym5.phone_number}</h3>
                    </div>
                )
            default:

                return (
                    null

                )


        }
    }
}
