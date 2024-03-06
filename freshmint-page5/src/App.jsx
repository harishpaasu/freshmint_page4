
import './App.css'
import React from 'react'
import './App.css';
import starkconpg from "./assets/starkconpg-2.png";


function App() {
  
  return (
    <>
    <div>
      <div className="Rectangle-18">
        <div className='nav'>
          <div className="Ahoy">Ahoy</div>
          <div className="nav-2">
            <div className="Events">Events</div>
            <div className="Community">Community</div>
            <div className="Profiles">Profiles</div>
            <div className="Connect">
              <button className="button-1" type='button'>0x3e3c…4b77</button>
            </div>
          </div>
        </div>
        <div className='successful'>  You have successfully registered for the event <img width="48" height="48" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/></div>

        <div className="StarkCon-IIT-Madras-StarkWare-x-Web3Chennai">
          StarkCon IIT Madras ~ StarkWare x Web3Chennai
        </div>
        <div className="Thu-22-Dec-1500---1800-GMT530">
          Thu, 22 Dec, 15:00 - 18:00 GMT+5:30
        </div>
        <div className="IITM-Research-Park">
          IITM Research Park
        </div>
        <img className="starkconpg-2" src={starkconpg} alt="starkconpg" />

        <div className="box-1-4">
          <div className="Frame-26">
            <div className="Ellipse-11">
              <div className="Starkcon">Starkcon</div>
              <div className="Organizer">Organizer</div>
            </div>
          </div>
          <div className="Frame-27">
            <div className="Ellipse-11">
              <div className="chaalpritam">Chaal Pritam</div>
              <div className="Organizer">Host</div>
            </div>
          </div>
          <div className="Frame-29">
            <div className="Ellipse-11">
              <div className="Starkcon">Web3Chennai</div>
              <div className="community-partner">Community Partner</div>
            </div>
          </div>
          <div className="Frame-28">
            <div className="Ellipse-11">
              <div className="Starkcon">IITM RP</div>
              <div className="Organizer">Partner</div>
            </div>
          </div>
        </div>
        <div class="successfully">You have successfully registered for the event <span> <img width="48" height="48" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> </span></div>

        <div className="reg">
          <div className="Registration"><span>Registration</span></div>
          <a href="#"> <div className="View-location-in-Google-Map">View location in Google Map</div></a>
        </div>

        <div className="hello-share">
          <div className="Hello-Please">Hello! Please register below. You will be able to join the event when the host approves your registration.</div>
          <button type="button" className="share">
            <div className="Frame-89">
              <span className="Share-this-event">Share this event</span>
            </div>
          </button>
        </div>

        <div className="form">
          <form action="/action_page.php">
            <label htmlFor="Rate" className="rate">Rate yourself in the knowledge of blockchain*</label>
            <input type="text" id="Rate" name="Rate yourself" placeholder="Say something"></input>

            <label htmlFor="Rate" className="rate">If your are from IIT Madras ? Share enrollment number</label>
            <input type="text" id="Rate" name="Rate yourself" placeholder="Enrollment number"></input>

            <label htmlFor="Rate" className="rate">Collage</label>
            <input type="text" id="Rate" name="Rate yourself" placeholder="Collage name"></input>

            <label htmlFor="Rate" className="rate">Branch</label>
            <input type="text" id="Rate" name="Rate yourself" placeholder="Course Branch"></input>

            <label htmlFor="Rate" className="rate">Year of Study</label>
            <input type="text" id="Rate" name="Rate yourself" placeholder="Current Year"></input>

            <label htmlFor="Rate" className="rate">Twitter or Other Social Handle </label>
            <input type="text" id="Rate" name="Rate yourself" placeholder="Username"></input>

            <input type="submit" value="Register"></input>
          </form>
        </div>

        <div className="Event-Information">
          Event Information
        </div>
        <div className="StarkCon-comes">
          <p>
            ​​StarkCon comes to 🇮🇳
            ​​​​​We are thrilled to bring the 'STARK' team to IIT Madras after hosting meetups at IIT Delhi, IIT Guwahati, IIT Kharagpur, IIT Roorkee, and, BITS Pilani! 🙌🏻<br /> <br />
            ​​​​​In this meetup, you will get to learn about ZK-Rollup technology, L2 scaling, programming in CAIRO, the progress of the StarkNet ecosystem, and much more 🚀 <br /><br />
            ​​​​​If blockchain and web3 interest you, make sure to come by and learn from the best! Cool merchandise awaits you ✨<br /><br />
            ​​​​​Come hang out with the 'STARK fam' for an evening of learning and socializing for coders, enthusiasts, and the future builders of CAIRO in the web3 ecosystem 🎉<br /><br />
            ​​​​More on how to get involved with us: <br /> <br />
            ​​​​Grants Program- <br />
            ​​​​We have grants specifically for the Indian community targeting students,<br /> developers, and builders. Know more and apply here:
            <a className="link" href="https://starkcon.com/grants">https://starkcon.com/grants </a> <br /><br />
            ​​​​Online Cairo Bootcamp- <br />
            ​​​​If you have a superb idea for grants but don't know how to buidl, we gotchu <br /> you 🤝🏻 We are planning a Cairo online Bootcamp on a global scale.
            ​​​​Learn Cairo and buidl exciting projects with us 🥳 <br />
            ​​Register here:
            <a className="link" href="https://lu.ma/cairoBootcamp">https://lu.ma/cairoBootcamp</a><br /><br />
            ​​​​​​​​​Date: 22nd December <br /><br />
            ​​​​​Time: 3 PM to 6 PM IST <br /><br /><br />

            Location: Raman hall, IIT Madras
          </p>
        </div>
      </div>
      </div>
   
    </>
  )
}

export default App
