
import React from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"

function Editprofile() {

    const name = localStorage.getItem("userName")
    const email = localStorage.getItem("userEmail")
    const password = localStorage.getItem("password")
    const confirmpassword = localStorage.getItem("confirmpassword")


    const {id} = useParams()
    console.log("ID:", id);



    const [putuser, setPutUser] = useState({
        name:name || "",
        email:email || "",
        password:password || "",
        confirmpassword: confirmpassword ||"",
        image:null
    })


    const handlePut = (e)=>{
        setPutUser({
            ...putuser,
            [e.target.name] : e.target.value
        })
    }



    async function EditForm(e) {
         e.preventDefault();

        const token = localStorage.getItem("accessToken")


        const formData = new FormData();

        formData.append("name", putuser.name);
        formData.append("email", putuser.email);
        formData.append("password", putuser.password);
        formData.append("confirmpassword", putuser.confirmpassword);

        if (putuser.image) {
            formData.append("image", putuser.image);
        }


        try {
            const response = await fetch(`http://localhost:5500/api/putheadphone/${id}`,{
                method:"PUT",
                headers:{"Authorization" : `Bearer ${token}`},
                body: formData
            })

            const data = await response.json()


            if (!response.ok) {
                alert(data.message || "Err")
                return
            }
            else{
                alert(data.message)
            }
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    async function DeleteForm() {
      const token = localStorage.getItem("accessToken")


      if (!confirm("Are you sure to remove your account?")) {
        return
      }

      try {
        const response = await fetch(`http://localhost:5500/api/deleteheadphone/${id}`,{
          method:"DELETE",
          headers:{"Authorization" : `Bearer ${token}`}
        })

        const data = await response.json()
        console.log("Reasponse status: ",response.status)

        if (!response.ok) {
          alert(data.message || "Err")
          return
        }
        else{
          localStorage.removeItem("accessToken")
          alert(data.message)
        }
      } catch (error) {
        console.log("Error: ",error)
      }
    }


  return (
    <div className="min-h-screen bg-[#0b0f19] px-4 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="mt-2 text-sm text-gray-400">
            Update your profile information and personal details.
          </p>
        </div>

        {/* Card */}
        <form onSubmit={EditForm}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl">

          {/* Cover */}
          <div className="h-36 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500" />

          {/* Profile */}
          <div className="px-6 pb-8 sm:px-10">

            <div className="-mt-14 flex flex-col grid md:grid-cols-3 gap-5 sm:flex-row sm:items-end">


              {/* Avatar */}
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#111827] bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold shadow-xl">
                JD
              </div>
              

              <div className="pb-2">
                <h2 className="text-xl font-semibold">
                  John Doe
                </h2>

                <p className="text-sm text-gray-400">
                  @johndoe
                </p>
              </div>

              <div>
                <input type="file" name="image" accept="image/*" onChange={(e) =>setPutUser({...putuser,image: e.target.files[0]})}/>
              </div>

            </div>

            {/* Form */}
            <div className="mt-10">

              <h3 className="mb-6 text-lg font-semibold">
                Personal Information
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">



                {/* Username */}
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Username
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] focus-within:border-indigo-500">
                    <span className="flex items-center px-4 text-gray-500">
                      @
                    </span>

                    <input
                      type="text"
                      placeholder="johndoe"
                      value={putuser.name}
                      onChange={handlePut}
                      name="name"
                      className="w-full bg-transparent py-3 pr-4 text-sm outline-none placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={putuser.email}
                    onChange={handlePut}
                    name="email"
                    className="w-full rounded-xl border border-white/10 bg-[#0b0f19] px-4 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="john@example.com"
                    value={putuser.password}
                    onChange={handlePut}
                    name="password"
                    className="w-full rounded-xl border border-white/10 bg-[#0b0f19] px-4 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                  />
                </div>



                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Confirm Password
                  </label>

                  <input
                  type="password"
                    value={putuser.confirmpassword}
                    name="confirmpassword"
                    onChange={handlePut}
                    className="w-full rounded-xl border border-white/10 bg-[#0b0f19] px-4 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                  />
                </div>


              </div>



              {/* Buttons */}
              <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <button className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5">
                  Cancel
                </button>

                <button type="submit" className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold transition hover:bg-indigo-500">
                  Save Changes
                </button>

                <button onClick={DeleteForm} type="submit" className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold transition hover:bg-indigo-500">
                  Delete Acount
                </button>

              </div>

            </div>
          </div>
        </div>
        </form>

      </div>
    </div>
  );
}

export default Editprofile;
