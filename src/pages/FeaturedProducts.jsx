import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProducts = () => {
  const categories = ["All", "Bags", "Shoes", "Accessories", "Jackets"];
  const products = [
    {
      id: 1,
      name: "Traveler Backpack",
      color: "Black",
      price: "$120",
      image:
        "https://plus.unsplash.com/premium_photo-1679669249674-cc44b01cb4dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJhdmVsZXIlMjBCYWNrcGFja3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Bags",
    },
    {
      id: 2,
      name: "Explorer Boots",
      color: "Brown",
      price: "$180",
      image:
        "https://media.istockphoto.com/id/1422989430/photo/leather-hiking-boots-walking-on-mountain-trail.webp?a=1&b=1&s=612x612&w=0&k=20&c=wR6_7vf39C9eZGKv8tuOQrdFsdIF-mCOEKD1W3ran2I=",
      category: "Shoes",
    },
    {
      id: 3,
      name: "Adventure Jacket",
      color: "Olive",
      price: "$220",
      image:
        "https://images.unsplash.com/photo-1649768722562-c4d276b82dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWR2ZW50dXJlJTIwSmFja2V0fGVufDB8fDB8fHww",
      category: "Jackets",
    },
    {
      id: 4,
      name: "Travel Watch",
      color: "Silver",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1565787731009-1735f07432f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhdmVsJTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
      category: "Accessories",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition 
                  ${
                    selectedCategory === category
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer border rounded-lg shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-0">
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} in ${product.color}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-4 space-y-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.color}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold">{product.price}</span>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-full hover:bg-black hover:text-white transition">
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
