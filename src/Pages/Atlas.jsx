import React from 'react';
import './atlas.scss';
import videoBackground from '../assests/images/atlas-card.webm';

const Atlas = () => {
  return (
    <div className='home'>
      <div className='video-container'>
        <video autoPlay muted className='back-video'>
          <source src={videoBackground} type="video/webm" />
        </video>
        <div className='intro-container'>
          <p className='nolimit'>No Limits</p>
          <div className='desc'>
        This is your friend who scores the hottest tables in town, your passport to weekend getaways, and your guest pass to must-see events. All brilliantly brought together in a card and app of uncompromising beauty and utility. This is the beginning of a journey to a world with no limits. 
        <b className='atlas'>This is Atlas.</b>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Atlas;
