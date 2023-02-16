import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import Button from './Cta.js';
import {Link} from 'react-router-dom'

const Navbar = () => {
  // navigation bar for mobile
  const [open, setOpen] = useState({ styleChange: false, btnChange: false })
  // setting cart postion based on window size
  const [cartPos, setCartPos] = useState(window.innerWidth)
// toogling navigation bar
  const toggleNavMd = () => {
    setOpen({
      styleChange: true,
      btnChange: !open.btnChange
    });

    setTimeout(() => {
      setOpen(prevVal => ({
        ...prevVal,
        styleChange: false
      }));
    }, 100);
  }

  window.addEventListener('resize', () => {
    setCartPos(window.innerWidth);
  })

  useEffect(()=>{
    if(window.innerWidth >= 1024){
      setOpen(prevVal=>({
        ...prevVal,
        btnChange : true
      }))
    }
  },[])

  return (
    <nav className="font-[sans] flex flex-col py-0 lg:flex-row justify-around py-4">

      <div className="py-2 px-8 items-center w-full flex justify-between lg:w-fit mr-16">
        <div>
          LOGO
        </div>
        <div className="flex gap-x-2 items-center">
          {cartPos < 1024 && <RiShoppingBasketFill className="text-2xl" />}
          <button onClick={toggleNavMd} className={`p-2 text-xl outline-none rounded-full ${open.styleChange && 'bg-200'} lg:hidden`}>{open.btnChange ? <GrClose /> : <GiHamburgerMenu />}</button>
        </div>
      </div>

      <div className={`flex flex-col px-6 text-medium gap-x-8 text-base relative ${open.btnChange ? 'block' : 'hidden'} lg:flex-row`}>
        <a href="./" className="nav-link">Home</a>
        <a href="#"  className="nav-link">Menu</a>
        <a href="#"  className="nav-link">Service</a>
        <a href="#"  className="nav-link">contact</a>
      </div>

      <div className={`flex px-8 justify-between items-center relative ${open.btnChange ? 'block' : 'hidden'} lg:justify-end gap-x-4`}>
        <button className='text-2xl border p-0.5 outline-none rounded-full'><AiOutlineSearch /></button>
        {cartPos >= 1024 && <RiShoppingBasketFill className="text-2xl" />}
        <Button data="Sign In &rarr;" style="relative overflow-hidden bg-custom-red text-white px-4 py-2 rounded lg:rounded-3xl" />
      </div>


    </nav>
  )
}

export default Navbar;
