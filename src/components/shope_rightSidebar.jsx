import blueGraph from '../../public/Rightsidebar/bluegraph.jpg'
import Orangegraph from '../../public/Rightsidebar/orangegraph.png'
import Multi from '../../public/Rightsidebar/multi.png'

const shope_rightSidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center relative h-full w-full border-l-2">
        <div className="flex flex-col gap-8 items-center h-full w-full p-7">
          {/* Inner Contents */}
          <div className="bg-transparent w-full h-52 flex rounded-lg border justify-center flex-col">
            <div className="w-full h-3/4 flex border-b-1 border-b-2 items-center">
              <div className="grid grid-cols-2 gap-4 justify-center items-center w-full">
                <div className="flex justify-center items-center w-full">
                  <h1 className="text-center text-[#6B7A99] font-bold">
                    Total Sales
                    <span className="block mt-5 text-2xl">$281.90</span>
                  </h1>
                </div>
                <div className="flex justify-center items-center w-full">
                  <img src={blueGraph} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2  w-full justify-center items-center mt-3">
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                6 total orders
              </div>
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                View report
              </div>{' '}
            </div>
          </div>

          <div className="bg-transparent w-full h-52 flex rounded-lg border justify-center flex-col">
            <div className="w-full h-3/4 flex border-b-1 border-b-2 items-center">
              <div className="grid grid-cols-2 gap-4 justify-center items-center w-full">
                <div className="flex justify-center items-center w-full">
                  <h1 className="text-center text-[#6B7A99] font-bold">
                    Total Sessions
                    <span className="block mt-5 text-2xl">456</span>
                  </h1>
                </div>
                <div className="flex justify-center items-center w-full">
                  <img src={Orangegraph} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3  w-full justify-center items-center mt-3">
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                Live
              </div>
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                4 visitors
              </div>{' '}
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                See Live View
              </div>{' '}
            </div>
          </div>

          <div className="bg-transparent w-full h-52 flex rounded-lg border justify-center flex-col">
            <div className="w-full h-3/4 flex border-b-1 border-b-2 items-center">
              <div className="grid grid-cols-2 gap-4 justify-center items-center w-full">
                <div className="flex justify-center items-center w-full">
                  <h1 className="text-center text-[#6B7A99] font-bold">
                    Customer rate
                    <span className="block mt-5 text-2xl">5.43%</span>
                  </h1>
                </div>
                <div className="flex justify-center items-center w-full">
                  <img src={Multi} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2  w-full justify-center items-center mt-3">
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                First Time
              </div>
              <div className="text-center w-full text-[#6B7A99] text-sm font-bold">
                Returning
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default shope_rightSidebar
