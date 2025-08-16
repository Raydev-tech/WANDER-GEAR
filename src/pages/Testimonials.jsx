import React, { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Backpacker",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "WanderGear’s backpack is a game-changer! I hiked for 10 days and it felt so light yet durable.",
      rating: 5,
    },
    {
      name: "Michael Lee",
      role: "Mountain Climber",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "The gear stood strong through snow and rain. I’ve never felt more confident outdoors!",
      rating: 4,
    },
    {
      name: "Emily Carter",
      role: "Travel Blogger",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "Stylish and reliable! I love how WanderGear products are both practical and beautiful.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          What Our Adventurers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>

              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
