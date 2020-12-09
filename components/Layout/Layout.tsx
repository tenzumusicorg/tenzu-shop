import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {

    return (
        <div style={{
            backgroundColor: "#000000",
            padding: "35px",
            minHeight: "100vh"
        }}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;