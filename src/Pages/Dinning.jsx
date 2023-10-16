import React from 'react'
import horse from '../assests/images/supper-club.jpg';
import table from '../assests/images/horses.jpg';
import './dinning.scss';
import first from '../assests/images/felix.jpg';
import second from '../assests/images/cucina.jpg'


const Dinning = () => {
  return (
    <div className='dinning'>
        <div className='intro'>
          <div>Taste Maker</div>
          <p><b>Meet Atlas Supper Club.</b>
          Skip past the endless waitlists and concierge calls that turn up empty handed. With Atlas, you have a seat at the table at today's most desirable restaurants.
          </p>
        </div>
        <div className='horse-wrapper'>
          <img src={horse} alt="" />
        </div>
        <div className='data-astro'>
          <div className='div1'>
            <pre>Dedicated
              reservations¹</pre>
            <p>
              Access exclusive inventory at our restaurant partners including – Horses, Felix Trattoria, Cucina Alba, and more.</p>
          </div>
          <div className='div2'>
            <pre>Last-minute
              bookings²</pre>
            <p>
              With bookings available at short notice, you won't find yourself on a waitlist.
            </p>
          </div>
          <div className='div3'>
            <pre>Dedicated
               reservations¹</pre>
            <p>
            Members get seated at prime time, when availability is typically the hardest to get.
            </p>
          </div>
        </div>
        <div className='table'>
          <img src={table} alt="" />
          <p>HORSES, LA, ON ATLAS SUPPER CLUB.</p>
        </div>
        <div className='random-photos'>
          <div className='first'>
            <img src={first} alt="" />
            <p>FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB.</p>
          </div>
          <div className='second'>
            <img src={second} alt="" />
            <p>CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.</p>
          </div>
        </div>
      </div>
  )
}

export default Dinning
