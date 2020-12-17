import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props)=>(
    <div>
        <Header />
        <div className="container w-4/5 mx-auto">
            {props.children}
        </div>
        <Footer />
    </div>
);

export default Layout