import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Slideshow = () => {
    return (
      <div className="slide-container">
        <div style={{backgroundImage: '../img1.png'}}/>
      </div>
    )
}
export default Slideshow;