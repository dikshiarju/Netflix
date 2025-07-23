import React, { useState } from 'react'
import bgImage from '../assets/image.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpass] = useState('')
    const[errorMsg,seterrorMsg]=useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate()


    function handlelogin(evt) {

        evt.preventDefault(); // prevents page reload
         let valid = true;

           // Reset previous error messages
  setEmailError('');
  setPasswordError('');
  seterrorMsg('');

   if (!email.trim()) {
    setEmailError('Email is required');
    valid = false;
  }

    if (!password.trim()) {
    setPasswordError('Password is required');
    valid = false;
  }

    if (!valid) return;

        axios
            .post("http://localhost:5000/login", { email, password })
            .then((res) => {
                if (res.data === true) {
                     seterrorMsg('')
                    navigate("/dashboard")
                } else {
                  seterrorMsg('Invalid email or password')
                }
            })
            .catch((error) => {
                seterrorMsg('Server error. Please try again later.')
                console.log("Error during login:", error.message)
            });
    }

    return (
        <div className="h-screen w-screen bg-black relative">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${bgImage})` }}></div>

            {/* Login form container */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md text-white">
                    <h2 className="text-3xl font-bold mb-6">Sign In</h2>
                    {/* <form className="flex flex-col gap-4" action="http://localhost:5000/login" method='post'> */}
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            value={email}
                            placeholder="Email or phone number"
                            className="bg-gray-800 p-3 rounded text-sm outline-none focus:ring-2 focus:ring-red-600"
                            required
                            onChange={e => setemail(e.target.value)}
                        />
                         {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            className="bg-gray-800 p-3 rounded text-sm outline-none focus:ring-2 focus:ring-red-600"
                            required
                            onChange={e => setpass(e.target.value)}
                        />
                         {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 transition-colors p-3 rounded font-semibold"
                            onClick={handlelogin}
                        >
                            Sign In
                        </button>

                        <div className="flex justify-between text-sm text-gray-400">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-red-600" />
                                Remember me
                            </label>
                            <span className="cursor-pointer hover:underline">Need help?</span>
                        </div>
                        {/* </form> */}
                        {errorMsg && (
  <div className="mt-2 text-red-500 text-sm">
    {errorMsg}
  </div>
)}
                    </div>

                    <div className="mt-6 text-sm text-gray-400">
                        New to Netflix? <span className="text-white hover:underline cursor-pointer">Sign up now</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login