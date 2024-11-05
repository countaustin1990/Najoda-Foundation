import { FaLaptopCode, FaMobileAlt, FaProjectDiagram } from 'react-icons/fa';
import AboutHero from '../components/Abouthero/AboutHero';

const About = () => {
  return (
    <>
    <AboutHero/>
     <section className="bg-gray-50 dark:bg-gray-900 min-h-80 py-7">
      
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
           At Najoda Foundation, we believe in more than just treatment—we believe in a patient-centered approach that focuses on empowering individuals to regain mobility and live pain-free.
        </p>
        

        {/* Icon Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaLaptopCode className="text-4xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We build fast, responsive, and modern websites using the latest web technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaMobileAlt className="text-4xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Mobile Apps</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our mobile apps are user-friendly, scalable, and optimized for performance on all devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaProjectDiagram className="text-4xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Project Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We ensure your projects are completed on time and within budget, using the best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default About;
