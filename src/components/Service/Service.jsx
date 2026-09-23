import React, { useState } from 'react'
import icon1 from "../../assets/icons/obj1.png"
import icon2 from "../../assets/icons/obj2.png"
import icon3 from "../../assets/icons/obj3.png"
import { motion } from 'motion/react'
import { UpdateFollower } from 'react-mouse-follower'


export const fadeup = (delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay
            }
        }
    }
}

function Service() {


     const [serviceData, setServiceData] = useState([
        {
            id:1,
            title:"Security",
            icon:icon1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui molestiae, eius, laboriosam non temporibus adipisci quidem inventore eveniet, libero amet vitae minus doloribus animi repellat! Facilis nulla iure eum!",
            delay:0.5
        } ,
        {
        id:2,
        title: "Gurantee",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque ratione quaerat facere, ex culpa quasi ipsam dolorem similique quae ipsa temporibus voluptatum. Obcaecati, cum? Sapiente consectetur numquam cum natus!",
        icon:icon2,
        delay:0.8
        },
        {
        id:3,
        title: "Affordability",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque ratione quaerat facere, ex culpa quasi ipsam dolorem similique quae ipsa temporibus voluptatum. Obcaecati, cum? Sapiente consectetur numquam cum natus!",
        icon:icon3,
        delay:1.1
        }   
    ])


  return (


    <>

    <section className='bg-gray-100 font-poppins py-8'>
        <div className="continer mx-auto py-14">
            <motion.h1 variants={fadeup(0.2)} initial="hidden" whileInView="show" className='text-3xl font-bold text-center pb-10'>Service</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    serviceData.map((item)=>(
                         <UpdateFollower mouseOptions={{backgroundColor:"white" , zIndex:9999 , rotate:720 , followSpeed:0.5 , scale:5, mixBlendMode:'darken' , backgroundElement:(
                        <motion.div>
                            <img src={item.icon} alt="" />
                        </motion.div>
                    )}}>
                        <motion.div variants={fadeup(item.delay)} initial="hidden" whileInView="show" key={item.id} className='flex flex-col justify-center items-center p-5 shadow-lg mx-auto w-[300px] rounded-xl bg-white'>
                            <img className='w-[100px] mb-4' src={item.icon} alt="" />
                            <div className='space-y-2 text-center'>
                                <h1 className='text-2xl font-bold'>{item.title}</h1>
                                <p className='text-center text-sm text-black/75'>{item.desc}</p>
                            </div>
                        </motion.div>
                    </UpdateFollower>
                    ))
                }
            </div>
        </div>
    </section>

    </>
  )
}

export default Service