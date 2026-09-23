import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone } from 'react-icons/fa'
import { FaMapLocation, FaTelegram } from 'react-icons/fa6'
import Card from "../../assets/credit-cards.webp"
import { motion } from 'motion/react'
import { UpdateFollower } from 'react-mouse-follower'


function Footer() {
  return (
    <>
    <footer className='bg-primery text-white pb-12 p-8'>
        <div className="container mx-auto">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <motion.div
                 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.2 , duration:0.6}} className='space-y-6'>
                    <UpdateFollower mouseOptions={{
                        backgroundColor:"white",
                        zIndex:9999,
                        followSpeed:1.5,
                        mixBlendMode:"difference",
                        scale:10
                    }}>

                        <h1 className='text-cyan-400 text-3xl font-bold uppercase'>Playing</h1>
                    <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vero explicabo necessitatibus sequi, rerum libero deserunt nostrum, vel cumque maxime ut, non illum amet. Asperiores temporibus fugit quos harum iure.</p>
                    <div>
                        <p className='flex items-center gap-2'>
                            <FaPhone/>
                            +1 (123) 456-7890
                        </p>
                        <p className='flex items-center gap-2 mt2'>
                            {""}
                            <FaMapLocation/>
                            Nodia, Ulter Pradesh
                        </p>
                    </div>

                    </UpdateFollower>
                </motion.div>
                <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.4,duration:0.6}} className='space-y-2'>
                    <UpdateFollower mouseOptions={{
                        backgroundColor:"white",
                        zIndex:9999,
                        followSpeed:1.5,
                        mixBlendMode:"difference",
                        scale:10
                    }}>

                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privecy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privecy Policy</li>
                            </ul>
                        </div>
                    </div>

                    </UpdateFollower>
                </motion.div>
                <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.6,duration:0.6}} className='space-y-6'>
                    <UpdateFollower mouseOptions={{
                        backgroundColor:"white",
                        zIndex:9999,
                        followSpeed:1.5,
                        mixBlendMode:"difference",
                        scale:10
                    }}>

                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div className='space-y-2'>
                        <p>Payment Method</p>
                        <img src={Card} alt=""  className='w-[80%]'/>
                    </div>

                    </UpdateFollower>
                </motion.div>
            </div>
            <p className='text-white text-center mt-8 border-t-2 pt-8'>@ 2026 All Rights Reserved || Arian.ch</p>
        </div>
    </footer>
    </>
  )
}

export default Footer