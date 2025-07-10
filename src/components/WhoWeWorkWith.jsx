import WhoWeWorkWithImg from "../assets/whoweworkwith.avif";

export const WhoWeWorkWith = () => {
    return (
        <section className="max-w-6xl mx-auto mb-20 px-4 md:flex md:items-center md:gap-12" data-aos="fade-up">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                src={WhoWeWorkWithImg} // replace with your own image
                alt="Different business types illustration"
                className="rounded-xl shadow w-full h-auto object-cover"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Who We Work With</h2>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                Grey Techs partners with small businesses across a wide range of industries. Whether you're running a customer-facing operation or managing internal systems, we deliver reliable on-site support where and when it matters.
                </p>
                <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
                <li>Retail shops & franchises</li>
                <li>Restaurants & cafes</li>
                <li>Warehouses & industrial sites</li>
                <li>Medical & dental offices</li>
                <li>Rural or multi-building properties</li>
                <li>Offices needing network cleanup or upgrades</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                If you're a business in Central or Southern Ohio looking for tech help that shows up, give us a call — we're here to support your growth.
                </p>
            </div>
        </section>
    )
};
export default WhoWeWorkWith;