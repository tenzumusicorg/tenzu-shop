import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navabar/Navbar";
import HorizontalLine from "../../HorizontalLine/HorizontalLine";
import TenzuLogo from "../../Logos/TenzuLogo";
import ShopLogo from "../../Logos/ShopLogo";
import ToccataLogo from "../../Logos/ToccataLogo";
import StudioLogo from "../../Logos/StudioLogo";
import ChartLogo from "../../Logos/ChartLogo";
import LabelLogo from "../../Logos/LabelLogo";

type Props = {
  className: string;
};

const LargeHeader = ({ className }: Props) => {
  return (
    <div className={className}>
      <HorizontalLine className="" />
      <div className="w-full bg-white flex">
        <div className="flex-grow">
          <div className="flex border-b-2 2xl:border-b-3 border-black">
            <div title="Tenzu Music" className="w-136 2xl:w-191 h-72 2xl:h-101 p-14 border-r-2 2xl:border-r-3 border-black">
              <TenzuLogo />
            </div>
            <div className="flex-grow border-r-2 2xl:border-r-3 border-black font-bold flex justify-center items-center">
              <span className="lg:tracking-banner 2xl:tracking-large text-center 2xl:text-27">TENZU SHOP</span>
            </div>
            <div className="w-60 2xl:w-81 h-72 2xl:h-101 p-17 2xl:p-23 flex justify-center items-center border-r-2 2xl:border-r-3 border-black">
              <ToccataLogo />
            </div>
            <div className="w-60 2xl:w-81 h-72 2xl:h-101 p-17 2xl:p-23 flex justify-center items-center border-r-2 2xl:border-r-3 border-black">
              <StudioLogo />
            </div>
            <div className="w-60 2xl:w-81 h-72 2xl:h-101 p-17 2xl:p-23 flex justify-center items-center border-r-2 2xl:border-r-3 border-black">
              <ShopLogo />
            </div>
            <div className="w-60 2xl:w-81 h-72 2xl:h-101 p-17 2xl:p-23 flex justify-center items-center border-r-2 2xl:border-r-3 border-black">
              <ChartLogo />
            </div>
            <div className="w-60 2xl:w-81 h-72 2xl:h-101 p-17 2xl:p-23 flex justify-center items-center border-r-2 2xl:border-r-3 border-black">
              <LabelLogo />
            </div>
          </div>
          <div className="w-full h-27 2xl:h-35 flex">
            <div className="hidden lg:flex flex-grow">
              <div className="flex w-55 2xl:w-74 justify-center items-center text-center border-r-2 border-black text-20 font-DinBold">EN</div>
              <div className="w-27 2xl:w-35 p-3 2xl:p-6 border-r-2 border-black">
                <FontAwesomeIcon className="cursor-pointer" icon={faUser} size="lg" />
              </div>
              <div className="w-27 2xl:w-35 p-3 2xl:p-6 border-r-2 border-black">
                <FontAwesomeIcon className="cursor-pointer" icon={faShoppingCart} size="lg" />
              </div>
              <div className="w-27 2xl:w-35 p-3 2xl:p-6 border-r-2 border-black">
                <FontAwesomeIcon className="cursor-pointer" icon={faSearch} size="lg" />
              </div>
              <form className="h-full flex-grow border-r-2 border-black">
                <input className="w-full h-full pl-5" type="search" name="" placeholder="search some" id="search_input" />
              </form>
            </div>
            <div className="flex md:w-full lg:w-360 2xl:w-auto">
              <div className="w-1/3 lg:w-120 2xl:w-165 2xl:text-20 border-r-2 2xl:border-r-3 border-black flex justify-center items-center">SERVICES</div>
              <div className="w-1/3 lg:w-120 2xl:w-165 2xl:text-20 border-r-2 2xl:border-r-3 border-black flex justify-center items-center">BLOG</div>
              <div className="w-1/3 lg:w-120 2xl:w-165 2xl:text-20 border-r-2 2xl:border-r-3 border-black flex justify-center items-center">CONTACT US</div>
            </div>
          </div>
        </div>
        <div className="w-60 2xl:w-111 h-44 2xl:h-138 p-9 2xl:p-30 flex justify-center items-center">
          <ShopLogo />
        </div>
      </div>
      <HorizontalLine className="lg:hidden" />
      <div className="flex w-full bg-white lg:hidden">
        <div className="flex w-55 justify-center items-center text-center border-r-2 border-black text-20 font-DinBold">EN</div>
        <div className="w-27 p-3 border-r-2 2xl:border-r-3 border-black">
          <FontAwesomeIcon className="cursor-pointer" icon={faUser} size="lg" />
        </div>
        <div className="w-27 p-3 border-r-2 2xl:border-r-3 border-black">
          <FontAwesomeIcon className="cursor-pointer" icon={faShoppingCart} size="lg" />
        </div>
        <div className="w-27 p-3 border-r-2 2xl:border-r-3 border-black">
          <FontAwesomeIcon className="cursor-pointer" icon={faSearch} size="lg" />
        </div>
        <form className="h-full flex-grow pt-4">
          <input className="w-full h-full pl-5" type="search" name="" placeholder="search some" id="search_input" />
        </form>
      </div>
      <HorizontalLine className="" />
      <Navbar />
      <HorizontalLine className="" />
    </div>
  );
};

export default LargeHeader;
