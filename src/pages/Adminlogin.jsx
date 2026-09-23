import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Adminlogin() {

const navigate = useNavigate()

    const [adminuser, setAdminUser] = useState({
        email: "",
        password: ""
    })


    const hadleAdmin = (e)=>{
        setAdminUser({
            ...adminuser,
            [e.target.name] : e.target.value
        })
    }



    async function admiLogin(e) {
        e.preventDefault()


        const {email,password} = adminuser


        if (!email || !password) {
            alert("Please enter all field")
            return
        }


        try {
            const response = await fetch("http://localhost:5500/adminlogin",{
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({email,password})
            })


            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                return
            }
            else{
                alert(data.message)
                localStorage.setItem("accessToken",data.tokens.accessToken)
                navigate("/adminDashboard")
            }
        } catch (error) {
            console.log("Error: ",error)
        }
    }





  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <div className="text-center mb-8">

                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white flex items-center justify-center">
                        <span className="text-2xl font-bold text-black">
                            A
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-white">
                        Admin Panel
                    </h1>

                    <p className="text-zinc-500 mt-2">
                        Sign in to continue
                    </p>

                </div>

                 <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 shadow-xl">

                    <form onSubmit={admiLogin} className="space-y-5">

                        <div>

                            <label className="block text-sm font-medium text-zinc-300 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={adminuser.email}
                                onChange={hadleAdmin}
                                placeholder="admin@example.com"
                                required
                                className="w-full h-12 px-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-white"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-zinc-300 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={adminuser.password}
                                onChange={hadleAdmin}
                                placeholder="••••••••"
                                required
                                className="w-full h-12 px-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-white"
                            />

                        </div>


                        <div className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4"
                            />

                            <label
                                htmlFor="remember"
                                className="text-sm text-zinc-400"
                            >
                                Remember me
                            </label>

                        </div>


                        <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
                        >
                            Sign In
                        </button>

                    </form>

                </div>


                <p className="text-center text-xs text-zinc-600 mt-6">
                    Admin access only
                </p>

            </div>

        </div>
  )
}

export default Adminlogin