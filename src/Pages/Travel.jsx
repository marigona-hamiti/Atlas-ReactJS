import React from 'react'
import './travel.scss';
import travel from '../assests/images/travel.webp'

const Travel = () => {
  return (
    <div className='travel'>
        <div className='intro'>
          <div>High Flyer</div>
          <p><b>Built for (spontaneous) travel.</b>
          No matter where your next grand tour takes you, Atlas is there as your co-pilot, with bespoke flight benefits for when you're ready to go on the spur of the moment.          </p>
        </div>
        <div className='flight-wrapper'>
          <img src={travel} alt="" />
          <p>BESPOKE FLIGHT BENEFITS, INSIDE ATLAS APP.</p>
        </div>
        <div className='data-astro'>
          <div className='div1'>
            <pre>5x points with
                BLADE³¹</pre>
            <p>
            Exclusive reward for Atlas cardholders on all BLADE helicopter rides and flights.        
            </p>
            </div>
          <div className='div2'>
            <pre>CLEAR Plus
              membership⁴</pre>
            <p>
            Fast forward through airport security with included CLEAR Plus annual membership.</p>
          </div>
          <div className='div3'>
            <pre>Cancel flights
              without fees⁵</pre>
            <p>
            Change or cancel any flight, at any time, for any reason and get fees reimbursed up to $600 a year.            </p>
          </div>
        </div>
        <div className='visa'>
          <p>+</p>
          <p>Visa Infinite Benefits⁶</p>
          <p className='last'>Priority Pass, Luxury Hotel Collection,
no foreign transaction fees, and more.</p>
          <button className='btn-discover'>Discover</button>
        </div>
    </div>
  )
}

export default Travel
