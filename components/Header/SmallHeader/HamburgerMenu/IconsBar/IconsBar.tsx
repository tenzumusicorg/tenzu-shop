import { useState } from "react";
import classes from './IconsBar.module.scss';

const IconsBar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="bg-white flex h-45">
      <div className={openSearch ? classes.closeIcons : classes.openIcons}>
        <div className="w-1/3 border-r-2 border-black text-20 font-DinBold flex justify-center items-center">
          EN
        </div>
        <div className="w-1/3 border-r-2 border-black flex justify-center items-center">
          c
        </div>
        <div className="w-1/3 border-r-2 border-black flex justify-center items-center">
          u
        </div>
      </div>
      <div onClick={() => {!openSearch ? setOpenSearch(true) : console.log("search")}} className={openSearch ? "border-r-2 border-black  w-1/4 p-5" : "w-1/4 p-5"}>
        s
      </div>
      <form className={openSearch ? classes.openInputBar : classes.closeInputBar}>
        <input className="flex-grow h-full pt-3 pl-10" type="text" placeholder="SEARCH HERE ..." />
        <div onClick={() => setOpenSearch(false)} className="h-full w-30 flex justify-center items-center">
          *
        </div>
      </form>
    </div>
  );
};

export default IconsBar;
