import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ScaleText from "react-scale-text";

const Team = () => {
    const [change, setChange] = useState(0);
    const carouselRef = useRef(null);
    

    const handleChange = (tab) => {
        setChange(tab);

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
        <>
            <div className="climb-container">
                <div className="text-8 group">
                    <div className="wrapper">
                        <p className="climb-text-big">02.</p>
                        <p className="climb-text">CLIMB</p>
                    </div>
                    <div className="climb-description">
                        Cras scelerisque id quam sed dignissim Pellentesque urna nunc, 
                        gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                    </div>
                </div>
                <div className="mountain-bar">
                    <div className={`mountain-bar-box-1${change === 0 ? ' active' : ''}`} onClick={() => handleChange(0)}>
                        <p className={`mountain-bar-text${change === 0 ? ' active' : ''}`} onClick={() => handleChange(0)}>
                            MOUNTAIN 1
                        </p>
                    </div>
                    <div className={`mountain-bar-box-2${change === 1 ? ' active' : ''}`} onClick={() => handleChange(1)}>
                        <p className={`mountain-bar-text${change === 1 ? ' active' : ''}`} onClick={() => handleChange(1)}>
                            MOUNTAIN 2
                        </p>
                    </div>
                </div>
                <div className="team-mountain-carousel">
                    <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        infinite={false}
                        draggable={false}
                        arrows={false}
                        partialVisible={false}
                        swipeable={false}
                    >
                        <div className="mountain-1">
                            <div>
                                <div className="schedule">
                                    <div className="schedule-text">SCHEDULE</div>
                                    <div className="mountain-selection-text">25 Nov 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                    <div className="mountain-selection-text-1">28 Nov 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                    <div className="mountain-selection-text-2">18 Dec 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                    <div className="mountain-selection-text-3">7 Jan 2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                </div>
                            </div>
                        </div>
                        <div className="mountain-2">
                            <div className="schedule">
                                <div className="schedule-text">SCHEDULE</div>
                                <div className="mountain-selection-text">25 Nov 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                <div className="mountain-selection-text-1">28 Nov 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                <div className="mountain-selection-text-2">18 Dec 2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                                <div className="mountain-selection-text-3">7 Jan 2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra<br/></div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Team;
