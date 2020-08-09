import React, { Component } from 'react'
import './forum.css';

export default class comment extends Component {
    render() {
        return (
            <div className='comment'>
                <p>{this.props.comment.comment}</p>
                <br/>
                <p>By {this.props.comment.author}</p>
                <p>Replied On {this.props.comment.createdAt}</p>
            </div>
        )
    }
}
