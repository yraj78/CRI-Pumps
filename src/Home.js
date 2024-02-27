import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <div>
            <header className='top'>
                <img src='logo.png' alt='logo' />
            </header>

            <div className='award'>

                <div className='left-award'>
                    <img src='1.png' alt='trophy' />
                </div>

                <div className='right-award'>
                    <h5> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                    <ul>
                        <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions,
                            as trustworthy products for various projects across the globe to save energy.</li>
                        <li>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy
                            Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated
                            energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>
                    <img src='2.png' alt='secondImage' />
                    <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj,
                        Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker
                        of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>

            </div>

            <div className='pumpsets'>

                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </p>
                <img src='3.png' alt='pumps' />
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                <div className="horizontal-line"></div>
                <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
                <p style={{ textAlign: 'center' }}>
                    CHEMICALS & PROCESS
                    <span className="vertical-line"></span>
                    POWER WATER & WASTE WATER
                    <span className="vertical-line"></span>
                    OILS & GAS
                    <span className="vertical-line"></span>
                    PHARMA
                    <span className="vertical-line"></span>
                    SUGARS & DISTILLERIES
                    <span className="vertical-line"></span>
                    PAPER & PULP
                    <span className="vertical-line"></span>
                    MARINE & DEFENCE
                    <span className="vertical-line"></span>
                    METAL & MINING
                    <span className="vertical-line"></span>
                    FOOD & BEVERAGE
                    <span className="vertical-line"></span>
                    PETROCHEMICAL & REFINERIES
                    <span className="vertical-line"></span>
                    SOLAR
                    <span className="vertical-line"></span>
                    BUILDING HVAC
                    <span className="vertical-line"></span>
                    FIRE FIGHTING
                    <span className="vertical-line"></span>
                    AGRICULTURE & RESIDENTIAL
                </p>

            </div>
            <footer className='foot'>
                <div className='foot-icons' >
                   <span> <FontAwesomeIcon icon={faPhone} />  Toll free 1800 200 1234</span>
                   <span><FontAwesomeIcon icon={faFacebook} />  www.facebook.com/cripumps</span>
                   <span> <FontAwesomeIcon icon={faGlobe} />  www.crigroups.com</span>
                </div>
            </footer>

        </div>
    )
}

export default Home