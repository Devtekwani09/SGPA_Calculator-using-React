import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-black'>

        
        <div className='flex w-[60vw] bg-slate-300 flex-row gap-3 flex-wrap justify-evenly'>
            <div className='w-[100vw]'>
            <h1>Choose Your Branch</h1>
            </div>
            
            <Link to="/ai">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                AI
            </div>
            </Link>

            <Link to="/cs">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                CS
            </div>
            </Link>
            
            
        </div>
    </div>
    </div>
  )
}

export default Home