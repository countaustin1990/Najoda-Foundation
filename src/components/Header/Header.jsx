import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Najoda Foundation Blog</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
