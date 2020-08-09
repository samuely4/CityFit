import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './forum.css';

export default class post extends Component {
    render() {
        return (
            <div className='post'>
                <h5>{this.props.post.category}</h5>
                <p>By {this.props.post.author}</p>
                <p>
                    {
                        this.props.post.post.length > 150 ? 
                            (<span>{this.props.post.post.substr(0, 100)}.. <Link to={`/forum/` + this.props.id}>read more</Link></span>)
                            : this.props.post.post
                    }
                </p>
                <p>Posted On {this.props.post.createdAt}</p>
                <Link to={`/forum/` + this.props.id}>Read the Comments</Link>
            </div>
        )
    }
}
