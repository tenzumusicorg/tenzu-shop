import { useState } from "react";

import Hamburger from "./Hamburger/Hamburger";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import HorizontalLine from "../../HorizontalLine/HorizontalLine";
import TenzuLogo from "../../Logos/TenzuLogo";

type Props = {
  className: string;
};

const SmallHeader = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <div className="z-10">
        <HorizontalLine className="" />
        <div className="w-full flex h-50">
          <div className="bg-white w-101 h-50 px-10 py-7 flex justify-center items-center border-r-2 border-black">
            <TenzuLogo />
          </div>
          <div className="bg-white flex-grow flex justify-center items-center">
            <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
        <HorizontalLine className="" />
      </div>
      <div className="overflow-y-hidden">
        <HamburgerMenu isOpen={isOpen} />
      </div>
    </div>
  );
};

export default SmallHeader;
