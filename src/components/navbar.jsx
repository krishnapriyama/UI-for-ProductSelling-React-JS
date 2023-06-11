// Hooks
import { useState } from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Public Images
import Logo from '../../public/navImages/icon.png'
import Profilepic from '../../public/navImages/profilepic.png'

const Navbar = () => {
  const [toggleButton, settoggleButton] = useState(false)

  const toggleMobileMenu = () => {
    settoggleButton(!toggleButton)
  }
  return (
    <>
      <div className="flex justify-center">
        <nav className="w-full mt-9">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-evenly h-full">
              {/* Icon on the left */}
              <div className="flex-shrink-0 flex items-center">
                <img className="h-14 w-9" src={Logo} alt="Logo" />
                <h1 className="text-xl font-black leading-9 text-[#677DA8] text-[29.18px] ml-2">
                  BIZPUSH
                </h1>
              </div>
              
              <div className="flex">
                {/* Menu button for small screens */}
                <button
                  className="block md:hidden ml-2 p-1 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => toggleMobileMenu()}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Links in the center */}
                <div className=" w-full mt-2  justify-center">
                  <div className="hidden md:flex  ">
                    <a
                      href="#"
                      className="text-[#4D4D4D]  px-3 py-2 rounded-md text-[18.5123px] font-medium font-gilroy-medium leading-5"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-[#4D4D4D]  px-3 py-2 rounded-md text-[18.5123px] font-medium font-gilroy-medium leading-5"
                    >
                      Gallery
                    </a>
                    <a
                      href="#"
                      className="text-[#4D4D4D]  px-3 py-2 rounded-md text-[18.5123px] font-medium font-gilroy-medium leading-5"
                    >
                      Shop
                    </a>
                    <a
                      href="#"
                      className="text-[#4D4D4D]  px-3 py-2 rounded-md text-[18.5123px] font-medium font-gilroy-medium leading-5"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              {/* Right-end icons */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Search icon */}
                  <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="p-1 rounded-full text-[#4D4D4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    />
                  </button>

                  {/* Cart icon */}
                  <div className="relative">
                    <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="p-1 rounded-full text-[#4D4D4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      />
                    </button>
                    <span className="ml-3 absolute top-0 left-7 px-1 py-0.5 mt-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                      0
                    </span>
                  </div>

                  {/* Profile picture */}
                  <div className="ml-3 relative">
                    <div>
                      <button className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white cursor-auto">
                        <img
                          className="h-[47px] w-[47px] rounded-full ml-2"
                          src={Profilepic}
                          alt="Profile Picture"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
