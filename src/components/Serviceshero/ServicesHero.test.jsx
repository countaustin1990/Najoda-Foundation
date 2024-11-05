import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-slate-800 great-hero" style={{ backgroundImage: `url('/path-to-background-image.jpg')` }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-950 opacity-50"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-10 max-w-2xl mx-auto">
        {/* Responsive heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Empowering Recovery Through Advanced Care
        </h1>
        
        {/* Responsive paragraph */}
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
          We offer such services to everyone deserving using community participation, technology for crowd-funding.
        </p>

        {/* Responsive button */}
        <Link 
      to="/about" // Update the path to match your blog page route
      className="bg-yellow-600 hover:bg-yellow-500 text-blue-950 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
    >
      Visit Our About
    </Link>
      </div>
    </section>
  );
};

export default HeroSection;
