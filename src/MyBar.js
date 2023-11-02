import {useState} from 'react'
import Data from './Data';
import'./Data.css'
function MyBar() {     
  const [open, setOpen] = useState(false);
  
  return (
    
    <div class="navbar bg-info-content">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a  href="#landing">Home</a></li>
        <li><a  href="#about">About</a></li>
        <li><a  href="#education">Education</a></li>
        <li><a  href="#skills">Skills</a></li>
      </ul>
    </div>
  </div>
  
  <div class="navbar-center">
    <a class=" normal-case text-xl">Portfolio</a>
  </div>
  
</div>

  )
}

export default MyBar 
