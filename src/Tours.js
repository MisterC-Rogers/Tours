import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Choose Your Destination</h2>
        <div className="underline"></div>
      </div>
      <div className='toursContainer'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
