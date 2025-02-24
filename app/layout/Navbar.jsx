import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const { pathname } = useLocation()
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const naviLinks = [
    {
      id: 1,
      name: 'Home',
      route: '/',
    },
    {
      id: 2,
      name: 'Jobs',
      route: '/jobs',
    },
    {
      id: 3,
      name: 'Service',
      route: '/service',
    }
  ]

  return (
    <div>
      <nav className={`z-50 w-full lg:px-20 px-3 flex justify-between py-3 font-roboto font-[200]`}>
        <div className='flex items-center gap-20'>
          <h1 className='text-3xl'>
            EasyHire
          </h1>
          <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
            {
              naviLinks.map((nav) => (
                <Link className={`${pathname === nav.route && 'border-b-2 border-[#307bc4] text-[#307bc4]'} hover:text-[#307bc4]`} key={nav.id} to={nav.route}>
                  <li>{nav.name}</li>
                </Link>

              ))
            }
          </ul>
        </div>
        <div className='flex items-center gap-5 text-[19px]'>
          <Link to={"/login"}>
            <button className='btn w-32 bg-[#307bc4] border-0 text-white font-rubik'>Login</button>
          </Link>
          <FaBars onClick={handleToggle} className='lg:hidden' />
        </div>
        <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-[300] translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
          {
            naviLinks.map((nav) => (
              <Link key={nav.id} to={nav.route}>
                <li>{nav.name}</li>
              </Link>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar