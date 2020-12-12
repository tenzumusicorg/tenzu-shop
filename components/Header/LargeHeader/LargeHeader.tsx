import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navabar/Navbar";
import HorizontalLine from "../../HorizontalLine/HorizontalLine";
import TenzuLogo from "../../Logos/TenzuLogo";
import ShopLogo from "../../Logos/ShopLogo";
import ToccataLogo from "../../Logos/ToccataLogo";
import StudioLogo from "../../Logos/StudioLogo";
import ChartLogo from "../../Logos/ChartLogo";
import LabelLogo from "../../Logos/LabelLogo";

type Props = {
  className: string,
}

const LargeHeader = ({className}: Props) => {
  return (
    <div className={className}>
      <HorizontalLine />
      <div className="w-full bg-white flex">
        <div className="flex-grow">
          <div className="flex border-b border-black">
            <div title="Tenzu Music" className="w-136 h-72 p-14 border-r-2 border-black">
              <TenzuLogo />
            </div>
            <div className="flex-grow border-r hidden md:flex border-black letter tracking-banner text-center font-bold justify-center items-center">
              TENZU SHOP
            </div>
            <div className="w-81 h-70 px-23 py-21 border-r border-black">
              <ToccataLogo />
            </div>
            <div className="w-81 h-70 px-23 py-21 border-r border-black">
              <StudioLogo />
            </div>
            <div className="w-81 h-70 px-23 py-21 border-r border-black">
              <ShopLogo />
            </div>
            <div className="w-81 h-70 px-23 py-21 border-r border-black">
              <ChartLogo />
            </div>
            <div className="w-81 h-70 px-23 py-21 border-r border-black">
              <LabelLogo />
            </div>
          </div>
          <div className="w-full h-35 flex">
            <div className="flex">
              <div className="flex justify-center items-center text-center">EN</div>
              <div className="flex justify-center items-center">
                <FontAwesomeIcon className="mx-2 cursor-pointer" icon={faUser} size="lg" />
              </div>
              <div className="flex justify-center items-center bg-red-300">
                <FontAwesomeIcon className="mx-2 cursor-pointer" icon={faShoppingCart} size="lg" />
              </div>
            </div>
            <div className="bg-red-500 flex-grow">
              <input type="search" name="" placeholder="search some shit" id="" />
            </div>
            <div className="flex-grow border-r border-black"></div>
            <div className="flex">
              <div className="w-100 border-r border-black flex justify-center items-center">SERVICES</div>
              <div className="w-100 border-r border-black flex justify-center items-center">BLOG</div>
              <div className="w-100 border-r border-black flex justify-center items-center">CONTACT US</div>
            </div>
          </div>
        </div>
        <div className="w-111 h-138 px-27 py-12">
          <ShopLogo />
        </div>
      </div>
      <HorizontalLine />
      <Navbar />
      <HorizontalLine />
    </div>
  );
};

export default LargeHeader;
