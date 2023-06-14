import B1 from '../../public/shopPage/1.png'
import B3 from '../../public/shopPage/3.png'
import B4 from '../../public/shopPage/4.png'
import B5 from '../../public/shopPage/5.png'
import B6 from '../../public/shopPage/6.png'
import B7 from '../../public/shopPage/7.png'
import B8 from '../../public/shopPage/8.png'
import Img1 from '../../public/shopPage/img1.png'
import Img2 from '../../public/shopPage/img2.png'
import Img3 from '../../public/shopPage/img3.png'
import Img4 from '../../public/shopPage/img4.png'

const shope_leftSidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center relative bg-[#F7F8FA] h-full">
        <div className="flex flex-col gap-3 justify-evenly mt-8">
          <button>
            <img src={B1} alt="Image 1" className="w-14 h-14" />
          </button>
          <button>
            <img src={B3} alt="Image 2" className="w-14 h-14" />
          </button>
          <button>
            <img src={B4} alt="Image 3" className="w-14 h-14" />
          </button>
          <button>
            <img src={B5} alt="Image 4" className="w-14 h-14" />
          </button>
          <button>
            <img src={B6} alt="Image 5" className="w-14 h-14" />
          </button>
          <button>
            <img src={B7} alt="Image 6" className="w-14 h-14" />
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-10 justify-end bottom-0 absolute">
          <button>
            <img src={B8} alt="Image 1" className="w-14 h-14" />
          </button>
          <button>
            <img src={Img1} alt="Image 1" className="w-14 h-14 rounded-full" />
          </button>
          <button>
            <img src={Img2} alt="Image 2" className="w-14 h-14 rounded-full" />
          </button>
          <button>
            <img src={Img3} alt="Image 3" className="w-14 h-14 rounded-full" />
          </button>
          <button>
            <img src={Img4} alt="Image 4" className="w-14 h-14 rounded-full" />
          </button>
        </div>
      </div>
    </>
  )
}

export default shope_leftSidebar
