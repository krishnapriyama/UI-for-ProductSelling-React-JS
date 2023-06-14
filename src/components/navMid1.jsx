import Product from '../../public/midnav/1.png'
import Plus from '../../public/midnav/2.png'
const navMid1 = () => {
  return (
    <div className="flex items-center justify-between h-ful px-10 text-[#6B7A99] gap-6">
      <div className="flex h-full items-center gap-3">
        <img src={Product} alt="" className="p-2" />
        <h1 className="font-bold text-2xl flex items-center">Products</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-8 text-xl font-medium">
          <li>Active</li>
          <li>Draft</li>
          <li>Assembly</li>
        </ul>
      </div>
      <div className="font-medium text-xl">
        <button className="bg-[#8833FF] rounded-full py-2 gap-2 px-4 flex items-center ">
          <img src={Plus} alt="Add" className="h-8" />
          <span className="text-white hidden md:block">Add Product</span>
        </button>
      </div>
    </div>
  )
}

export default navMid1
