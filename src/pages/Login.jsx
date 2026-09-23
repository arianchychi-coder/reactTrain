import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [useData, setUserData] = useState({
    email:"",
    password:""
  })

  const handleLogin = (e)=>{
    setUserData({
      ...useData,
      [e.target.name] : e.target.value
    })
  }


  async function Login(e) {
    e.preventDefault()

    const {email,password} = useData


    if (!email || !password) {
      alert("Please fiel all the gap")
      return
    }


    try {
      const response = await fetch("http://localhost:5500/login",{
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({email,password})
      })

      const data = await response.json()

      console.log("LOGIN DATA:", data);

      if (!response.ok) {
        alert(data.message)
        return
      }
      else{
        alert(data.message)
        localStorage.setItem("accessToken",data.tokens.accessToken)
        localStorage.setItem("userId",data.id)
        setTimeout(() => {
          navigate("/")
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
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        <form onSubmit={Login} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={useData.email}
              onChange={handleLogin}
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={useData.password}
              onChange={handleLogin}
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;