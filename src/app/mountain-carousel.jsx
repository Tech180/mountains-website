import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MountainCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
      slidesToSlide: 4
    },
    mobileBig: {
      breakpoint: { max: 900, min: 500 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const CustomDot = ({ onClick, active }) => (
    <div
      className={`ellipse${active ? '' : '-dark'}`}
      onClick={() => onClick()}
    />
  );

  return (
    <>
        <div className="history-carousel-background">
          <div className='mountain-carousel'>
            <Carousel
              responsive={responsive}
              infinite={false}
              draggable={false}
              showDots={true}
              arrows={false}
              renderDotsOutside={true}
              customDot={<CustomDot />}
              itemClass="carousel-mountain-item"
            >
              <img src="images/rectangle_23_copy.jpg"/>
              <img src="images/rectangle_23.jpg"/>
              <img src="images/rectangle_23_copy.jpg"/>
              <img src="images/rectangle_23.jpg"/>
              <img src="images/rectangle_23_copy.jpg"/>
              <img src="images/rectangle_23.jpg"/>
              <img src="images/rectangle_23_copy.jpg"/>
              <img src="images/rectangle_23.jpg"/>
              <img src="images/rectangle_23_copy.jpg"/>
              <img src="images/rectangle_23.jpg"/>
              <img src="images/rectangle_23_copy.jpg"/>
              <img src="images/rectangle_23.jpg"/>
            </Carousel>
          </div>
        </div>
    </>
  );
}

export default MountainCarousel;
