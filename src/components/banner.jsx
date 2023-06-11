// Public Images
import Shoe from '../../public/bannerImages/bannerShoe.png'
import Shadow from '../../public/bannerImages/shadow.png'
import Arrow from '../../public/bannerImages/arrow.png'
import Star from '../../public/bannerImages/star.png'

const banner = () => {
  return (
    <>
      <div className="flex flex-col h-full mt-20 lg:flex-row m-5 p-6">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="w-full font-black text-5xl lg:text-7xl leading-10 uppercase text-[#677DA8] mt-2 mb-4">
              Purchase your shoes now.
            </h1>
            <div className="w-full mt-3 ">
              <p className="font-regular text-md lg:text-xl leading-8 text-[#677DA8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies
                tortor ac.
              </p>
              <div className="w-full h-full mt-12 flex items-center relative">
                <button className="flex flex-row items-start bg-white text-[#677DA8] rounded-md shadow-md gap-2 px-[46.2807px] py-[18.5123px]">
                  Shop Now
                </button>
                <div className="ml-5">
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className="rotate-3 absolute left-24 top-2 mm:hidden md:block"
                  />
                  <div className="bg-transparent w-1/2 md:w-auto h-full absolute left-0 md:left-80 top-20 md:top-32 lg:left-[22rem]">
                    <div className="h-auto flex-row items-center">
                      <h1 className="w-6 h-5 font-bold text-[1.5rem] leading-5 text-blue-500 inline-block">
                        4.3
                      </h1>
                      <div className='inline-block ml-4'>
                      <img
                        src={Star}
                        className="w-5 h-5 inline-block mt-[-0.4rem]"
                        alt="Star"
                      ></img>
                      <img
                        src={Star}
                        className="w-5 h-5 inline-block mt-[-0.4rem]"
                        alt="Star"
                      ></img>
                      <img
                        src={Star}
                        className="w-5 h-5 inline-block mt-[-0.4rem]"
                        alt="Star"
                      ></img>
                      <img
                        src={Star}
                        className="w-5 h-5 inline-block mt-[-0.4rem]"
                        alt="Star"
                      ></img>
                      <img
                        src={Star}
                        className="w-5 h-5 inline-block mt-[-0.4rem]"
                        alt="Star"
                      ></img>
                      </div>
                    </div>
                      <div className='bg-transparent text-[14.81px] md:w-auto text-[#677DA8] justify-center flex w-full h-full'>
                      (11.6k Total Review)
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 sm:mt-44 ">
          <div className="relative">
            <img
              src={Shadow}
              className="w-full h-auto object-cover absolute bottom-0 inset-x-0 "
              alt="Shadow"
              loading="lazy"
            />
            <div className="z-auto">
              <img
                src={Shoe}
                className="w-full h-auto object-cover lg:max-h-full z-10"
                alt="Shoe"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default banner
