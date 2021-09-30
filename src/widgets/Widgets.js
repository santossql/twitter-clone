import { Search } from '@material-ui/icons';
import { 
    TwitterTweetEmbed,
    TwitterTimelineEmbed, 
    TwitterShareButton
} from 'react-twitter-embed'
import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="josantosgo"
                    options={{height:400}} />
                <TwitterShareButton 
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{text:"#react is awesome", via:"cleverqazi"}} />
            </div>
        </div>
    )
}

export default Widgets