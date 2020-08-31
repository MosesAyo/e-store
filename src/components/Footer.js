import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="page-footer font-small indigo">
            <hr></hr>
            <div class="container text-center text-md-left">

                <div class="row">

                <div class="col-md-3 mx-auto">

                    <h6 class="text-uppercase mt-3 mb-4">HELP</h6>

                    <ul class="list-unstyled list--items">
                    <li>
                        <a href="#!" class="text-black">Order Status</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Shipping and Delivery</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Returns</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Payment Options</a>
                    </li>
                    </ul>

                </div>

                <hr class="clearfix w-100 d-md-none" />

                <div class="col-md-3 mx-auto">

                    <h6 class="text-uppercase mt-3 mb-4">INFORMATION</h6>

                    <ul class="list-unstyled list--items">
                    <li>
                        <a href="#!" class="text-black">Gift Cards</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Find a store</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Become a member</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Site feedback</a>
                    </li>
                    </ul>

                </div>

                <hr class="clearfix w-100 d-md-none" />

                <div class="col-md-3 mx-auto">

                    <h6 class="text-uppercase mt-3 mb-4">E-STORE INSIDE</h6>

                    <ul class="list-unstyled list--items">
                    <li>
                        <a href="#!" class="text-black">Company Overview</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Made in Lagos</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Careers</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Idea Submission</a>
                    </li>
                    <li>
                        <a href="#!" class="text-black">Student Discount</a>
                    </li>
                    </ul>

                </div>

                <hr class="clearfix w-100 d-md-none" />

                <div class="col-md-3 mx-auto">

                    <h6 class="text-uppercase mt-3 mb-4">Newsletter</h6>

                    <ul class="list-unstyled">
                    <li>
                        <p>To our newsletter</p>
                    </li>
                    <li>
                        <input type="email" class="pl-2 pr-2 footer-email" placeholder="Enter your email" /> <br/>
                        <button className="subscribe-button">SUBSCRIBE</button>
                    </li>
                    </ul>

                </div>

                </div>

            </div>

            <hr></hr>

            <div class="footer-copyright text-center mb-2"> BUILT BY MOSES AYOMIDE © 2020 Copyright:
                <a href="https://mdbootstrap.com/"> All rights reserved</a>
            </div>

            </footer>
        </div>
    )
}
export default  Footer;