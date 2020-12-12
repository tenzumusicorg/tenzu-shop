import SmallHeader from "./SmallHeader/SmallHeader";
import LargeHeader from "./LargeHeader/LargeHeader";

const Header = () => {

  return (
    <header className="fixed top-29 left-29 right-29">
        <LargeHeader className="hidden md:block" />
        <SmallHeader className="md:hidden" />
    </header>
  );
};

export default Header;
