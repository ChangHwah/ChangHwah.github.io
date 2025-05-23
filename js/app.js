import '../css/index.css';
export default function Home() {
    return (
      <main className="min-h-screen bg-white text-gray-800">
        <header className="bg-green-700 text-white p-6 shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Grey Techs</h1>
            <nav className="space-x-4">
              <a href="#services" className="hover:underline">Services</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
  
        <section className="bg-green-50 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Expert IT Consulting for Real-World Results</h2>
          <p className="text-lg max-w-2xl mx-auto">Grey Techs delivers hands-on technical support and custom IT solutions backed by field expertise in low voltage, POS, A/V, VoIP, networking, and cameras.</p>
          <div className="mt-8">
            <img src="/images/hero-tech-support.jpg" alt="Technician at work" className="mx-auto rounded shadow-lg max-w-xl" />
          </div>
        </section>
  
        <section id="services" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-8">Our Services</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-green-100 p-6 rounded shadow">
                <img src="/images/field-support.jpg" alt="Field support" className="mb-4 w-full h-40 object-cover rounded" />
                <h4 className="text-xl font-bold mb-2">Field IT Support</h4>
                <p>Over a decade of experience in troubleshooting and installing low-voltage systems, POS terminals, VoIP setups, and A/V equipment. Quick, reliable service tailored for small to mid-sized businesses.</p>
              </div>
              <div className="bg-green-100 p-6 rounded shadow">
                <img src="/images/networking.jpg" alt="Networking setup" className="mb-4 w-full h-40 object-cover rounded" />
                <h4 className="text-xl font-bold mb-2">Networking and Infrastructure</h4>
                <p>Design, setup, and maintenance of wired and wireless networks. Experience with IP camera systems and structured cabling ensures a stable and scalable setup.</p>
              </div>
              <div className="bg-green-100 p-6 rounded shadow">
                <img src="/images/web-development.jpg" alt="Web development workspace" className="mb-4 w-full h-40 object-cover rounded" />
                <h4 className="text-xl font-bold mb-2">Web Development</h4>
                <p>Modern, responsive websites and web applications built with JavaScript and React Native. From business landing pages to custom tools, we bring your ideas to life on the web.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section id="about" className="py-16 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">About Us</h3>
            <p>Grey Techs is built on practical experience across the IT spectrum—from field deployments to web development. We combine technical skill with real-world applications to help businesses grow and thrive. Whether you’re opening a new office or need a powerful online presence, we deliver dependable, efficient service every time.</p>
          </div>
        </section>
  
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
            <form className="bg-green-50 p-6 rounded shadow space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
              <textarea placeholder="Your message" className="w-full p-2 border border-gray-300 rounded" rows="5"></textarea>
              <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">Send Message</button>
            </form>
          </div>
        </section>
  
        <footer className="bg-green-700 text-white text-center py-4">
          <div className="flex justify-center items-center space-x-4">
            <p>&copy; {new Date().getFullYear()} Grey Techs. All rights reserved.</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.484c.735-1.063 2.084-1.484 3.5-1.484 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>
    );
  }
  