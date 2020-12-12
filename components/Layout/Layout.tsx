import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="px-29 bg-black">
      <div className="w-full h-29 bg-black fixed top-0"></div>
      <Header />
      <div>
        <div className="overflow-y-scroll h-300 bg-blue-600">
          {children}
          <Footer />
        </div>
      </div>
      <div className="w-full h-29 bg-black fixed bottom-0"></div>
    </div>
  );
};

export default Layout;
