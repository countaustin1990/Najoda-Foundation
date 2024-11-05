import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About.test';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Backtothetop from './components/Backtothetop/BackToTheTopButton';
import Header from './components/Header/Header';
import BlogList from './components/Bloglist/BlogList';
import BlogPost from './components/Blogpost/BlogPost';
//import Footer from './components/Footer/Footer';
import DonationSection from './pages/Donations.test';
import Layout from './components/Layout/Layout'; // Make sure Layout is imported and used

function App() {
  return (
    <Router>
      <Backtothetop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/donations" element={<Layout><DonationSection /></Layout>} />
        <Route path="/header" element={<Layout><Header /></Layout>} />
        <Route path="/bloglist" element={<Layout><BlogList /></Layout>} />
        <Route path="/post/:id" element={<Layout><BlogPost /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
