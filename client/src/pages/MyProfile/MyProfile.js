import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import { Context } from '../../utils/context'
import { PageAnimation } from '../../utils/PageAnimation'

const MyProfile = () => {

    const [state] = useContext(Context)

    const history = useHistory()

  
    
    return (
        <motion.section className="flex justify-center pt-24" initial='in' animate='out' exit='exit' 
                        variants={PageAnimation} transition={{ duration: 0.4 }}>
            <div className="w-full mx-3 md:w-1/2">
                <div className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-center shadow-md border-2 border-gray-800">
                        <h1 className="text-2xl font-bold primary-text">My Profile</h1>
                    </div>
                    <div className="grid mt-7 grid-cols-2 gap-3 md:gap-5 border-b-2 pb-5">
                        <p className="flex justify-between">
                            <span className="capitalize font-bold text-base md:text-lg primary-text">Name</span>
                            <span>:</span>
                        </p>
                        <p className="text-lg text-gray-600 break-words">{state.user.username || 'NA'}</p>
                        <p className="flex justify-between">
                            <span className="capitalize font-bold text-base md:text-lg primary-text">Email</span>
                            <span>:</span>
                        </p>
                        <p className="text-base text-gray-600 md:text-lg break-words">{state.user.email || 'NA'}</p>
                        <p className="flex justify-between">
                            <span className="capitalize font-bold text-base md:text-lg primary-text">Phone</span>
                            <span>:</span>
                        </p>
                        <p className="text-base text-gray-600 md:text-lg break-words">{state.user.phone || 'NA'}</p>
                    </div>
                    <div className="w-full text-center mt-4">
                        <button onClick={() => history.push('/contact')} className="navlink rounded-md primary-text" to="/editprofile">
                            <span className="tracking-wider">Contact Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default MyProfile
