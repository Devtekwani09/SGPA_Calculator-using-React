import React from 'react'
import { Link, } from 'react-router-dom'


const Ai = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center w-[100vw] h-[90vh]'>

        <div className='bg-[#B3B4Bd] h-3 w-[60vw] mb-10 rounded-md mt-10'>
        </div>
        
        <div className='flex w-[60vw] bg-[#0A21C0] flex-row gap-3 flex-wrap justify-evenly text-center mb-10'>
            <div className='w-[100vw] text-center'>
            <h1 className='text-2xl text-white mt-2'>Choose Semester</h1>
            </div>
            
            <Link to="/ai/first">
            <div className="w-[56vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44]  ">
                First Year
            </div>
            </Link>

            <Link to="/ai/third">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44] ">
                3rd
            </div>
            </Link>
            <Link to="/ai/fourth">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44] ">
                4th
            </div>
            </Link>
            <Link to="/ai/fifth">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44] ">
                5th
            </div>
            </Link>
            <Link to="/ai/sixth">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44] ">
                6th
            </div>
            </Link>
            <Link to="#">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44] ">
                7th
            </div>
            </Link>
            <Link to="#">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2  bg-[#09154d] hover:bg-[#050A44] ">
                8th
            </div>
            </Link>
            
            
        </div>

        <div className='bg-[#B3B4Bd] h-3 w-[60vw] mb-10 rounded-md'>
        </div>
    </div>
    </div>

  )
}

export default Ai