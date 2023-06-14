import ShopNav from '../../components/shopNav'
import Shope_leftSidebar from '../../components/shope_leftSidebar'
import Shope_rightSidebar from '../../components/shope_rightSidebar'
import Shope_midComp from '../../components/shope_midComp'

const shoppage = () => {
  return (
    <>
      <div className="bg-[#F7F8FA] h-full inline">
        <ShopNav></ShopNav>
        <div className=" grid-cols-3 flex">
          <div className="hidden md:w-24 md2:block col-span-1  bg-[#F7F8FA]  border-r-2">
            <Shope_leftSidebar></Shope_leftSidebar>
          </div>
          <div className="lg:block md:w-full col-span-1  bg-[#F7F8FA]">
            <div className="">
              <Shope_midComp></Shope_midComp>
            </div>
          </div>
          <div className="hidden w-1/4 md2:block col-span-1  bg-[#F7F8FA]">
            <div className="hidden lg:block col-span-1 w-full h-full">
              <Shope_rightSidebar></Shope_rightSidebar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default shoppage
