import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MiniContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="bg-white py-10 px-6 max-w-4xl mx-auto rounded-lg shadow-md mt-16 mb-16"
    >
      <h3 className="text-xl font-semibold mb-4 text-center">Contact Grey Techs</h3>

      {submitted ? (
        <p className="text-green-600 font-medium text-center">
          Thanks for reaching out! We’ll get back to you soon.
        </p>
      ) : (
        <form 
          action = "https://formspree.io/f/mzzgoply"
          method = "POST"
          className="space-y-4 text-left"
        >

          {/* Spam trap field */}
          <input type="text" name="_gotcha" style={{display: 'none'}} />

          {/* Redirect to Formspree's thank-you page after successful submission */}
          <input type="hidden" name="_redirect" value="/thank-you.html" />

          <label htmlFor="mini-name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <label htmlFor="mini-email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          
          <label htmlFor="mini-message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <button
            type="submit"
            className="bg-green-700 text-white font-semibold rounded px-6 py-2 hover:bg-green-600 transition"
          >
            Send
          </button>
        </form>
      )}
    </motion.section>
  );
}