import React from 'react';
import {FiHome} from 'react-icons/fi';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {GrFavorite} from 'react-icons/gr';
import {BsDash} from 'react-icons/bs';
import {IoMdAdd} from 'react-icons/io';
import {BsFileEarmarkText} from 'react-icons/bs';
import {BsBucket} from 'react-icons/bs';
import {GiClothespin} from 'react-icons/gi';
import {GiLoincloth} from 'react-icons/gi';
import {GiRolledCloth} from 'react-icons/gi';
import {RiBrush2Line} from 'react-icons/ri';
import {IoIosStar} from 'react-icons/io';
import {IoIosStarHalf} from 'react-icons/io';
import {FiUser} from 'react-icons/fi';
import Navbar from './Navbar';

import _blackShirt from './static/images/back-shirt.jpeg';
import _greySweater from './static/images/grey-top.jpeg';
import _greyTop from './static/images/grey-sweater.jpeg';
import _denim from './static/images/denim.jpg';
import lady1 from './static/images/lady1.jpg';
import guy from './static/images/guy.jpg';



function Product() {
    return (
        <div>
            <div className="navbar--container">
                <Navbar/>
            </div>
            <div className="container">
                <h6 className="routes-path"><FiHome/> / Men's Top / T-Shirt / Black Shirt </h6>
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <img className="product-image--small" srcSet={_blackShirt} alt="New Arrival" />
                            </div>
                            <div className="col-10">
                                <div className="product-image-container">
                                    <img srcSet={_blackShirt} alt="Product Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="clearfix">
                            <div className="sale-notice">
                                <h6>SALE</h6>
                            </div>
                            <div className="product-id">
                                <p>Product ID:<br/>276532</p>
                            </div>
                        </div>
                        <div>
                            <h4>Black T-Shirt</h4>
                            <p><strong><span>&#8358;</span> 4,999</strong> <span className="old-price "><del><span>&#8358;</span> 4,500</del></span></p>
                        </div>
                        <div className="clearfix">
                            <p>Color:</p>
                            <div className="color-palette">
                                <div className="bg-black">

                                </div>
                            </div>

                            <div className="color-palette">
                                <div className="bg-danger">

                                </div>
                            </div>

                            <div className="color-palette">
                                <div className="bg-primary">

                                </div>
                            </div>

                            <div className="color-palette">
                                <div className="bg-yellow">

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 clearfix">
                            <p>Size: see size table</p>

                            <button className="choose-size-button">
                                <a href="/#">CHOOSE SIZE</a>
                               <span><MdKeyboardArrowRight/></span>
                            </button>
                        </div>

                        <div className="mt-4">
                            <p>Quality:</p>
                            <div className="clearfix">
                                <div className="float-left">
                                    <button className="quality-button">
                                        <div className="row">
                                            <div className="col">
                                                <BsDash/>
                                            </div>
                                            <div className="col">
                                                <h6>1</h6>
                                            </div>
                                            <div className="col">
                                                <IoMdAdd/>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="float-left ml-2">
                                    <button class="add-to-cart-button">
                                        ADD TO CART
                                    </button>
                                </div>
                                <div className="float-left ml-2">
                                    <button className="favorite-button">
                                        <GrFavorite />
                                    </button>
                                </div>
                            </div>
                            
                        </div>

                        
                    </div>
                </div>

                <div className="tabs-container">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">DESCRIPTION</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">REVIEWS (2)</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        {/* <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> */}
                        <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                                <div className="col-6">
                                    <div className="file-icon mt-4 ">
                                        <BsFileEarmarkText/>
                                        <h5>Details and product description</h5>
                                    </div>
                                    <div className="product-details-text mb-5">
                                        <p>Plane Black T-shirt.<br/>
                                            Made of cotton. T-shirt fits perfectly with jeans, pants or shorts
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="file-icon mt-4 ">
                                        <RiBrush2Line/>
                                        <h5>Material(s) and care</h5>
                                    </div>
                                    <div className="product-details-text mb-5">
                                        <p>Body: 98% COTTON - 2% ELASTANE
                                        </p>
                                        <div>
                                            <span className="pr-2">
                                                <BsBucket/>
                                            </span>
                                            <span className="pr-2">
                                                <GiClothespin/>
                                            </span>
                                            <span className="pr-2">
                                                <GiLoincloth/>
                                            </span>
                                            <span className="pr-2">
                                                <GiRolledCloth/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row">
                                <div className="col-6  mt-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="star-score-container">
                                                <h1>4.5</h1>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStarHalf/>
                                                </span>
                                                <div className="mt-3 text-grey">
                                                    <FiUser/> <span className="ml-2">All 81 opinions </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div>
                                                <span className="text-yellow"><IoIosStar/></span><span className="ml-2">1  </span> <div className="star-line"></div>
                                            </div>
                                            <div>
                                                <span className="text-yellow"><IoIosStar/></span><span className="ml-2">2  </span> <div className="star-line"></div>
                                            </div>
                                            <div>
                                                <span className="text-yellow"><IoIosStar/></span><span className="ml-2">3 </span> <div className="star-line"></div>
                                            </div>
                                            <div>
                                                <span className="text-yellow"><IoIosStar/></span><span className="ml-2">4 </span> <div className="star-line"></div>
                                            </div>
                                            <div>
                                                <span className="text-yellow"><IoIosStar/></span><span className="ml-2">5 </span> <div className="star-line"></div>
                                            </div>
                                        </div>
                                        <div class="add-opinion">
                                            <button className="add-to-cart-button center-div">
                                                ADD OPINION
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mt-5">
                                    <div className="clearfix">

                                        <div className="review-user-icon-container">
                                            <img srcSet={lady1} alt="user" />
                                        </div>
                                        <div className="review-username-container">
                                            <h6>John Doe</h6>
                                            
                                            <div className="inline-stars">
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStarHalf/>
                                                </span>
                                            </div>
                                            <div className="review-comment">
                                                <p>This is a review to testify that this product is a great one, i will recommend it anytime</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix">

                                        <div className="review-user-icon-container">
                                            <img srcSet={guy} alt="user" />
                                        </div>
                                        <div className="review-username-container">
                                            <h6>Tim Wilson</h6>
                                            
                                            <div className="inline-stars">
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStar/>
                                                </span>
                                                <span className="mr-1 text-yellow">
                                                    <IoIosStarHalf/>
                                                </span>
                                            </div>
                                            <div className="review-comment">
                                                <p>This is a review to testify that this product is a great one, i will recommend it anytime</p>
                                            </div>
                                        </div>
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
                                <div className="mt-3">
                                    <h6>Grey Sweater</h6>
                                    <p><span>&#8358;</span> 3,499 <span className="old-price "><del><span>&#8358;</span> 4,500</del></span></p>
                                </div>
                            </div>
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_blackShirt} alt="New Arrival" />
                                <div className="mt-3">
                                    <h6>Black T-Shirt</h6>
                                    <p><span>&#8358;</span> 2,499 <span className="old-price "><del><span>&#8358;</span> 4,000</del></span></p>
                                </div>
                            </div>
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_greyTop} alt="New Arrival" />
                                <div className="mt-3">
                                    <h6>Grey Sweater</h6>
                                    <p><span>&#8358;</span> 3,499 <span className="old-price "><del><span>&#8358;</span> 4,500</del></span></p>
                                </div>
                            </div>
                            <div className="col-3 for-you--image-container">
                                <img srcSet={_denim} alt="New Arrival" />
                                <div className="mt-3">
                                    <h6>Blue Jacket</h6>
                                    <p><span>&#8358;</span> 4,999 <span className="old-price "><del><span>&#8358;</span> 4,500</del></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        </div>
    )
}

export default Product;