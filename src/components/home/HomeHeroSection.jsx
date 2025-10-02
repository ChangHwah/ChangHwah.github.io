import { Link } from "react-router-dom";

const HomeHeroSection = () => {
    return (
        <section
            className="relative h-[500px] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative px-6 max-w-3xl">
                <h1 className="text-5xl font-extrabold mb-4">
                    Surveillance, networks, and IT support — done right, right here.
                </h1>
                <p className="text-lg mb-8 text-gray-200">
                    Helping Central & Southern Ohio businesses stay connected, secure, 
                    and supported with simple, reliable tech solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 px-8 rounded-3xl shadow"
                    >
                        Get a Quote
                    </Link>
                    <a
                        href="tel:+16145245721"
                        className="inline-block bg-gray-100 hover:bg-gray-200 transition text-gray-900 font-semibold py-3 px-8 rounded-3xl shadow"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;