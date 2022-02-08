import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { SiApplepodcasts } from 'react-icons/si';
import {AiOutlineYoutube, AiOutlineHome} from 'react-icons/ai'
import { GrSpotify} from 'react-icons/gr'
import TabPanel from './tabpanel';
import InstagramFeed  from 'react-ig-feed'
import * as React from 'react';
import YouTube from 'react-youtube';
import { Button } from "react-bootstrap"
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import Slideshow from './slideshow';

var InstaToken = process.env.REACT_APP_INSTAGRAM_TOKEN;

function a11yProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

const Tabbar = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
return(
<Container maxWidth="auto" sx={{width: "auto", backgroundColor: '#003087'}} >
<Tabs value={value} onChange={handleChange} centered>
  <Tab icon={<AiOutlineHome/>} label="home" {...a11yProps(0)}/>
  <Tab icon={<BsTwitter/>} label="twitter" {...a11yProps(1)}/>
  <Tab icon={<BsInstagram />} label="instagram" {...a11yProps(2)}/>
  <Tab icon={<SiApplepodcasts />} label="applepodcasts" {...a11yProps(3)}/>
  <Tab icon={<AiOutlineYoutube />} label="youtube"{...a11yProps(4)}/>
  <Tab icon={<GrSpotify/> } label="spotify"{...a11yProps(5)}/>
</Tabs> 
<TabPanel value={value} index={0}>
    <Slideshow/>
</TabPanel> 
<TabPanel value={value} index={1}>
  Twitter
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="bleacherboys_"
  options={{height: 100}}
/>
</TabPanel>

<TabPanel value={value} index={2}>
  Instagram
  <InstagramFeed token={InstaToken}  counter="6"/>
</TabPanel>
<TabPanel value={value} index={3}>
    Apple Podcasts
</TabPanel>
<TabPanel value={value} index={4}>
    <Button variant="secondary" href={"https://www.youtube.com/channel/UC-fT1XOM6aT9M8Uc-GdvKRw"}>Continue User</Button>
    <h1>Check Out Our Most Recent Video</h1>
    <YouTube videoId="c9UCfRZ1AM8" opts={opts}  />
</TabPanel>
<TabPanel value={value} index={5}>
    <h1>Spotify</h1>
    <iframe src="https://open.spotify.com/embed/show/6VXMHeGahNhmEHWqze89Lo?utm_source=generator" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spotify"></iframe>
</TabPanel>
</Container> 
);
}

export default Tabbar;