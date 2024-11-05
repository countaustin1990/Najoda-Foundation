import { FaHandsHelping, FaGlobe, FaPeopleCarry } from 'react-icons/fa';
import AboutHero from '../components/Abouthero/AboutHero';

const NajodaFoundationAbout = () => {
  return (
    <>
      <AboutHero/>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-cover py-8 about-heros">
      <div className="container mx-auto px-6 text-center">
       {/* <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          About Najoda Foundation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Najoda Foundation is committed to empowering communities, improving lives, and creating opportunities for those in need. We believe in a world where everyone has access to basic human rights, education, and resources for sustainable living.
        </p>*/}

        <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          About Najoda Foundation
        </h3>
        {/* Icon Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaHandsHelping className="text-4xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Community Empowerment</h3>
           { /*<p className="text-gray-600 dark:text-gray-300">
              We work closely with local communities to provide education, healthcare, and support, helping individuals gain the skills and confidence to improve their own lives.
            </p>*/}
            <p className="text-gray-600 dark:text-gray-300">
            Transforming lives by improving access to cutting-edge orthopedic care and support.
            For knee pains and deformities. We are passionate about relieving knee problems
          </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaGlobe className="text-4xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Global Outreach</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Najoda Foundation partners with international organizations to deliver aid and build infrastructures in underdeveloped regions across the globe.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaPeopleCarry className="text-4xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Humanitarian Aid</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We provide essential resources such as food, clean water, and medical supplies to those affected by natural disasters, conflicts, or economic hardship.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default NajodaFoundationAbout;
