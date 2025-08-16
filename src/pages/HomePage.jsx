import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs ";
import ContactUs from "./ContactUs";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <section className="relative bg-white overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-wide border border-gray-300 px-2 py-1 rounded-full">
                  Est. 2010
                </span>
                <span className="text-xs uppercase tracking-wide border border-gray-300 px-2 py-1 rounded-full">
                  Exclusive Launch 31/01/25
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
                Wander <span className="text-blue-600">Gear</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Discover the latest trends, exclusive collections, and premium-quality products.
                Everything for modern travelers and adventurers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white hover:bg-blue-700 transition rounded-full px-6 py-3 font-medium shadow-md">
                Shop Now
              </button>
              <button className="rounded-full px-6 py-3 border border-gray-300 hover:border-gray-400 transition font-medium">
                Discover
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative" data-aos="fade-left">
            <img
              src="https://plus.unsplash.com/premium_photo-1664301570850-467c74d1e4b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="Group of travelers with WanderGear products"
              className="w-full h-[450px] sm:h-[500px] object-cover rounded-2xl shadow-lg"
            />

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
    <FeaturedProducts />
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Section Title */}
    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
      Why Choose <span className="text-blue-600">WanderGear?</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
      We provide outdoor gear designed to support every step of your journey, 
      whether it’s hiking, camping, or exploring the great outdoors.
    </p>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div
        className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
        data-aos="zoom-in"
      >
        <div className="flex items-center justify-center w-14 h-14 mx-auto bg-blue-100 text-blue-600 rounded-full mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
        <p className="text-gray-600">
          Built with durable, high-performance materials that endure every adventure.
        </p>
      </div>

      {/* Feature 2 */}
      <div
        className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="flex items-center justify-center w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 20h14a2 2 0 002-2v-1H3v1a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
        <p className="text-gray-600">
          Get top-tier gear at prices that won’t break the bank.
        </p>
      </div>

      {/* Feature 3 */}
      <div
        className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <div className="flex items-center justify-center w-14 h-14 mx-auto bg-purple-100 text-purple-600 rounded-full mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a7 7 0 00-14 0v2h5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12a5 5 0 100-10 5 5 0 000 10z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Trusted by Explorers</h3>
        <p className="text-gray-600">
          Join a community of adventurers who rely on WanderGear worldwide.
        </p>
      </div>
    </div>
  </div>
</section>
<Testimonials />
<AboutUs />
<ContactUs />
    </>
  );
};

export default HomePage;
