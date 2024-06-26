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
  const carouselRef = useRef(null);

  const handleChange = (tab) => {

    switch(tab) {
      case 0:
        document.documentElement.style.setProperty('--nav-color', '#fefeff');
        document.querySelector('.side-logo').style.opacity = '0';
        document.querySelector('.side-logo-mobile').style.opacity = '0';
        document.querySelector('.fas.fa-bars').style.color = '#fefeff';
        break;
      case 1:
        document.documentElement.style.setProperty('--nav-color', '#414f6b');
        document.querySelector('.side-logo').style.opacity = '1';
        document.querySelector('.side-logo-mobile').style.opacity = '1';
        document.querySelector('.fas.fa-bars').style.color = '#414f6b';
        break;
      case 2:
        document.documentElement.style.setProperty('--nav-color', '#414f6b');
        document.querySelector('.side-logo').style.opacity = '0';
        document.querySelector('.side-logo-mobile').style.opacity = '0';
        document.querySelector('.fas.fa-bars').style.color = '#414f6b';
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
          swipeable={false}
          ssr={true}
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
