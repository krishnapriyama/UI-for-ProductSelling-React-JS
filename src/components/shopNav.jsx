import Hamburg from '../../public/shopPage/hamburg.png'
import Ham from '../../public/shopPage/ham1.png'
import Search from '../../public/shopPage/search.png'
import Notification from '../../public/shopPage/notification.png'
import Profile from '../../public/shopPage/profile.png'
import ProfileBtn from '../../public/shopPage/ProfileButton.png'
import Close from '../../public/shopPage/close.png'

const shopNav = () => {
  return (
    <nav className="bg-[#F7F8FA]  justify-between w-full items-center">
      <div className="sm:px-6 lg:px-8 gap-6">
        <div className="flex justify-between h-24 ">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-auto w-2/12">
            <div className="gap-5 inline-flex items-center">
              <img className="block w-auto" src={Hamburg} alt="Logo" />
              <span className="font-roboto font-bold text-[18px] text-[#4D5E80]">
                Constructor
              </span>
            </div>
          </div>

          {/* Menus */}
          <div className="items-center gap-4 md2:gap-8 md:hidden lg:flex sm:hidden hidden">
            <a
              href="#"
              className=" py-2 rounded-md text-sm font-medium text-[#7D8FB3]"
            >
              Dashboard
            </a>
            <a
              href="#"
              className=" py-2 rounded-md text-sm font-medium text-[#7D8FB3] truncate"
            >
              About us
            </a>
            <a
              href="#"
              className="text-[#7D8FB3]  py-2 rounded-md text-sm font-medium"
            >
              News
            </a>
            <a
              href="#"
              className="text-[#7D8FB3]  py-2 rounded-md text-sm font-medium truncate"
            >
              User Policy
            </a>
            <a
              href="#"
              className="text-[#7D8FB3]  py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <img src={Ham} className="lg:block sm2:hidden"></img>
          </div>
          <div className="flex gap-4">
            {/* Search bar */}
            <div className="flex items-center ">
              <div className=" w-[18rem]  h-12 rounded-full bg-white md2:flex items-center hidden  sm:hidden md:hidden ">
                <img src={Search} alt="Search" className="pl-4" />
                <input
                  type="text"
                  placeholder="Search Transactions and Documents"
                  className=" md:block  text-gray-400 text-sm w-full px-2 py-1 focus:outline-none lg:block"
                />
              </div>
              <div className="md2:hidden hidden mx-3 sm:block">
                <img
                  src={Search}
                  alt="Search"
                  className="p-4 rounded-full bg-white"
                />
              </div>
            </div>

            {/* Profile picture icon */}
            <div className="flex">
              <div className="flex flex-row gap-4  items-center">
                <img className="h-6 w-6 sm:block hidden" src={Profile} />
                <img className="block w-auto  sm:hidden" src={ProfileBtn} />
                <h1 className="text-[#6B7A99] font-bold truncate sm:block hidden">
                  Clayton Santos
                </h1>
                <span className="inline-flex">
                  {' '}
                  <img className="h-12 w-12 sm:block hidden" src={Notification} />
                  <img className="h-12 w-12 sm:block hidden" src={Close} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default shopNav
