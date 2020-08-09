import React, { Component } from 'react'
import { Modal } from '@material-ui/core';
import firebase from '../../../base';

export default class exerciseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseData : {},
        }
    }

    componentDidMount() {
        this.getExInfo()
    }

    getExInfo = () => {
        console.log('props ', this.props)
        const ExData = firebase.database().ref('Exercises/arms/' + this.props.exName);
        ExData.on('value', (snapshot) => {
            let data = snapshot.val()
            this.setState({
                exerciseData: {...data}
            })
        })
    }

    render() {
        let exercisedata = this.state.exerciseData

        return (
            <Modal 
                open={this.props.open}
                onClose={this.props.handleModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <iframe title="Exercise Details" width="560" height="315" src={exercisedata.video} frameBorder="0" allowFullScreen></iframe>
                    <h3>{exercisedata.description}</h3>
                </div>
            </Modal>
        )
    }
}
