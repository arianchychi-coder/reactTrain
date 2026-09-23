import React, { useState } from 'react'
import Blog1 from "../../assets/blog/blog1.jpg"
import Blog2 from "../../assets/blog/blog2.jpg"
import Blog3 from "../../assets/blog/blog3.jpg"
import Blog4 from "../../assets/blog/blog4.jpg"
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'motion/react'
import { fadeup } from '../Service/Service'

function Blog() {


    const [blogData, setBlogData] = useState([
        {
            id:1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis maiores perspiciatis esse quod distinctio tempore? Vitae asperiores dolor, dignissimos corrupti, laboriosam ea iure quis tempora repudiandae id animi rem.",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aliquid expedita beatae inventore. Mollitia dicta numquam amet facilis voluptate, omnis dolor ducimus in architecto. Amet possimus ipsum dolor officia magnam.",
            link:"#",
            img:Blog1
        },
        {
      id:2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum provident facere voluptatibus vitae, numquam accusamus, necessitatibus veritatis esse recusandae quibusdam blanditiis iusto porro voluptate aperiam alias quasi aut rem.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aliquid expedita beatae inventore. Mollitia dicta numquam amet facilis voluptate, omnis dolor ducimus in architecto. Amet possimus ipsum dolor officia magnam.",
      link: "#",
      img: Blog2
    },
     {
      id:3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum provident facere voluptatibus vitae, numquam accusamus, necessitatibus veritatis esse recusandae quibusdam blanditiis iusto porro voluptate aperiam alias quasi aut rem.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aliquid expedita beatae inventore. Mollitia dicta numquam amet facilis voluptate, omnis dolor ducimus in architecto. Amet possimus ipsum dolor officia magnam.",
      link: "#",
      img: Blog3
    },
     {
      id:4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum provident facere voluptatibus vitae, numquam accusamus, necessitatibus veritatis esse recusandae quibusdam blanditiis iusto porro voluptate aperiam alias quasi aut rem.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aliquid expedita beatae inventore. Mollitia dicta numquam amet facilis voluptate, omnis dolor ducimus in architecto. Amet possimus ipsum dolor officia magnam.",
      link: "#",
      img: Blog4
    },
    ])

  return (
    <>

    <section className='bg-gray-50 pb-20'>
        <div className='container mx-auto'>
            <motion.h1 variants={fadeup(0.2)} initial="hidden" whileInView="show" className='text-center text-3xl font-bold font-poppins p-8'>Blog</motion.h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-7'>
            {
                blogData.map((blogs)=>(
                    <UpdateFollower mouseOptions={{
                        backgroundColor:"black",
                        zIndex:999,
                        text:"read",
                        textFontSize:"3px",
                        followSpeed:1.5,
                        scale:5
                    }}>
                         <div className='flex flex-col items-center p-5 justify-center mx-auto shadow-lg w-[400px] rounded-md hover:translate-y-2 duration-300 gap-6'>
                        <img src={blogs.img} alt="" />
                        <div className='space-y-2'>
                            <h2 className='text-lg font-bold line-clamp-2'>{blogs.title}</h2>
                            <p className='line-clamp-2'>{blogs.desc}</p>
                        </div>
                    </div>
                    </UpdateFollower>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default Blog