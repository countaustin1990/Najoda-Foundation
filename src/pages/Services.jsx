import { FaSyringe, FaHeartbeat, FaUserMd } from 'react-icons/fa';
import ServicesHero from '../components/Serviceshero/ServicesHero.test'

const services = [
  {
    id: 1,
    title: 'Orthopedic Surgery',
    description: 'Expert orthopedic surgery services to address bone and joint issues.',
    icon: <FaSyringe className="text-blue-500 text-3xl" />,
  },
  {
    id: 2,
    title: 'Physical Therapy',
    description: 'Comprehensive physical therapy programs to aid recovery and improve mobility.',
    icon: <FaHeartbeat className="text-green-500 text-3xl" />,
  },
  {
    id: 3,
    title: 'Consultation',
    description: 'Personalized consultations with orthopedic specialists to discuss treatment options.',
    icon: <FaUserMd className="text-red-500 text-3xl" />,
  },
];

const Services = () => {
  return (
    <>
     
    <ServicesHero/>
       <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-xl hover:shadow-2xl rounded-lg p-8 transform transition duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="bg-gray-100 p-4 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
   
  );
};

export default Services;
