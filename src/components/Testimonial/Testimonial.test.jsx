import imageN from '../../assets/image-n.jpg';
import imageF from '../../assets/image-f.jpg';
import imageU from '../../assets/image-u.jpg';

const testimonials = [
  {
    name: "Dr. Amina Yusuf",
    role: "Orthopedic Surgeon",
    image: imageN,
    text: "The Najoda Foundation has been instrumental in providing access to life-saving orthopedic surgeries. Their commitment to patient care is unmatched."
  },
  {
    name: "John Okoro",
    role: "Patient",
    image: imageF,
    text: "I was able to walk again thanks to the support I received from the Najoda Foundation. Their team of professionals gave me a second chance at life."
  },
  {
    name: "Dr. Mary Ibe",
    role: "Physiotherapist",
    image: imageU,
    text: "Working with the Najoda Foundation has been a rewarding experience. Their dedication to improving orthopedic care in our community is inspiring."
  }
];

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What Our Beneficiaries Say
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Hear from the patients and professionals whose lives have been touched by the Najoda Foundation.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <img
                    className="w-26 h-16 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
