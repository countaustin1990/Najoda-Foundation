import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [items] = useState([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu state

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 dark:bg-gray-900 px-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
         {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />*/}
          <span className="self-center text-2xl text-gray-200 font-semibold whitespace-nowrap dark:text-white">
            Najoda Foundation
          </span>
        </Link>

        {/* Search bar for desktop */}
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            value={searchQuery}
            onChange={handleSearch}
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Hamburger icon for mobile view */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 text-sm text-gray-200 hover:text-gray-700 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu items for mobile view */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:hidden transition-all ease-in-out duration-300`}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 space-y-2">
            {filteredItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 font-bold px-4 text-gray-200 rounded hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <input
              type="text"
              id="search-navbar-mobile"
              value={searchQuery}
              onChange={handleSearch}
              className="block w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Menu items for desktop */}
        <div className="hidden w-full md:flex md:w-auto" id="navbar-search">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            {filteredItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 px-4 font-bold text-gray-200 rounded hover:bg-gray-100 dark:text-gray-200 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
