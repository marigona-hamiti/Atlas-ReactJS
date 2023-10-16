import React from 'react'
import './concierge.scss';
import support from '../assests/images/support-chat.jpg';
import wallet from '../assests/images/wallet.jpg';


const Concierge = () => {
  return (
    <div className='concierge'>
       <div className='intro'>
          <div>Truly Personal</div>
          <p><b>At your beck and call (or text).</b>
          Experience handcrafted support, with your own dedicated personal advisor who is on hand to fulfill any request, from last-minute dinner plans to deep dive sessions.          </p>
        </div>
        <div className='support-wrapper'>
          <img src={support} alt="" />
        </div>
        <div className='data-astro'>
          <div className='div1'>
            <pre>Personal
            advisor</pre>
            <p>
            Going to exceptional lengths to know your preferences and tastes, your advisor is here to provide truly personal support.
            </p>
          </div>
          <div className='div2'>
            <pre>1 on 1
              sessions</pre>
            <p>
            For those times when it takes more than a text or a phone call, your personal advisor is just a quick booking away for a video call.            </p>
          </div>
          <div className='div3'>
            <pre>Experiences
          concierge¹⁰</pre>
            <p>
            From last-minute table reservations, to sold out events, your personal advisor is on hand to help you have a lifetime experience.            </p>
          </div>
        </div>
        <div className='wallet'>
          <img src={wallet} alt="" />
          <p>YOUR PERSONAL ADVISOR, NOW IN IMESSAGE.
          </p>
        </div>
    </div>
  )
}

export default Concierge
