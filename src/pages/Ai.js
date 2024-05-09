import React from 'react'
import { Link, } from 'react-router-dom'


const Ai = () => {
  return (
    <div>
    <div className='flex justify-center items-center'>
    <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-black'>

        
        <div className='flex w-[60vw] bg-slate-300 flex-row gap-3 flex-wrap justify-evenly'>
            <div className='w-[100vw]'>
            <h1>Choose Semester</h1>
            </div>
            
            <Link to="/ai/first">
            <div className="w-[56vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                First Year
            </div>
            </Link>

            <Link to="/ai/third">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                3rd
            </div>
            </Link>
            <Link to="#">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                4th
            </div>
            </Link>
            <Link to="/ai/fifth">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                5th
            </div>
            </Link>
            <Link to="#">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                6th
            </div>
            </Link>
            <Link to="#">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                7th
            </div>
            </Link>
            <Link to="#">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                8th
            </div>
            </Link>
            
            
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Ai