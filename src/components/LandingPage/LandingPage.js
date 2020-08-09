import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import convert from 'xml-js';
import ReactHtmlParser from 'react-html-parser';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Post from '../Forum/post';
import firebase from '../../base';
import './landingPage.css';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            recentBlogPost: {
                name: '',
                url: ''
            },
            rss: [],
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
                }
            }
        }
    }

    componentDidMount() {
        this.getFeed();
        this.getPost();
    }

    getFeed = () => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://blog.myfitnesspal.com/feed`)
        .then((res) => {
            console.log(JSON.parse(convert.xml2json(res.data, {compact: true, spaces: 4})))
            this.setState({
                ...this.state,
                rss: JSON.parse(
                        convert.xml2json(res.data, {compact: true, spaces: 4})
                    ).rss.channel.item.slice(0, 4)
            })
        })
        .catch((err) => {
            console.log('Error: ', err)
        })
    }

    getPost() {
        let posts = firebase.database().ref('Posts');
        posts.limitToLast(3).on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({
                ...this.state,
                posts: {...data}
            })
        })
    }

    render() {

        return (
            <div className='tint'>
               <Jumbotron fluid>
                    <h1 id='jumbotext1'>Anything Is Possible</h1>
                    <h1 id='jumbotext2'>Dream Big</h1>
                </Jumbotron>
                <div className='landingSection'>
                    <h1>Exercise Catalog Introduction</h1>
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
                                            <Button variant="primary">
                                                <Link 
                                                    to={`/catalog/${name}`} 
                                                    style={{textDecoration: 'none', color: 'black', width: '100%', height: '100%'}}
                                                >
                                                    Explore
                                                </Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='landingSection'>
                    <h1>Fitness News</h1>
                    <div id='rssFeed-cont'>
                        {
                            this.state.rss.map((data) => {
                                return (
                                    <div key={data.pubDate._text} className='rssFeeds'>
                                        <h3 className='rssTitle'>{data.title._text}</h3>
                                        {ReactHtmlParser(data.description._cdata)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='landingSection flexCenter'>
                    <h1>Forum Posts</h1>
                    <h4>Check Out The Three Latest Posts</h4>
                    {
                        this.state.posts ?
                            Object.keys(this.state.posts).map((post) => {
                                return <Post key={post} id={post} post={this.state.posts[post]}/>
                            }) :
                            <h2>No Posts</h2>
                    }
                </div>
            </div>
        )
    }
}
