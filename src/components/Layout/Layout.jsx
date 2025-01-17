// src/components/Layout/Layout.jsx
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.test';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/contact' || location.pathname === '/donations';

  return (
    <>
      {!hideHeaderAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
