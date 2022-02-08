import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return <div>
        <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
        </div>
    </div>;
};

export default Layout;
