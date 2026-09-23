import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

function BanerText() {
  return (
    <>
    <section className='py-12 text-center font-varela'>
        <div className="continer mx-auto ml-20 mr-20">
            <div className='bg-gradient-to-t from-primery text-white to-primery/70 rounded-3xl duration-500 hover:shadow-2xl hover:scale-105 p-8'>
            <UpdateFollower mouseOptions={{backgroundColor:"black" , zIndex:9999, followSpeed:0.5 , mixBlendMode:"screen" , scale:10}}>
                <p className='font-bold leading-normal mx-auto max-w-[700px] text-4xl'>Headhones With Good Quality And Affrodable Price</p>
            </UpdateFollower>
            </div>
        </div>
    </section>
    </>
  )
}

export default BanerText