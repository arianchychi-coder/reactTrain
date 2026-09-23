import React, { useState } from 'react'
import {FaWhatsapp} from "react-icons/fa"
import Headphon1 from "../../assets/headphone.png"
import Headphon2 from "../../assets/headphone2.png"
import Headphon3 from "../../assets/headphone3.png"
import { AnimatePresence, easeInOut, scale } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'motion/react'


const fadeup = (delay)=>{
    return{
        hidden:{
            opacity:0,
            y : 100,
            scale:0.5
        },
        show:{
            opacity:1,
            y : 0,
            scale:1,
            transition:{
                duration:0.5,
                delay:delay,
                ease:easeInOut
            }
        },
        exit:{
            opacity:0,
            duration:50,
            scale:0.5,
            transition:{
                duration:0.2,
                ease:easeInOut
            }
        }
    }
}

function Hero() {


    const [headphonData, setHeadphoneData] = useState([
       {
            id:1,
            image: Headphon1,
            title: "Headphone Wireless",
            subtitile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illo magnam vel nihil voluptates minima nulla eveniet ad totam maxime! Sed quam distinctio molestiae accusantium quis dolor cupiditate voluptates praesentium.",
            price:"$100",
            model:"Modal Brown",
            bgColor:"#8b5958"
        },
        {
            id:2,
            image: Headphon2,
            title: "Headphone Wireless 2",
            subtitile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illo magnam vel nihil voluptates minima nulla eveniet ad totam maxime! Sed quam distinctio molestiae accusantium quis dolor cupiditate voluptates praesentium.",
            price:"$100",
            model:"Lime Green",
            bgColor:"#636153"
        },
        {
            id:3,
            image: Headphon3,
            title: "Headphone Wireless 3",
            subtitile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illo magnam vel nihil voluptates minima nulla eveniet ad totam maxime! Sed quam distinctio molestiae accusantium quis dolor cupiditate voluptates praesentium.",
            price:"$100",
            model:"Ocean Blue",
            bgColor:"#5d818c"
        },
    ])



    const [activateData, setActivateData] = React.useState(headphonData[0])


    const handleActivaite = (data)=>{
        setActivateData(data)
    }


  return (

    <section className='bg-brandDark text-white font-varela'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[700px]">


            {/* Headphone Info */}

            <div className='flex flex-col justify-center md:py-14 xl:max-w-[500px]'>
                <div className='space-y-5 text-center md:text-left'>
                    <UpdateFollower mouseOptions={{backgroundColor:"white" , zIndex:9999 , followSpeed: 0.5 , rotate:-720 , mixBlendMode:"difference" ,scale:10}}>

                        <AnimatePresence mode='wait'>
                             <motion.h1 key={activateData.id} variants={fadeup(0.2)} initial="hidden" animate="show" exit="exit" className='text-3xl lg:text-6xl font-bold font-varela'>{activateData.title}</motion.h1>
                        </AnimatePresence>

                    </UpdateFollower>

                    <AnimatePresence mode='wait'>
                        <p key={activateData.id} variants={fadeup(0.3)} initial="hidden" animate="show" exit="exit" className='text-sm leading-loose text-white/80'>{activateData.subtitile}</p>
                    </AnimatePresence>


                    <AnimatePresence>
                        <UpdateFollower mouseOptions={{backgroundColor:activateData.bgColor , zIndex:9999 , rotate: -720 , followSpeed: 0.5 , mixBlendMode:"difference", scale:6 , backgroundElement:(
                            <div>
                                <img src={activateData.image} alt="" />
                            </div>
                        )}}>
<motion.button key={activateData.id} variants={fadeup(0.3)} initial="hidden" animate="show" exit="exit" className='px-4 py-2 inline-block font-normal rounded-sm ' style={{background:activateData.bgColor}}>Buy and Listen</motion.button>
                        </UpdateFollower>
                    </AnimatePresence>


                    {/* Headphone List Seprator */}

                    <div className='flex justify-center items-center md:justify-start gap-4 !mt:24'>
                        <div className='bg-white w-20 h-[1px]'></div>
                        <p className='text-sm uppercase'>Top Headphone for you</p>
                        <div className='bg-white w-20 h-[1px]'></div>
                    </div>


                    {/* Headphone List Swicher */}

                    <div className='grid grid-cols-3 gap-10'>
                        {
                            headphonData.map((item)=>(
                                <UpdateFollower mouseOptions={{backgroundColor: item.bgColor , zIndex:9999 , followSpeed:0.5 , scale:5 , text:"View Details" , textFontSize:"3px"}}>
                                    <div key={item.id} onClick={()=>handleActivaite(item)} className='grid grid-cols-2 cursor-pointer place-items-center'>

                                    <div>
                                        <img src={item.image} alt="" className='w-[200px]'/>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-base font-bold'>{item.price}</p>
                                        <p className='text-base font-bold text-nowrap'>{item.model}</p>
                                    </div>
                                </div>
                                </UpdateFollower>
                            ))
                        }


                    </div>
                </div>
            </div>


            {/* Hero Image */}


            <div className='flex flex-col items-center justify-end'>
                <AnimatePresence mode='wait'>
                    <motion.img key={activateData.image} src={activateData.image} alt="" initial={{opacity:0,scale:0.9,y:100}} animate={{opacity:1, scale:1, y:0}} transition={{duration:0.4,delay:0.2,ease:"easeInOut"}} exit={{opacity:0,scale:0.9,y:100,transition:{duration:0.2}}} className='w-[300px] md::w-[400px] xl:w-[550px]' />
                </AnimatePresence>
            </div>


              {/* WhatsApp Icon */}

              <div className='text-3xl text-white fixed bottom-20 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference'>
                <FaWhatsapp/>
              </div>

        </div>
    </section>

  )
}

export default Hero