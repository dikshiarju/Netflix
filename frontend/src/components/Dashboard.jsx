import React from 'react'
import bgImage from '../assets/image.jpg'

const Dashboard = () => {
  return (
  <div className="h-screen w-screen bg-black relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content on top of background */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          Welcome to Dashboard
        </h1>
      </div>
    </div>


)
}

export default Dashboard