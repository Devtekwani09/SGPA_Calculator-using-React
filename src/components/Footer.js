import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    // <div className="flex flex-col justify-center bg-[#050a44] h-[10vh] text-cyan-300 text-xl font-bold items-center">
    //     <h1>Designed and Developed by - </h1> 
    //     <h1> Dev Tekwani </h1>
    // </div>

    <footer className="footer mt-auto py-3 bg-[#050a44]">
      <div className="container flex justify-evenly items-center text-cyan-300">
        <span className="text-muted">Designed and Developed by - Dev Tekwani</span>
        <ul className='flex gap-x-4'>
        <li>
          <a href="https://linkedin.com/in/dev-tekwani-3b5b74220" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
          <li>
            <a href="https://github.com/Devtekwani09" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/dev_09" target="_blank" rel="noopener noreferrer">
              <SiLinktree />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  )
}

export default Footer