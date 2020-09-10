import React from 'react';
import Navbar from './Navbar';
import {FiShoppingCart} from 'react-icons/fi';
import {FaShippingFast} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';

function Address() {
    return (
        <div>
            <div className="navbar--container">
                <Navbar/>
            </div>
            <div className="container mt-5">
                <div className="first-cart-container clearfix">
                    <h1>Address data and type of delivery</h1>
                    <div>
                        <span className="text-grey-light">
                            <button className="cart-progress-icon-outline">
                                <FiShoppingCart/>
                            </button>
                        </span>
                        <hr className="line-seperator"></hr>
                        <span className="">
                            <button className="cart-progress-icon">
                                <FaShippingFast/>
                            </button>
                        </span>
                        <hr className="line-seperator"></hr>
                        <span className="text-grey-light">
                            <MdPayment/>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <label>
                                    First Name
                                </label>
                                <input placeholder=""></input>
                            </div>
                        </div>
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address;