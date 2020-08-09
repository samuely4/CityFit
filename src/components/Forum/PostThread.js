import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import firebase from '../../base';
import Comment from './comment';
import Loader from '../../loader';
import './forum.css';
import '../../App.css';

export default class PostThread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            post: {},
            comment: ''
        }
    }

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.grabPost();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onChange(e) {
        this.setState({
            ...this.state,
            comment: e.target.value
        })
    }

    grabPost() {
        let posts = firebase.database().ref('Posts/' + this.props.match.params.postid);
        posts.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({
                ...this.state,
                post: {...data}
            })
        })
    }

    addComment = () => {
        var currUser = firebase.auth().currentUser;
        if(currUser !== null && this._isMounted) {
            const userData = firebase.database().ref('UserProfile/' + currUser.uid);
            userData.on('value', (snapshot) => {
                let data = snapshot.val();
                let date = new Date();
                let database = firebase.database().ref('Posts/' + this.props.match.params.postid + '/comments').push();
                let newComment = this.state.comment;
                let author = data.firstName + ' ' + data.lastName;
                database.set(
                    {
                        author: author,
                        comment: newComment,
                        createdAt: date.toString()
                    }
                )
                database.on('child_added', (data) => { 
                    console.log('commented');
                    this.grabPost();
                })
            })
        }
    }

    render() {
        if(this.state.post && this.state.user) {
            return (
                <div 
                    style={{
                        marginTop: '3rem',
                        height: '100%', 
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <div className='post'>
                        <h5>{this.state.post.category}</h5>
                        <p>By {this.state.post.author}</p>
                        <p>{this.state.post.post}</p>
                        <p>Posted On {this.state.post.createdAt}</p>
                    </div>
                    {
                        this.state.post.comments ? 
                            Object.keys(this.state.post.comments).map((id, idx) => {
                                let comment = this.state.post.comments
                                return (
                                    // <p key={idx}>{comment[id].comment}</p>
                                    <Comment key={idx} comment={comment[id]} />
                                )
                            }) : 
                            <h3>There are no comments at this time</h3>
                    }
                    <div className='flexCenter' style={{width: '100%'}}>
                        <textarea onChange={(e) => this.onChange(e)} placeholder='Write Your Comment Here..'></textarea>
                        {
                            this.state.comment.length !== 0 ? 
                                <Button variant='primary' onClick={() => this.addComment()}>Comment</Button>
                                :
                                <Button variant='primary' disabled>Comment</Button>
                        }
                    </div>
                </div>
            )
        } else {
            return <Loader></Loader>
        }
    }
}
