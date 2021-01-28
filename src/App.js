import React from 'react';
import './App.css';
import logo from './images/logo.png';
import logo2 from './images/logo2.jpeg';
import logo3 from './images/logo3.jpeg';
import logo4 from './images/logo4.jpeg';
import logo5 from './images/logo5.jpeg';
import img12 from './images/newyork.webp';
import img13 from './images/london.webp';
import img14 from './images/paris.webp';
import img15 from './images/cancun.webp';
import img16 from './images/ams.webp';
import img17 from './images/punta.webp';
import img18 from './images/atlanta.webp';
import img19 from './images/miami.webp';
import img20 from './images/santo.webp';
import img66 from './images/globe2.webp';
import img11 from './images/valarta.jpeg';

import family from './images/family.png';
import student from './images/student.png';
import honey from './images/hony.png';
import firstclass from './images/firstclass.png';
import businessclass from './images/businessclass.png';
import solo from './images/solo.png';
import army from './images/army.png';
import explorer from './images/explorer.png';
import group from './images/group.png';
import bridge from './images/bridge.webp';
import beach from './images/beach.webp';
import city from './images/city.webp';
import canada from './images/canada.webp';
import globe from './images/globe.webp';
import star from './images/star.png';
import tour from './images/tour.jpeg';
import pay from './images/pay.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import review from './images/review.jpeg';
import re from './images/re.jpeg';
import PhoneIcon from '@material-ui/icons/Phone';

