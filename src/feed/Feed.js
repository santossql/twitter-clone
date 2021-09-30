import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from '../post/Post';
import TweetBox from '../tweetBox/TweetBox';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebaseConfig'
import FlipMove from 'react-flip-move'

function Feed() {
    const  [posts, setPosts] = useState([])

    useEffect(()=> {
        const get = async() => {
            const docs = []
            const snapshot = await getDocs(collection(db,'posts'))
            snapshot.forEach(doc => {
                docs.push(doc.data())
            })
            setPosts(docs)
        }
        get();
        /*snapshot.then((res) => {
            const docs = []
            res.forEach(doc=>{
                docs.push(doc.data())
            });
            setPosts(docs)
        })*/
    }, [])
    //console.log(posts)
    return(
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweet post */}
            <TweetBox />
            
            {/* Post */}
            <FlipMove>
            {
                posts.map((post) =>(
                    <Post
                        key={post.text} 
                        displayName={post.displayName}
                        username={post.username}
                        verifield={post.verifield}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image} />))
            }
            </FlipMove>
        </div>
    )
}

export default Feed