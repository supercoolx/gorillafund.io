import React from "react";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

const NotFound = () => {
    return (
        <div>
            <Nav />
            <div className="py-10 text-5xl font-bold text-center bg-slate-50">404 ERROR</div>
            <Footer />
        </div>
    )
}

export default NotFound;