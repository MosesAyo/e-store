import React from 'react';
import {Link} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import {FiShoppingCart} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {ReactComponent as Logo} from './static/svg/icon.svg';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md fixed-top main-nav transparent-navbar">
                <div class="container">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/#"><Logo/></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/#">e-STORE</Link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav mx-auto">
                        <li class="nav-item"><Link class="nav-link text-white" to="/#">Men</Link></li>
                        <li class="nav-item mr-3 ml-3"><Link class="nav-link text-white" to="/#">Women</Link></li>
                        <li class="nav-item"><Link class="nav-link text-white" to="/#">Kids</Link></li>
                    </ul>
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/#"><FiSearch/></Link>
                        </li>
                        <li class="nav-item mr-3 ml-3">
                            <Link class="nav-link text-white" to="/#"><FiShoppingCart/></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/#"><FiUser/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;