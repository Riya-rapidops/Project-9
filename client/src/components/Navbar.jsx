import React,{ useContext, useState } from 'react'
import { cancelIcon, icon , menuIcon } from '../utils/svgs'
import { Link } from "react-router-dom";
import CartIcon from './cartIcon.png';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import LogoutIcon from './LogoutIcon';
import { Context } from '../utils/context';
import { motion } from 'framer-motion';
import {PageAnimation} from '../utils/PageAnimation'
import iconLogo from './foodIcon.png';

const Navbar = () => {

  const [state,dispatch] = useContext(Context)
  const [isOpen, setIsOpen] = useState(true)
  const history = useHistory()

  const logout = () => {
    swal({
        title:"Are you sure?",
        text: "You Want To Logout From Foodizone!!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    })
    .then((willDelete) => {
        if (willDelete) {
            swal("Logout Successfully.", { icon: "success" })
            dispatch({type:"UNSET_USER"})
            history.push('/')
        }
    })   
}
  return (
    <motion.section className="navbar sticky z-50 top-0 border-b-4" initial='in' animate='out' exit='exit' 
                    variants={PageAnimation} transition={{ duration: 0.5 }}>
        <nav className="flex md:mx-24 navbar-ipad items-center md:px-3 py-3 flex-wrap">
            <img src={iconLogo} />
            <Link to="/" className="p-2 md:mr-4 inline-flex items-center outline-none">
              <span className="text-xl text-white font-bold uppercase tracking-wide">Foodizone</span>
            </Link>
            <button className="text-white inline-flex p-3 rounded lg:hidden ml-auto hover:text-white outline-none" 
                  onClick={() => setIsOpen(!isOpen)}>
                  { isOpen ? menuIcon : cancelIcon }
            </button>
            <div className={`${isOpen ? 'hidden':'' } w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className="navlink-container">
                    <Link to='/' onClick={() => setIsOpen(!isOpen)} className="navlink"><span>Home</span></Link>
                    { 
                      state.user.username ?<>
                        <Link to='/orders'  onClick={() => setIsOpen(!isOpen)} className="navlink"><span>My Orders</span></Link>
                        <Link to='/myprofile' onClick={() => setIsOpen(!isOpen)} className="navlink"><span>My Profile</span></Link>
                      </>:<>
                        <Link to='/signup' onClick={() => setIsOpen(!isOpen)} className="navlink"><span>Sign Up</span></Link>
                        <Link to='/signin' onClick={() => setIsOpen(!isOpen)} className="navlink"><span>Sign In</span></Link>
                      </>
                    }
                    <Link to='/contact' onClick={() => setIsOpen(!isOpen)} className="navlink"><span>Contact Us</span></Link>
                    <Link to="/cart" onClick={() => setIsOpen(!isOpen)} className="cart relative inline-flex cart-ipad-margin ml-3 mt-2 md:ml-0 md:mt-0">
                      {/* <CartIcon stroke="#fff" classes="h-6 w-6" /> */}
                      <img src={CartIcon} />
                      <span className="cart-basket bg-gray-700 flex items-center justify-center">
                        {state?.cartItems.length || 0}
                      </span>
                    </Link>
                    { 
                      state.user.username ?
                    <Link to="/logout" onClick={logout} className="logout relative inline-flex cart-ipad-margin m1-3 mt-2 md:ml-5 md:mt-0">
                      <LogoutIcon stroke="#fff" classes="h-6 w-6" />
                    </Link>:<></>
                    }
                </div>
            </div>
        </nav>
    </motion.section>
  )
}

export default Navbar
