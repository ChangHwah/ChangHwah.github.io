import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
    const professionalRecommendations = [
    {
      name: "Darnell Gulley (Gulley Services)",
      date: "July 1, 2025",
      comment:
        "Had the pleasure of working with Solomon on a job; he's efficient with time and quality and pays attention to detail, a solid partner to have when splitting a job where the whole is responsible for the individual work of each team member.",
    },
    {
      name: "Sean Gerych (GTS)",
      date: "January 15, 2025",
      comment:
        "Solomon has worked on a number of IT projects with me over the past few years. He is very diligent and responsible. He has an excellent work ethic and people skills. I highly recommend him.",
    },
    {
      name: "Auston Thompson",
      date: "July 8, 2025",
      comment: "I have had the pleasure of working alongside Solomon on two occasions. During our first collaboration, I did not work with him directly, but I received consistent positive feedback from the owner of the contracting company concerning his performance. In our second engagement, I had the opportunity to work with Solomon directly and was thoroughly impressed by his professionalism, technical expertise, and positive attitude. He is both a skilled technicians and a dependable team member. I would not hesitate to work with him again and highly recommend him for future projects."
    }
  ];

  const clientTestimonials = [
    {
      name: "M7 Services",
      location: "Dublin, OH",
      date: "May 21, 2025",
      comment: "Would certainly use again given the opportunity",
    },
    {
      name: "Mendtronix",
      location: "New Lexington, OH",
      date: "May 19, 2025",
      comment: "Great work as usual! Very detailed!!",
    },
    {
      name: "Mendtronix",
      location: "Marysville, OH",
      date: "May 19, 2025",
      comment: "Great work as usual. Very motivated and gets the job done always!",
    },
    {
      name: "Integrated Health Systems",
      location: "New Lexington, OH",
      date: "Mar 28, 2025",
      comment: "Great tech",
    },
    {
      name: "Mendtronix",
      location: "New Lexington, OH",
      date: "Mar 7, 2025",
      comment: "Great technician. Look forward to working together in the future!",
    },
  ];

 return (
    <section data-aos="fade-up" className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {clientTestimonials.map(({ name, location, date, comment }, idx) => (
          <TestimonialCard
            key={idx}
            name={name}
            location={location}
            date={date}
            comment={comment}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Professional Recommendations</h2>
      <div className="space-y-8">
        {professionalRecommendations.map(({ name, date, comment }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-gray-800 italic mb-4">“{comment}”</p>
            <div className="font-semibold text-green-700">{name}</div>
            <div className="text-sm text-gray-500">
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ name, location, date, comment }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <p className="text-gray-800 italic mb-4">“{comment}”</p>
      <div className="flex justify-center mb-3 text-green-600">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} size={20} />
        ))}
      </div>
      <div className="font-semibold text-green-700">{name}</div>
      <div className="text-sm text-gray-500">
        {location} — <time dateTime={date}>{date}</time>
      </div>
    </div>
  );
}