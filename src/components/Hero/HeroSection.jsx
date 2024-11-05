import './Hero.css';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center background-wall">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Transforming Lives Through Orthopedic Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8">
          At Najoda Foundation, we provide cutting-edge orthopedic care and support to help you recover and thrive.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#get-started" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold shadow-lg">
            Get Started
          </a>
          <a href="#learn-more" className="px-6 py-3 bg-transparent border border-white hover:bg-blue-600 hover:text-white rounded-full text-lg font-semibold shadow-lg">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
