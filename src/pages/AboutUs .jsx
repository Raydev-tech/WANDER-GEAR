import React, { useEffect } from "react";
import { Compass, Mountain, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            alt="About WanderGear"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            About WanderGear
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-gray-800">WanderGear</span>, 
            we believe adventure should be accessible to everyone. That’s why 
            we create high-quality, durable, and stylish gear for explorers, 
            hikers, and travelers worldwide. Whether you're climbing mountains, 
            trekking through forests, or simply enjoying a weekend getaway, 
            WanderGear is built to support your journey.
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Compass className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">
                <span className="font-semibold">Adventure Driven:</span> 
                Designed for explorers who love to wander.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Mountain className="w-6 h-6 text-green-600" />
              <p className="text-gray-700">
                <span className="font-semibold">Built to Last:</span> 
                Durable gear crafted with premium materials.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Globe className="w-6 h-6 text-yellow-600" />
              <p className="text-gray-700">
                <span className="font-semibold">Global Community:</span> 
                Trusted by adventurers around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
