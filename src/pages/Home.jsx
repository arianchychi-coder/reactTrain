import { useState } from 'react'

import { UpdateFollower } from 'react-mouse-follower'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Service from '../components/Service/Service'
import Baner from '../components/Baner/Baner'
import BanerText from '../components/Baner/BanerText'
import Test from '../components/Baner/Test'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

function Home() {

  const navigate = useNavigate()
 
  useEffect(()=>{
    async function checkToken() {
      const token = localStorage.getItem("accessToken")

      if (!token) {
        alert("Token isnt find")
        navigate("/login")
        return
      }


      try {
        const response = await fetch("http://localhost:5500/api/protected",{
          headers:{"Authorization" : "Bearer " + token}
        })



        if (response.status === 403 || response.status===401) {
          localStorage.removeItem("accessToken")
          alert("Token was invalid or expierd . plz login again")
          navigate("/login")
          return
        }


        if (!response.ok) {
          alert("Unexpected server response")
          return
        }


        const data = await response.json()
        console.log("Protected data: ",data)
      } catch (error) {
        console.error("Error: ",error)
        alert("Err in server")
      }
    }

    checkToken()
  },[])

  return (
    <main className='overflow-x-hidden'>

      <UpdateFollower mouseOptions={{backgroundColor:"white" , followSpeed:1.5 , zIndex:999}}>
              <Navbar/>
              <Hero/>
      </UpdateFollower>


      <UpdateFollower mouseOptions={{backgroundColor:"black",zIndex:999,followSpeed:1.5}}>
        <Service/>
        <Baner/>
        <BanerText/>
        <Test/>
        <Blog/>
        <Footer/>
      </UpdateFollower>
    </main>
  )
}

export default Home
