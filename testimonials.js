import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  render() {
    return (
		<Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          
          <div className="myCarousel">
            <h3>Suvidhi Jain</h3>
            <h4>Musician</h4>
            <p>
              The Music inventory here is amazing, worth giving a shot.
            </p>
          </div>
        </div>

        <div>
         
          <div className="myCarousel">
            <h3>Prakhar</h3>
            <h4>Designer</h4>
            <p>
              The tech things are good, could be improved though.
            </p>
          </div>
        </div>

        <div>
          
          <div className="myCarousel">
            <h3>Atika</h3>
            <h4>Student</h4>
            <p>
              I am enjoying the various sports! Others should try it as well.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
