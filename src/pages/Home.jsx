import { Link } from 'react-router-dom';
import Logos from "../components/Logos/Logos";
import Testimonial from "../components/Testimonial/Testimonial.test";

const Home = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 sm:py-20 lg:py-32 great-hero">
        <div className="absolute inset-0 bg-cover bg-center background-wall">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            Together They Will Walk Again
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Transforming lives by improving access to cutting-edge orthopedic care and support.<br></br>
            For knee pains and deformities. We are passionate about relieving knee problems
          </p>
        
         

          {/* Button section */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/donations"
              className="px-6 py-3 text-blue-950 hover:text-gray-200 border-yellow-500 bg-yellow-500 hover:bg-yellow-500 rounded-full text-base sm:text-lg font-semibold shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-800 rounded-full text-base sm:text-lg font-semibold shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <Logos />
      <Testimonial />
    </>
  );
};

export default Home;
