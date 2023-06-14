import Delete from '../../public/midnav/delete.png';
import Edit from '../../public/midnav/edit.png';
import Filter from '../../public/midnav/Filter.png';
import Option from '../../public/midnav/option.png';
import Search from '../../public/midnav/search.png';
import Update from '../../public/midnav/update.png';
import View from '../../public/midnav/View.png';

const navMid2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 h-full text-[#6B7A99] border">
      <div className="flex items-center gap-6">
        <img src={Update} alt="" className="h-8" />
        <h1 className="font-bold text-2xl">Select All</h1>
      </div>
      <div className="mt-4 md:mt-0">
        <ul className="flex flex-row text-xl font-medium items-center">
          <li className="shadow-sm border-2 px-8 py-3.5 flex gap-2 items-center rounded-md">
            <img className="h-[1.3rem]" src={Filter} alt="" />
            <span>Filtres</span>
          </li>
          <li className="shadow-sm border-2 px-8 py-3.5 flex gap-2 items-center rounded-md">
            <img className="h-[1.3rem]" src={Search} alt="" />
            <span>Search</span>
          </li>
          <li className="shadow-sm border-2 px-8 py-3.5 flex gap-2 items-center rounded-md">
            <img className="h-[1.3rem]" src={Edit} alt="" />
            <span>Edit</span>
          </li>
          <li className="shadow-sm border-2 px-8 py-3.5 flex gap-2 items-center rounded-md">
            <img className="h-[1.3rem]" src={Delete} alt="" />
            <span>Delete</span>
          </li>
        </ul>
      </div>
      <div className="font-medium text-xl">
        <ul className="flex flex-row text-xl font-medium items-center">
          <li className="shadow-sm border-2 px-6 py-3.5 items-center rounded-md">
            <img className="h-[1.3rem]" src={Option} alt="" />
          </li>
          <li className="shadow-sm border-2 px-6 py-3.5 items-center rounded-md">
            <img className="h-[1.3rem]" src={View} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navMid2;