function App() {
  return (
    <>
      <div className="container-fluid navbarline">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Flight Deals</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Hotels</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Canada</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Customer Support</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* phone number starts from here */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="row">
            <div className="col-md-3">
                <p style={{marginBottom:'0rem',color:'#6f6f6f', fontWeight:'bold'}}>Toll Free: +1-844-609-9922</p>
                <small style={{color:'#f33', fontWeight:'bold'}}>(10:00am - 11:30pm EST)</small>
              </div>
              <div className="col-md-3">
                <p style={{color:'#6f6f6f', fontWeight:'bold'}}>International: +1-702-637-7606</p>
              </div>
              <div className="col-md-3">
                <img src={review} alt="" />
              </div>
              <div className="col-md-3">
                <img src={re} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wall starts from here */}
      <div className="container-fluid wall">
        <div className="row">
          <div className="col-md-5">
            <div className="box">
              <h3>Search flights around the World</h3>
              <div className="row">
                <div className="col-md-5">
                  <p>From Airport/City</p>
                  <input type="text" placeholder="City or Airport" />
                </div>
                <div className="col-md-5">
                  <p>To Airport/City</p>
                  <input type="text" placeholder="City or Airport" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <p>Departure</p>
                  <input type="text" placeholder="Departure Date" />
                </div>
                <div className="col-md-5">
                  <p>Return</p>
                  <input type="text" placeholder="Return Date" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <p>Traveller</p>
                  <input type="text" placeholder="No of Traveller" />
                </div>
                <div className="col-md-5">
                  <p style={{ visibility: 'hidden' }}>hhhhhhh</p>
                  <button className="btn">Search Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 starts from here */}
      <div className="container-fluid service">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-3">
                <img src={logo2} alt="logo2" />
                <p className="text-center k"><b>Best Price Guarantee</b></p>
                <p className="text-center">Find our lowest price to destinations worldwide, guaranteed</p>
              </div>
              <div className="col-md-3">
                <img src={logo3} alt="logo2" />
                <p className="text-center k"><b>Easy Booking</b></p>
                <p className="text-center">Search, select and save - the fastest way to book your trip</p>
              </div>
              <div className="col-md-3">
                <img src={logo4} alt="logo2" />
                <p className="text-center k"><b>24/7 Customer Care</b></p>
                <p className="text-center">Get award-winning service and special deals by calling +1-844-609-9922</p>
              </div>
              <div className="col-md-3">
                <img src={logo5} alt="logo2" />
                <p className="text-center k"><b>Easy Booking</b></p>
                <p className="text-center">People love our offers, you will too!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* destination starts from here */}
      <div className="container-fluid destination mt-5">
        <div className="row">
          <div className="col-md-3">
            <img src={img12} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img13} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img14} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img15} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img src={img16} alt="" style={{ height: '14rem' }} />
          </div>
          <div className="col-md-6 most" style={{paddingLeft:'0rem', paddingRight:'0rem'}}>
            <span><h3 className="text-center mt-5 text-white" style={{textShadow:'2px 3px #097db1', fontSize:'2.2rem'}}>Most Popular Destinations</h3> <button className="btn" style={{ border: '1px solid black', backgroundColor: 'transparent', display: 'block', marginLeft: 'auto', marginRight: 'auto', fontWeight:'bold', color:'white' }}>View All Destinations</button></span>
          </div>
          <div className="col-md-3">
            <img src={img17} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img src={img18} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img19} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img20} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img11} alt="" />
          </div>
        </div>
      </div>

      {/* plans stsrts from here */}
      <div className="container-fluid plans">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={family} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Family Travel</h6>
                    <p>Internet searches can reveal important savings and produce new ideas for</p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={student} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Student Travel</h6>
                    <p>Airline companies in the US offer special discounts on airfares for the students. </p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={honey} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Honeymoon Travel</h6>
                    <p>Are you newly married, and planning an affordable honeymoon to some amazing </p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row secrow">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={firstclass} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Firstclass Travel</h6>
                    <p>We offer First Class deals for travel both within USA and for international travel,</p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={businessclass} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Businessclass Travel</h6>
                    <p>We offer cheap business class airfares to passengers who want to travel on US </p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={solo} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Solo Travel</h6>
                    <p>In the current world lot of constraints are placed upon a person by the community.</p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row secrow">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={explorer} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Explorer Travel</h6>
                    <p>We offer First Class deals for travel both within USA and for international travel,</p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={group} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Group Travel</h6>
                    <p>We offer cheap business class airfares to passengers who want to travel on US </p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <img src={army} alt="family" />
                  </div>
                  <div className="col-md-9">
                    <h6>Millatery Travel</h6>
                    <p>In the current world lot of constraints are placed upon a person by the community.</p>
                    <button className="btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* airline deals starts from here */}
      <div className="container-fluid airline mt-5">
        <h1>Best airline deals</h1>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-3">
                <button className="btn">American Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">United Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Delta Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Jetblue Airline Deals</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <button className="btn">Alaska Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Hawaiian Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Air Canada Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Maxico Airline Deals</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <button className="btn">Turkish Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">British Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Air France Airline Deals</button>
              </div>
              <div className="col-md-3">
                <button className="btn">Lufthansa Airline Deals</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fly global starts from here */}
      <div className="container-fluid fly mt-5 mb-5">
      <h2>Fly Global</h2>
      <p>Book Cheap Flight Tickets to/from USA, Canada and Australia.</p>
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <img src={bridge} alt="bridge" />
                <div class="centered">USA Domistic Flighr</div>
              </div>
              <div className="col-md-4 beach">
                <img src={beach} alt="bridge" />
                <div class="centered">Flight From USA</div>
              </div>
              <div className="col-md-4 city">
                <img src={city} alt="bridge" />
                <div class="centered">Flight To USA</div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <img src={canada} alt="canada" />
                <div class="centered" style={{ color: 'white' }}>Canada Domistic Flighr</div>
              </div>
              <div className="col-md-6">
                <img src={globe} alt="globe" />
                <div class="centered" style={{ color: 'white' }}>Flight from Canada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* subscribe starts from here */}
      <div className="container-fluid subs">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <h2>Book Air Tickets</h2>
            <p>Welcome to FlightsChannel, your preferred travel agency for air ticket and hotel reservations in United States of America (USA) and Canada. Because of our good relationship with all the major airlines, we can leverage our pricing to deliver cheap airtickets directly to our customers. We can assure the best and lowest flight deal which is very difficult to find online. Once you book your flight tickets with us then we are confident that you will definitely come again for your next trip.</p>
            <div className="row subs2">
              <div className="col-md-3">
                <p style={{ marginBottom: '0.2rem', fontWeight: 'bold' }}>Stay up-to-date</p>
                <p>Subscribe now and receive the latest travel news.</p>
              </div>
              <div className="col-md-7">
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="col-md-2">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customer review starts from here */}
      <div className="container-fluid customer mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h3>CUSTOMER REVIEW</h3>
            <img src={star} alt="" />
            <p className="text-center">TRUSTPILOT</p>
            <div className="col-md-8 mx-auto">
              <img src={tour} alt="" style={{ marginTop: '3rem', width: '100%' }} />
              <img src={pay} alt="" style={{ marginTop: '8rem', width: '100%', height: '4rem' }} />
            </div>
          </div>
        </div>
      </div>

      {/* footer starts from here */}
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-2">
            <h5>About Us</h5>
            <p style={{ marginTop: '2rem' }}>FlightsChannel is one of the best flight booking agency which was started with the aim of providing the best experience at an affordable price.</p>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Cancellation Policy</li>
              <li>Disclaimer</li>
              <li>Credit Card Verification</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Top US Destinations</h5>
            <ul>
              <li>Flight to Atlanta</li>
              <li>Flights To Baltimore</li>
              <li>Flights To Chicago</li>
              <li>Flights To Charlotte</li>
              <li>Flights To Dallas</li>
              <li>Flights To Denver</li>
              <li>Flights To Detroit</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>International Routes</h5>
            <ul>
              <li>Flight to Atlanta</li>
              <li>Flights To Baltimore</li>
              <li>Flights To Chicago</li>
              <li>Flights To Charlotte</li>
              <li>Flights To Dallas</li>
              <li>Flights To Denver</li>
              <li>Flights To Detroit</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Popular Countries</h5>
            <ul>
              <li>Flight to Maxico</li>
              <li>Flights To Canada</li>
              <li>Flights To Costa Rica</li>
              <li>Flights To Switzerland</li>
              <li>Flights To Spain</li>
              <li>Flights To Thailand</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Contact Us</h5>
            <p style={{ marginTop: '2rem' }}>7260 W Azure Dr. STE 140-2212, Las Vegas, NV 89130, USA</p>
            <p style={{ marginBottom: '0rem' }}>Email</p>
            <p style={{ marginBottom: '0rem' }}>support@flightschannel.com</p>
            <p >+1-844-609-9922</p>
            <p style={{ marginBottom: '0rem' }}>International</p>
            <p>+1-702-637-7606</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="social">
              <div className="row">
                <div className="col-md-3">
                  <p>Follow Us On-</p>
                </div>
                <div className="col-md-1">
                  <FacebookIcon />
                </div>
                <div className="col-md-1">
                  <TwitterIcon />
                </div>
                <div className="col-md-1">
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copy" style={{marginBottom:'1.9rem'}}>Copyright © 2016 - 2020 Flights Channel LLC. All Rights Reserved. Sitemap</p>
      <p className="stickyfooter"><PhoneIcon/>Call Us For Exclusive Fares! 1-844-609-9922 </p>
    </>
  );
}

export default App;
