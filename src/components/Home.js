import React from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import {FiArrowLeft} from 'react-icons/fi';
import {FaShippingFast} from 'react-icons/fa';
import {FaRegSmileBeam} from 'react-icons/fa';
import {MdSecurity} from 'react-icons/md';

import _blueImage from './static/images/benjamin-voros-260869-unsplash.jpg'
import _sweaterCollections from './static/images/sweater-collection.jpg';
import _rebookSweater from './static/images/images22.jpeg';
import _whitehoodie from './static/images/whitehoodie.jpg';
import _blackShirt from './static/images/back-shirt.jpeg';
import _greySweater from './static/images/grey-top.jpeg';
import _greyTop from './static/images/grey-sweater.jpeg';
import _denim from './static/images/denim.jpg';
import _blueSuit from './static/images/cute-toddler-in-rainbow-bowtie.jpg';
import _tealPhoto from './static/images/woman-wearing-teal.jpg'
import _sneakers from './static/images/pair-of-all-black-sneakers.jpg';

function Home() {
    return (
        <div>
            <Navbar/>
            <div class="big-picture">
                <div id="carouselExampleIndicators" class="carousel slide home-carousel" data-ride="carousel">
                    
                    <div class="carousel-inner home-carousel-inner">
                   
                        <div class="carousel-item home-carousel-item active">
                        <img src={_blueImage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item home-carousel-item">
                        <img src={_blueSuit} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item home-carousel-item">
                        <img src={_tealPhoto} class="d-block w-100" alt="..." />
                        </div>
                        
                    </div>
                    <div className="slides--inner-text">
                        <div class="container">
                            <ol class="carousel-indicators home-carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="inline-block">
                                <h1 class="text-white"><strong>Style from <br/>Anywhere <br/>In Nigeria!</strong></h1>
                                <div class="shop-now--container mt-5">
                                    <button class="shop-now--button">
                                        <FiArrowRight/>
                                    </button>
                                    <Link class="text-white shop-now--text" to="/#">SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a> */}
                </div>

                <div class="bottom-highlights">
                    <div class="bottom-highlights--inner">
                        <div class="row">
                            <div class="col bottom-highlights--inner---first-column">
                                {/* <h1>HI</h1> */}
                            </div>
                            <div class="col mt-3">
                                <div className="bottom-highlights--inner---icon">
                                    <FaShippingFast/>
                                </div>
                                <div className="bottom-highlights--inner---text">
                                    <h6>Free Shipping</h6>
                                    <p>On purchase up to N10,000</p>
                                </div>
                            </div>
                            <div class="col mt-3">
                                <div className="bottom-highlights--inner---icon">
                                    <FaRegSmileBeam/>
                                </div>
                                <div className="bottom-highlights--inner---text">
                                    <h6>99% Satisfied Costumers</h6>
                                    <p>Our Clients Opinions <br/>speak for themselves</p>
                                </div>
                            </div>
                            <div class="col mt-3">
                                <div className="bottom-highlights--inner---icon">
                                    <MdSecurity/>
                                </div>
                                <div className="bottom-highlights--inner---text">
                                    <h6>Originality Guaranteed</h6>
                                    <p>30 days warranty for each <br/>product from our store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-highlights--inner-two">
                    <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <button className="bottom-highlights--inner-arrow-left ">
                            <FiArrowLeft/>
                        </button>
                    </a>

                    <a href="#carouselExampleIndicators" role="button" data-slide="next">
                        <button className="bottom-highlights--inner-arrow-right">
                            <FiArrowRight/>
                        </button>
                    </a>
                    </div>

                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <div className="new-arrival-container">
                            <img srcSet={_sweaterCollections} alt="New Arrival" />
                            <div  className="new-arrival-overlay">
                                <div className="overlay-content">
                                    <h5>New arrivals <br/>are now in!</h5>
                                    <button>
                                        SHOW COLLECTION
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="new-arrival-container">
                            <img srcSet={_rebookSweater} alt="New Arrival" />
                            <div  className="new-arrival-overlay">
                                <div className="overlay-content">
                                    <h5>Reebok  <br/>N7,000</h5>
                                    <button>
                                        SHOW COLLECTION
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="new-arrival-container">
                            <img srcSet={_whitehoodie} alt="New Arrival" />
                            <div  className="new-arrival-overlay">
                                <div className="overlay-content">
                                    <h5>White hoodie  <br/>N6,999</h5>
                                    <button>
                                        SHOW COLLECTION
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="selected-for-you">
                <div className="container">
                    <div className="for-you">
                        <h5>Selecetd just for you</h5>
                        <button>
                            SHOW MORE
                        </button>
                    </div>

                    <div className="for-you--images mt-3 mb-3">
                        <div className="row">
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_greySweater} alt="New Arrival" />
                            </div>
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_blackShirt} alt="New Arrival" />
                            </div>
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_greyTop} alt="New Arrival" />
                            </div>
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_denim} alt="New Arrival" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;