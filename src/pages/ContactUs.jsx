import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-3">
            Have questions or need help? We’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">support@wandergear.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-600" />
              <span className="text-gray-700">
                123 Adventure Road, Wander City, USA
              </span>
            </div>

            {/* Map (optional, can remove if not needed) */}
            <div className="mt-8">
              <iframe
                title="WanderGear Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094446!2d144.9537353153159!3d-37.81627974202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzA1LjAiUyAxNDTCsDU3JzE4LjAiRQ!5e0!3m2!1sen!2sus!4v1618452749465!5m2!1sen!2sus"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="5"
                  placeholder="Your Message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
