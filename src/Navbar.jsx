import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Logo from './assests/logo.png'
import Cart from './Cart';

export default function Navbar({cart,setCart}) {
  return (
    <div>
        <div className='navbar'>
            <img src={Logo} alt='logo'></img>
            <ul className='nav-links'>
                <Link to="/">Home</Link>
                <a href='#'>About</a>
                <a href='#'>Service</a>
                <a href='#'>Contact Us</a>
                <Link className='cc' to="/Cart"><i class="fa-solid fa-cart-shopping"></i><p>{}</p></Link> 
            </ul>
        </div>
        <Outlet></Outlet>

    </div>
  )
};
