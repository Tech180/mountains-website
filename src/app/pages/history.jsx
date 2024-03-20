import React from 'react';
import MountainCarousel from '../mountain-carousel';

const History = () => {
  return (
    <>
        <div className="history-mountain">
              <div className="text-5">
                  <div className="wrapper-2">
                      <p className="history-text-number">01.</p>
                      <p className="history-text">HISTORY</p>
                  </div>
                  <p className="history-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
              </div>
        </div>
        <MountainCarousel />
    </>
  );
}

export default History;
