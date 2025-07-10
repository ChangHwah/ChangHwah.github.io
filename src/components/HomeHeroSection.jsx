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
                <h1 className="text-5xl font-bold mb-4">Reliable IT Solutions for Small Businesses</h1>
                <p className="text-lg mb-6">
                Grey Techs offers on-site networking, surveillance, and IT support tailored to your needs.
                </p>
                <Link
                to="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 px-8 rounded-3xl shadow"
                >
                Request a Free Consultation
                </Link>
            </div>
        </section>
    )
}

export default HomeHeroSection;