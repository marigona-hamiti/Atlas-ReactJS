import React from 'react'
import './benefits.scss';

const Benefits = () => {
  return (
    <div className='benefits'>
      <div className='intro'>
        <div>Executive, brief.</div>
        <p><b>Your next journey begins here.</b>
        With all the essentials you need out in the world, and nothing to limit your possibilities, here is everything Atlas has to offer.        </p>
      </div>

      <div className='cards'>

        <div className='row1'>
        <div className='div1'>
          <p><b>Dining</b></p>
          <p>Exclusive reservations with Atlas Supper Club</p>
          <p>Dedicated tables at partner restaurants</p>
          <p>Last-minute bookings</p>
          <p>Peak hours access</p>
        </div>
        <div className='div2'>
          <p><b>Travel</b></p>
          <p>5x points with BLADE on helicopter rides and flights</p>
          <p>CLEAR Plus membership</p>
          <p>Cancel flights without fees</p>
        </div>
        </div>

        <div className='row2'>
        <div className='div1'>
          <p><b>Rewards & Benefits</b></p>
          <p>3x upgrade on top spending category</p>
          <p>1x points on every purchase</p>
          <p>One Medical membership¹¹</p>
          <p>Erewhon Cafe membership¹²</p>
          <p>FUTURE fitness training membership¹³</p>
        </div>
        <div className='div2'>
          <p><b>Personal Advisor</b></p>
          <p>Advisor dedicated to your account</p>
          <p>1 on 1 sessions with available video calls</p>
          <p>Personalized dining and experiences concierge</p>
        </div>
        </div>

        <div className='row3'>
        <div className='div1'>
          <p><b>Card</b></p>
          <p>Charge card with no pre-set spending limits¹⁴</p>
          <p>21 gram steel alloy, milled, engraved.</p>
          <p>Tone-on-tone card back, with your personal icon.</p>
          <p>Visa Infinite</p>
        </div>
        <div className='div2'>
          <p><b>App</b></p>
          <p>True native iOS app with buttery-smooth performance</p>
          <p>Dark Mode support</p>
          <p>Instant purchase notifications</p>
          <p>Unlimited virtual cards</p>
          <p>Apple Pay</p>
        </div>
        </div>

      </div>
      <div className='btn'>
        <button>Become a founding member</button>
        <p>$999/yr</p>
      </div>
    </div>
  )
}

export default Benefits
