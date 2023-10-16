import React from 'react'
import './card.scss';
import video from '../assests/images/atlas-woman.mp4';
import front from '../assests/images/front.png';
import back from  '../assests/images/back.png'


const Card = () => {
  return (
    <div className='card'>
       <div className='video-container'>
        <video autoPlay muted className='video'>
          <source src={video} type="video/webm" />
        </video>
        </div>
        <div className='intro'>
      <div>Head Turner</div>
      <p><b>Designed to shatter the norm.</b>
      Atlas is crafted to mirror our uncommon obsession with every single detail, always in pursuit of elevating you above the crowd, while also enhancing your privacy.
      </p>
      </div>
    <div className='front-back'>
      <div className='front'>
        <img src={front} alt="" />
      </div>
      <div className='back'>
        <img src={back} alt="" />
      </div>
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
</div>
  )
}

export default Card
