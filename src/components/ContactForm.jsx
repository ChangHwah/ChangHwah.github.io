export default function ContactForm() {
  return (
    <section
      data-aos="fade-up"
      className="mb-12"
    >
      <form
        action="https://formspree.io/f/mzzgoply"
        method="POST"
        className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 h-full"
      >
        {/* Spam trap field */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input type="hidden" name="_redirect" value="/thank-you.html" />

        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
}
