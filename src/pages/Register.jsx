
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Register() {

    const navigate = useNavigate()



    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })


    const handleSubmit = (e)=>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }


    async function Register(e) {
        e.preventDefault()

        const {name,email,password,confirmpassword} = userData

        if (!name || !email || !password || !confirmpassword) {
            alert("Please enter all field")
            return
        }


        try {
            const response = await fetch("http://localhost:5500/register",{
                method:"POST",
                headers: {"Content-Type" : "application/json"},
                body:JSON.stringify({name,email,password,confirmpassword})
            })

            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                return
            }
            else{
                alert(data.message)
                localStorage.setItem("userName",name)
                localStorage.setItem("userEmail",email)
                localStorage.setItem("userPassword",password)
                localStorage.setItem("userConfirmPassword",confirmpassword)
                setTimeout(() => {
                    navigate("/login")
                }, 1500);
            }
        } catch (error) {
            console.log("Error: ",error)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Create your account to get started
        </p>

        <form onSubmit={Register} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={userData.name}
              onChange={handleSubmit}
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleSubmit}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            name="password"
              type="password"
              value={userData.password}
              onChange={handleSubmit}
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmpassword"
              value={userData.confirmpassword}
              onChange={handleSubmit}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Register;
