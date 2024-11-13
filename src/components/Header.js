import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

   const [toggleMenu,setToggle] = useState(false);


    return <header className="flex justify-between px-2 py-2 header-bg">

        <a className="font-bold" href="#">GooseWebApps</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
         <li><a href="#">Home</a></li>
         <li><a href="#">Resume</a></li>
         <li><a href="#">Projects</a></li>
         <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden">
        <ul className="flex flex-col text-white menu-md-header">
         <li><a href="#">Home</a></li>
         <li><a href="#">Resume</a></li>
         <li><a href="#">Projects</a></li>
         <li><a href="#">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() => setToggle(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
}