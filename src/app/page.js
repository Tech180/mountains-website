'use client'
import React, { useState, useRef } from 'react';
import Main from './pages/main';
import Team from './pages/team';
import History from './pages/history';
import Navbar from './navbar';
import Footer from './footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Page() {
  const [change, setChange] = useState(0);
  const carouselRef = useRef(null);

  const handleChange = (tab) => {
    setChange(tab);

    switch(tab) {
      case 0:
        document.documentElement.style.setProperty('--nav-color', '#fefeff');
        document.querySelector('.side-logo').style.opacity = '0';
        break;
      case 1:
        document.documentElement.style.setProperty('--nav-color', '#414f6b');
        document.querySelector('.side-logo').style.opacity = '1';
        break;
      case 2:
        document.documentElement.style.setProperty('--nav-color', '#414f6b');
        document.querySelector('.side-logo').style.opacity = '0';
        break;
      default:
        break;
    }

    carouselRef.current.goToSlide(tab);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };


  return (
    <div>
      <Navbar onChange={handleChange} />
      <div className='carousel-container'>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={false}
          draggable={false}
          arrows={false}
          partialVisible={false}
        >
          <Main  />
          <History />
          <Team  />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};
