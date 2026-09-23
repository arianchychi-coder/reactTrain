import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

function Test() {
  return (
    <>
    <section >
        <div className="container py-3 mx-auto flex justify-center items-center">
            <UpdateFollower
  mouseOptions={{
    backgroundColor: "black",
    zIndex: 99999,
    followSpeed: 0.5,
    mixBlendMode: "difference",
    scale: 6,
  }}
>
  <div>
    <h2 className="text-red-400 text-center mx-auto flex justify-center items-center text-4xl w-[20px]">
    Blog
  </h2>
  </div>
</UpdateFollower>
        </div>
    </section>
    </>
  )
}

export default Test