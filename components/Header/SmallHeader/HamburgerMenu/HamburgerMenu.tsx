import classes from "./HamburgerMenu.module.scss";
import ShopLogo from "../../../Logos/ShopLogo";
import ToccataLogo from "../../../Logos/ToccataLogo";
import StudioLogo from "../../../Logos/StudioLogo";
import ChartLogo from "../../../Logos/ChartLogo";
import LabelLogo from "../../../Logos/LabelLogo";
import HorzontalLine from "../../../HorizontalLine/HorizontalLine";
import IconsBar from './IconsBar/IconsBar'

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
              <div className="w-p20 p-10 sm:p-15 bg-white border-r-2 border-black">
                <ToccataLogo />
              </div>
              <div className="w-p20 p-10 sm:p-15 bg-white border-r-2 border-black">
                <StudioLogo />
              </div>
              <div className="w-p20 p-10 sm:p-15 bg-white border-r-2 border-black">
                <ShopLogo />
              </div>
              <div className="w-p20 p-10 sm:p-15 bg-white border-r-2 border-black">
                <ChartLogo />
              </div>
              <div className="w-p20 p-10 sm:p-15 bg-white border-r-2 border-black">
                <LabelLogo />
              </div>
            </div>
            <div className="w-full bg-white border-t-2 border-r-2 text-12 border-black flex justify-center items-center text-center flex-auto tracking-smallHamBanner sm:tracking-hamburBanner pt-3 pl-12">
              TENZU SHOP
            </div>
          </div>
          <div className="w-p19 p-10 bg-white">
            <ShopLogo />
          </div>
        </div>
        <HorzontalLine className="" />
      </div>
      <div className="overflow-y-hidden">
        <div className={isOpen ? classes.openContainer2 : classes.closeContiner2}>
          <IconsBar />
          <HorzontalLine className="" />
          <div className="flex h-31">
            <div className="w-p33 border-r-2 border-black flex justify-center items-center bg-white pt-2 sm:pt-4 text-18 sm:text-24">SERVICES</div>
            <div className="w-p33 border-r-2 border-black flex justify-center items-center bg-white pt-2 sm:pt-4 text-18 sm:text-24">BLOG</div>
            <div className="flex-grow flex justify-center items-center bg-white pt-2 sm:pt-4 text-18 sm:text-24">CONTACT US</div>
          </div>
          <HorzontalLine className="" />
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="h-35 border-b-2 sm:border-r-2 border-black bg-white flex justify-center items-center pt-5 text-20">GUITAR</div>
            <div className="h-35 border-b-2 border-black bg-white flex justify-center items-center pt-5 text-20">BASS</div>
            <div className="h-35 border-b-2 sm:border-r-2 border-black bg-white flex justify-center items-center pt-5 text-20">KEYS</div>
            <div className="h-35 border-b-2 border-black bg-white flex justify-center items-center pt-5 text-20">STUDIO</div>
            <div className="h-35 border-b-2 sm:border-b-0 sm:border-r-2 border-black bg-white flex justify-center items-center pt-5 text-20">DRUMS/PERCUSSION</div>
            <div className="h-35 sm:border-b-0 border-black bg-white flex justify-center items-center pt-5 text-20">COMMING SOON</div>
          </div>
          <HorzontalLine className="" />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
