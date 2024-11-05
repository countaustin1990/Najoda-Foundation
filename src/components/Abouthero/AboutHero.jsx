import { Link } from 'react-router-dom' 

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-blue-950 text-white h-screen flex items-center justify-center great-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: `url('/path-to-background-image.jpg')` }}></div>

      <div className="relative z-10 max-w-3xl text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Redefining Orthopedic Care with Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8">
         Transforming lives by improving access to cutting-edge orthopedic care and support.
            For knee pains and deformities. We are passionate about relieve knee problems
       
        </p>
        
        <Link 
          to="/blog" // Update the path to match your blog page route
          className="bg-yellow-600 hover:bg-yellow-500 text-blue-950 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Visit Our Blog
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
