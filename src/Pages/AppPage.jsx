import React from 'react'
import './app.scss';
import horses from '../assests/images/moment.jpg'
import first from '../assests/images/virtual-cards.jpg'
import second from '../assests/images/rewards.jpg'
import phone from '../assests/images/phone-in-hand.webp'



const AppPage = () => {
  return (
    <div className='app-page'>
        <div className='intro'>
          <div>Power Couple</div>
          <p><b>A dynamic duo of card + app.</b>
          Each conceived from the same first principles, Atlas shines with a true native app that raises the bar, from magical rewards to unlimited cards, and everything in between.          
          </p>
        </div>
        <div className='phone-wrapper'>
          <img src={phone} alt="" />
        </div>
        <div className='data-astro'>
          <div className='div1'>
            <pre>Dynamic
            rewards⁸</pre>
            <p>
            Get automatically upgraded to 3x points where you spend the most, plus 1x points on every purchase. Because there's more to a rewarding life than chasing points.
            </p>
          </div>
          <div className='div2'>
            <pre>Unlimited
            virtual cards⁹</pre>
            <p>
            Create a unique card for your next trip, or one to share with your assistant, or to go online shopping, or ... you get the idea.            </p>
          </div>
          <div className='div3'>
            <pre>Intuitively
            powerful</pre>
            <p>
            Buttery-smooth performance, support for features like Dark Mode, and endless details make an app that's a pleasure to use, day in, night out.            </p>
          </div>
        </div>
        <div className='horses'>
          <img src={horses} alt="" />
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

export default AppPage
