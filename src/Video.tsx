import './Video.css';
import videoBg from './videoplayback.mp4';
import {Reason} from './Card';
import BoatCheck from './reassonImg/BoatCheck.png';
import WavePrice from './reassonImg/WavePrice.png';
import Calendar from './reassonImg/Calendar.png';
import Expirience from './reassonImg/Expirience.png';
import Compas from './reassonImg/Compas.png';
import Sunset from './reassonImg/Sunset.png';
import {FleetCard} from './FleetCard';
import Nolicence from './fleetCards/noLicence.jpg';
import Licence from './fleetCards/licence.jpg';
import Sailing from './fleetCards/sailing.jpg';
import Yatch from './fleetCards/yatch.avif';
import {MyGallery} from './Swiper';

export const ContVideo = () =>{
    return(
        <div>
            <div className="container">
                <div className='text'>
                    <h1>BEST RENTING COMPANY YOU WILL NEED</h1>
                    <h2>BOATS WITH AND WITHOUT LISENSE.</h2>
                    <p><a href="#fleet">→VIEW FLEET</a></p>
                </div>
                <video 
                    className='background-video'
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    controls={false}
                    style={{ width: '100%', height: '650px', objectFit: 'cover' }}
                    >
                    <source className="background-video" src={videoBg} type="video/mp4" />
                </video>
            </div>
            <div className='rentWithUsContainer'>
                <h1>Why you should rent with us</h1>
                <p>Your next adventure starts at the sea</p>
            </div>
            <div className='theReassons'>
                <div className='theImages'>
                    <Reason img={BoatCheck} name='Top-Quality, Well-Maintained Boats'/>
                    <Reason img={WavePrice} name='Affordable Way to Enjoy the Water'/>
                    <Reason img={Calendar} name='Perfect for Any Occasion'/>
                    <Reason img={Expirience} name='Easy & Hassle-Free Experience'/>
                    <Reason img={Compas} name='Freedom to Explore at Their Own Pace'/>
                    <Reason img={Sunset} name='Unforgettable Memories Guaranteed'/>
                </div>
                {/*<button className='UsButton'> ABOUT US </button>*/}
            </div>
            <div className='FleetContainerTitle'>
                <h1>OUR FLEET</h1>
            </div>
            <div id='fleet' className='FleetContainer'>
                <div>
                    <a href="#a"><FleetCard img={Nolicence} name="WITH LICENCE"/></a>
                    <a href="#a"><FleetCard img={Licence} name="WITHOUT LICENCE"/></a>
                </div>
                <div>
                    <a href="#a"><FleetCard img={Sailing} name="SAIL BOATS"/></a>
                    <a href="#a"><FleetCard img={Yatch} name="YATCH"/></a>
                </div>
            </div>
            {/*https://www.youtube.com/watch?v=rmb7N-SMO20 */} {/* https://codesandbox.io/p/sandbox/x44ymw?file=%2Fsrc%2FApp.jsx%3A23%2C27 */}
            <MyGallery />
        </div>
    );
};