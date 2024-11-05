

const testimonials = [
  {
    name: "Bonnie Green",
    role: "CEO & Web Developer",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    text: "Working with this team has been an absolute pleasure. Their technical expertise and attention to detail have truly elevated our platform. Highly recommend!"
  },
  {
    name: "Jese Leos",
    role: "CTO",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    text: "The team delivered exceptional results, exceeding our expectations. Their innovative approach and professionalism were evident throughout the project."
  },
  {
    name: "Emma Jones",
    role: "Product Manager",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/emma-jones.png",
    text: "An outstanding team that consistently goes above and beyond. Their dedication to quality and customer satisfaction is unparalleled."
  }
];

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Read the testimonials from our valued clients and learn how we’ve made an impact on their projects.
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
                    className="w-16 h-16 rounded-full"
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
