import React from 'react'
import Headphone4 from '../../assets/headphone4.png'
import { fadeup } from '../Service/Service'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

function Baner() {
  return (
    <>
    <section >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 space-y-6 py-14 md:space-y-0 ">
            {/* Baner Image */}
            <div>
                <motion.img initial={{opacity:0,x:-100,rotate:-180}} animate={{opacity:1,x:0,rotate:0}} transition={{duration:0.8 , delay:0.2 , ease:"easeInOut"}} src={Headphone4} alt="" className='w-[300px] md:w-[400px]'/>
            </div>

            {/* Baner Text Info */}

            <div className='flex flex-col  justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <UpdateFollower mouseOptions={{
                        backgroundColor:"red",
                        zIndex:9999,
                        followSpeed:0.5,
                        mixBlendMode:"difference",
                        scale:8
                    }}>
                            <motion.h1 variants={fadeup(0.7)} initial="hidden" whileInView="show" className='text-3xl lg:text-4xl text-red-500 font-semibold font-poppins'>The Last Headphone With The Last Tecnolegy</motion.h1>
                    </UpdateFollower>
                    <motion.p variants={fadeup(0.9)} initial="hidden" whileInView="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid distinctio fugiat totam saepe sit dolores repellat perferendis. Quibusdam labore fugit tempore non reiciendis, eaque laborum alias exercitationem ratione consectetur?</motion.p>
                    <UpdateFollower mouseOptions={{
                        backgroundColor:"white",
                        zIndex:9999,
                        followSpeed:0.5,
                        mixBlendMode:"difference",
                        scale:5
                    }}>
                        <motion.button className='border-2 border-[#e33343] text-[#e33343] hover:bg-[#e33343] px-6 py-2 rounded-md hover:text-white'>Shop Now</motion.button>
                    </UpdateFollower>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Baner