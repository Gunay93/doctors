
import FloatingActions from "../FloatingActions/FloatingActions";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />
            <ScrollToTop />
            <FloatingActions />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
