import classes from "./HamburgerMenu.module.scss";
import ShopLogo from "../../../Logos/ShopLogo";
import ToccataLogo from "../../../Logos/ToccataLogo";
import StudioLogo from "../../../Logos/StudioLogo";
import ChartLogo from "../../../Logos/ChartLogo";
import LabelLogo from "../../../Logos/LabelLogo";
import HorzontalLine from "../../../HorizontalLine/HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isOpen: boolean;
};

const HamburgerMenu = ({ isOpen }: Props) => {
  return (
    <div>
      <div className={isOpen ? classes.openContainer1 : classes.closeContiner1}>
        <div className="w-full flex z-20">
          <div className="flex-grow w-p81 flex flex-col">
            <div className="flex">
              <div className="w-p20 p-15 bg-white border-r-2 border-black">
                <ToccataLogo />
              </div>
              <div className="w-p20 p-15 bg-white border-r-2 border-black">
                <StudioLogo />
              </div>
              <div className="w-p20 p-15 bg-white border-r-2 border-black">
                <ShopLogo />
              </div>
              <div className="w-p20 p-15 bg-white border-r-2 border-black">
                <ChartLogo />
              </div>
              <div className="w-p20 p-15 bg-white border-r-2 border-black">
                <LabelLogo />
              </div>
            </div>
            <div className="w-full bg-white border-t-2 border-r-2 text-12 border-black flex justify-center items-center flex-auto tracking-hamburBanner pt-3 pl-12">
              TENZU SHOP
            </div>
          </div>
          <div className="w-p19 p-10 bg-white">
            <ShopLogo />
          </div>
        </div>
        <HorzontalLine />
        <div className="bg-white flex h-33">
          <div className="w-45 border-r-2 border-black text-20 font-DinBold flex justify-center items-center">EN</div>
          <div className="w-33 border-r-2 border-black p-5">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="w-33 border-r-2 border-black p-5">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="w-33 border-r-2 border-black p-5">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <form className="flex-grow pt-3">
            <input className="w-full h-full p-3 pl-10" type="search" placeholder="SEARCH HERE ..." />
          </form>
        </div>
        <HorzontalLine />
        <div className="flex h-31">
          <div className="w-p33 border-r-2 border-black flex justify-center items-center bg-white pt-3 text-24">SERVICES</div>
          <div className="w-p33 border-r-2 border-black flex justify-center items-center bg-white pt-3 text-24">BLOG</div>
          <div className="flex-grow flex justify-center items-center bg-white pt-3 text-24">CONTACT US</div>
        </div>
        <HorzontalLine />
      </div>
      <div className="overflow-y-hidden">
        <div className={isOpen ? classes.openContainer2 : classes.closeContiner2}>
          <div className="flex">
            <div className="flex-grow bg-white border-r-2 border-black"></div>
            <div className="w-136">
              <div className="w-full h-35 border-b-2 border-black bg-white flex justify-center items-center pt-3">GUITAR</div>
              <div className="w-full h-35 border-b-2 border-black bg-white flex justify-center items-center">BASS</div>
              <div className="w-full h-35 border-b-2 border-black bg-white flex justify-center items-center pt-3">KEYS</div>
              <div className="w-full h-35 border-b-2 border-black bg-white flex justify-center items-center pt-3">STUDIO</div>
              <div className="w-full h-35 bg-white flex justify-center items-center pt-3">DRUMS/PERCUSSION</div>
            </div>
          </div>
          <HorzontalLine />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
