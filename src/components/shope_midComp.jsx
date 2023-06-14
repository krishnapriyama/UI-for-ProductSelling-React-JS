import NavMid1 from './navMid1'
import NavMid2 from './navMid2'
import Shopcard from './shopcard'

const shope_midComp = () => {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="w-[100%] h-full flex justify-center ">
        <div className="w-[90%] h-full mt-12">
          <div className="w-full bg-[#f2f4f7]">
            <NavMid1></NavMid1>
          </div>
          <div className="w-full h-full">
            <NavMid2></NavMid2>
          </div>
          <div className="w-full bg-white">
            <Shopcard></Shopcard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default shope_midComp
