import React, {useState} from 'react';
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebase/firebaseConfig';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();
        console.log(e)

        const docData = {
            displayName: "Dylan",
            username: "@dylanfonky",
            verifield: true,
            date: Timestamp.fromDate(new Date()),
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fhex4-2.fna.fbcdn.net/v/t39.30808-6/242875887_4973837842644067_5228354659144888151_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHqY1DNnzgzVhffSoXX9okr5yMkStTbePDnIyRK1Nt48KylpiVIA8aBh7E7QO91alb0BaYyYAQ2xWXtvfxG3ZwW&_nc_ohc=znQUVbqS2oEAX_9HpmP&_nc_ht=scontent.fhex4-2.fna&oh=950088c01c21dcdd1518259d09c931b0&oe=6158C353"
        }

        addDoc(collection(db,'posts'), docData);

        setTweetMessage("");
        setTweetImage("");
    }

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://scontent.fhex4-2.fna.fbcdn.net/v/t39.30808-1/p200x200/242875887_4973837842644067_5228354659144888151_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHqY1DNnzgzVhffSoXX9okr5yMkStTbePDnIyRK1Nt48KylpiVIA8aBh7E7QO91alb0BaYyYAQ2xWXtvfxG3ZwW&_nc_ohc=znQUVbqS2oEAX_9HpmP&_nc_ht=scontent.fhex4-2.fna&oh=ef2b2258d41e4c27ef58159071d29503&oe=6159056C"/>
                <input
                    value={tweetMessage} 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    placeholder="What's happening?" 
                    type="text"/>
            </div>
            <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox_imageInput"
                placeholder="Optional: Enter a image URL" 
                type="text"/>
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
                Tweet
            </Button>
        </form>
    </div>
}

export default TweetBox