import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {FaShippingFast} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';
import {BsDash} from 'react-icons/bs';
import {IoMdAdd} from 'react-icons/io';
import {GrClose} from 'react-icons/gr';

import Navbar from './Navbar';
import _blackShirt from './static/images/back-shirt.jpeg';


function ShoppingCart() {
    return (
        <div>
             <div className="navbar--container">
                <Navbar/>
            </div>
            <div className="container mt-5">
                <div className="first-cart-container clearfix">
                    <h1>Shopping Cart</h1>
                    <div>
                        <span className="">
                            <button className="cart-progress-icon">
                                <FiShoppingCart/>
                            </button>
                        </span>
                        <hr className="line-seperator"></hr>
                        <span className="text-grey-light">
                            <FaShippingFast/>
                        </span>
                        <hr className="line-seperator"></hr>
                        <span className="text-grey-light">
                            <MdPayment/>
                        </span>
                    </div>
                </div>
                    <div className="mt-4">
                        <table className="cart-table ">
                            <tr className="cart-headings text-grey">
                                <th>Product</th>
                                <th className="text-center">Color</th> 
                                <th className="text-center">Size</th>
                                <th className="text-center">Ammount</th> 
                                <th className="text-center">price</th>
                            </tr>
                            <tr>
                                <td className="cart-item">
                                    <img srcSet={_blackShirt} alt="black"/>
                                    <div>
                                        <h6>Black Shirt </h6>
                                        <p>#212315</p>
                                    </div>
                                </td>
                                <td className="text-center">White</td>
                                <td className="text-center">XL</td>
                                <td>
                                    <div className="add-reduce center-div">
                                        <button>
                                            <BsDash/>
                                        </button>
                                        <span>1</span>
                                        <button>
                                            <IoMdAdd/>
                                        </button>
                                    </div>
                                </td>
                                <td className="text-center"><span>&#8358;</span> 3,999</td>
                                <td className="text-right"><button className="bg-white border-none"><GrClose/></button></td>
                            </tr>
                            <tr>
                                <td className="cart-item">
                                    <img srcSet={_blackShirt} alt="black"/>
                                    <div>
                                        <h6>Black Shirt </h6>
                                        <p>#212315</p>
                                    </div>
                                </td>
                                <td className="text-center">White</td>
                                <td className="text-center">XL</td>
                                <td>
                                    <div className="add-reduce center-div">
                                        <button>
                                            <BsDash/>
                                        </button>
                                        <span>1</span>
                                        <button>
                                            <IoMdAdd/>
                                        </button>
                                    </div>
                                </td>
                                <td className="text-center"><span>&#8358;</span> 3,999</td>
                                <td className="text-right"><button className="bg-white border-none"><GrClose/></button></td>
                            </tr>
                        </table>
                        <div className="row mt-5 mb-5">
                            <div className="col">
                                <input placeholder="Promo Code" className="promo-code-input"></input>
                            </div>
                            <div className="col">
                                <p className="cart-total-cost">Total cost <span> &#8358;12,345</span></p>
                            </div>
                            <div className="col">
                                <div className="cart-action-button ml-auto">
                                    <button className="bg-white border-grey">CONTINUE SHOPPING</button>
                                    <button className="bg-yellow">NEXT STEP</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default  ShoppingCart;