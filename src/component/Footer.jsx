import React, { useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-white">WanderGear</h2>
            <p className="mt-4 text-gray-400">
              Your trusted companion for outdoor adventures.  
              Quality gear, built for explorers.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/products" className="hover:text-white">Shop</a></li>
              <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-sky-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-pink-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} WanderGear. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
