import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { UpdateFollower} from 'react-mouse-follower'
import { motion } from 'motion/react'
import { PiHeadphonesLight } from 'react-icons/pi';

function Navbar() {

    const name = localStorage.getItem("userName")
    const id = localStorage.getItem("userId")

    const [navMenu, setNavMenu] = useState([
        {
            id:1,
            title:"Home",
            link: "#"
        },
        {
            id:2,
            title:"Categories",
            link:"#"
        },
        {
            id:3,
            title:"Blog",
            link:"#"
        },
        {
            id:4,
            title:"About",
            link:"#"
        },
        {
            id:5,
            title:"Contact",
            link:"#"
        },
    ])

  return (
    <>

    <div className='bg-brandDark text-white py-6'>
        <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}} className='container mx-auto flex justify-between items-center'>
            {/* Logo Section */}

            <UpdateFollower mouseOptions={{backgroundColor:"white", zIndex:999, followSpeed:1.5 , scale:5, mixBlendMode:"difference"}}>
                <a href="#" className='text-xl font-bold uppercase'>
                Playin / <span className='font-extralight text-gray-300'>Market</span>
            </a>
            </UpdateFollower>


            {/* Menu Section */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-4'>
                    {
                        navMenu.map((nave)=>(
                            <li key={nave.id}>
                                <UpdateFollower mouseOptions={{backgroundColor:"white" , zIndex:999 , followSpeed:1.5 , scale:5 , mixBlendMode:"difference"}}>
                                                                    <a href={nave.link} className='inline-block py-2 px-3 uppercase text-sm'>{nave.title}</a>
                                </UpdateFollower>
                            </li>
                        ))
                    }

                                <UpdateFollower  mouseOptions={{backgroundColor:"white" , zIndex:999 , followSpeed:1.5 , scale:5 , mixBlendMode:"difference"}}>
                                               <button className='text-xl ps-14 hover:rotate-[360deg] duration-100'>
                        <PiHeadphonesLight/>
                    </button>
            </UpdateFollower>


             <a href="/login" className='border-2 border-[#f1f1f1] rounded-md py-2 px-4 ml-6 hover:bg-[#f1f1f1] hover:text-[#000] font-semibold'>Login</a>
             <a href={`/editprofile/${id}`}>
             <div className='border-2 border-[#f1f1f1] text-white rounded-md py-2 px-4 ml-6 hover:bg-[#f1f1f1] hover:text-[#000] font-semibold'>{name}</div>
             </a>


             

                </ul>
            </div>

             <button className='md:hidden'>
                <MdMenu className='text-4xl'/>
            </button>

           
        </motion.nav>
    </div>
    
    </>
  )
}

export default Navbar