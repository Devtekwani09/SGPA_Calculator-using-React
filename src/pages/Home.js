import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='flex flex-col items-center w-[100vw] h-full mt-10'>

        <div className='bg-[#2C2E3A] h-fit w-[60vw] mb-10 rounded-md p-4 text-white'>
            <p>
            We're excited to introduce our new SGPA (Semester Grade Point Average) calculator tailored for students in the fields of Computer Sciences and Cs related feilds like AI / AI-DS / DS .This tool streamlines the process of calculating SGPA, providing students with a quick and accurate assessment of their academic performance. <br/><br/>
            While currently available exclusively for Computer Sciences and related branches like AI / AI-DS / DS, we're committed to expanding its reach to include more branches in the near future. <br/> <br/>
            Stay tuned for updates as we work to enhance accessibility and utility for all students.
            </p>
        </div>

        <div className='bg-[#B3B4Bd] h-3 w-[60vw] mb-10 rounded-md'>
        </div>
        
        <div className='flex w-[60vw] bg-[#0A21C0]  flex-row gap-3 flex-wrap justify-evenly rounded-md mb-10'>
            <div className='w-[100vw] '>
            <h1 className="text-center text-xl text-white">Choose Branch</h1>
            </div>
            
            <Link to="/ai">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-[#09154d] hover:bg-[#050A44] text-center">
                CS / AI / AI-DS / DS
            </div>
            </Link>

            {/* <Link to="/cs">
            <div className="w-[25vw] h-10  text-white rounded-md m-4 p-2 bg-blue-400 hover:bg-blue-500">
                CS
            </div>
            </Link> */}
            
            
        </div>

        <div className='bg-[#B3B4Bd] h-3 w-[60vw] mb-20 rounded-md'>
        </div>
    </div>
    </div>
  )
}

export default Home