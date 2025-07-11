export const GetInTouch = () => {
    return (
        <section
          data-aos="fade-up"
          className="relative bg-white py-12 px-6 max-w-4xl mx-auto rounded-lg shadow-md"
          tabIndex="0"
          aria-label="Contact information and service area description"
        >

          {/* Content, above pattern */}
          <div className="relative grid md:grid-cols-2 gap-8 text-gray-800 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:zitiswager@gmail.com"
                  className="text-green-700 hover:underline"
                >
                  zitiswager@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:7405919124"
                  className="text-green-700 hover:underline"
                >
                  (740) 591-9124
                </a>
              </p>
            </div>

            <div className="text-sm text-gray-600 flex items-center">
              <p>
                Grey Techs serves Central and Southern Ohio with reliable on-site IT support, surveillance setup, and business tech solutions.
              </p>
            </div>
          </div>
        </section>
    )
}
export default GetInTouch;