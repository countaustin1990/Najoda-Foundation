import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl text-gray-600" />
              <div>
                <h4 className="font-semibold text-gray-700">Phone</h4>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-gray-600" />
              <div>
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">info@najodafoundation.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl text-gray-600" />
              <div>
                <h4 className="font-semibold text-gray-700">Location</h4>
                <p className="text-gray-600">123 Main St, Abuja, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-gray-600 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <button
          onClick={handleBackToHome}
          className="mt-6 w-full bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
