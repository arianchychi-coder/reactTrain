import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useParams} from "react-router-dom"

function Adminpage() {

const navigate = useNavigate()


const [showModal, setShowModal] = useState(false)



const openModal = (user)=>{
  setEditUser({
    id:user.id,
    name:user.name,
    email:user.email
  })

  setShowModal(true)
}


const closeModal = () =>{
  setShowModal(false)

  setEditUser({
    id:"",
    name:"",
    email:""
  })
}


    const [admin, setAdmin] = useState([])
    const [edituser, setEditUser] = useState({
      id:"",
      name:"",
      email:""
    })


    const habdleEdit = (e)=>{
      setEditUser({
        ...edituser,
        [e.target.name]: e.target.value
      })
    }


    useEffect(()=>{
        fetch("http://localhost:5500/getuser")
        .then(res=>res.json())
        .then(data =>{
            setAdmin(data)
        })
    },[])




    useEffect(()=>{
      async function adminrole() {
        const token = localStorage.getItem("accessToken")

        if (!token) {
          navigate("/")
          return
        }


        try {
          const response = await fetch("http://localhost:5500/api/admin",{
            headers : { Authorization : `Bearer ${token}` }
          })

        //  const data = await response.json() //

          if (!response.ok) {
            alert("Only admin can see this page")
            navigate("/")
            return
          }
        } catch (error) {
          console.error("Error: ",error)
        }
      }


      adminrole()
    },[])



    async function putAdmin(id) {
      const token = localStorage.getItem("accessToken")

      const {name,email} = edituser


      if(!name || !email){
        alert("Please enter field")
        return
      }

      

      try {
        const response = await fetch(`http://localhost:5500/api/admin/${id}`,{
          method:"PUT",
          headers:{"Content-Type" : "application/json","Authorization" : `Bearer ${token}`},
          body: JSON.stringify({name,email})
        })


        const data = await response.json()

        if (!response.ok) {
          alert(data.message || "Err")
          return
        }

        else{
          alert(data.message)
          closeModal()
        }
      } catch (error) {
        console.log("Error: ",error)
      }
    }




    async function deleteAdmin(id) {
      const token = localStorage.getItem("accessToken")

      if (!confirm("Are you sure to remove this page?")) {
        return
      }

      try {
        const response = await fetch(`http://localhost:5500/api/admin/${id}`,{
          method:"DELETE",
          headers:{"Authorization" : `Bearer ${token}`}
        })

        if (!response.ok) {
          alert("err")
          return
        }

        console.log("Response: ",response.status)
      } catch (error) {
        console.error("Error: ",error)
      }
    }


  return (
    <section className='bg-black h-[100vh]  text-white'>
        <div className="container mx-auto flex justify-center items-center ">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>


    {
        admin.map((user)=>(
            <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
                <td>
                  <button onClick={()=>openModal(user)}>Edit</button>
                </td>
                <td>
                  <button onClick={()=>deleteAdmin(user.id)}>Delete</button>
                </td>
            </tr>
        ))
    }

  </tbody>
</table>
        </div>



        {showModal && (
           <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

        <div className="bg-white text-black p-6 rounded-lg w-[400px]">

          <h2 className="text-2xl font-bold mb-5">
            Edit User
          </h2>

          <input
            type="text"
            name="name"
            value={edituser.name}
            onChange={habdleEdit}
            className="border p-2 w-full mb-3"
          />

          <input
            type="email"
            name="email"
            value={edituser.email}
            onChange={habdleEdit}
            className="border p-2 w-full mb-5"
          />

          <div className="flex justify-end gap-2">

            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              onClick={() => putAdmin(edituser.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

          </div>

        </div>

      </div>
        )}
    </section>
  )
}

export default Adminpage