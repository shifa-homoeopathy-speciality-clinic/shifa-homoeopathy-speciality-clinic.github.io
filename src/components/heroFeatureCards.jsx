import React, { useState } from "react";
import { accessFeatures } from "../assets/data";
import { Heart, Leaf, Users } from "lucide-react";

const FeatureCard = ({ icon: Icon = "", title, description, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl cursor-pointer`}
      style={{
        animation: `slideUp 0.8s ease-out ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""
          }`}
        style={{
          background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        }}
      />

      {/* Icon container with pulse effect */}
      <div className="relative mb-6">
        <div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-full transition-all duration-500 ${isHovered ? "scale-110" : ""
            }`}
          style={{
            background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
          }}
        >
          <Icon
            size={36}
            style={{ color }}
            className={`transition-all duration-500 ${isHovered ? "scale-110" : ""
              }`}
          />
        </div>

        {/* Animated ring effect */}
        {isHovered && (
          <div
            className="absolute top-0 left-0 w-20 h-20 rounded-full animate-ping"
            style={{
              background: `${color}30`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Decorative corner element */}
      <div
        className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-10 transition-all duration-500 ${isHovered ? "scale-150" : ""
          }`}
        style={{ background: color }}
      />
      <button
        onClick={() => setModalOpen(false)}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-2xl"
      >
        Know More
      </button>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${isHovered ? "w-full" : "w-0"
          }`}
        style={{ background: color }}
      />
    </div>
  );
};

const HeroFeatureCards = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Optional header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Also Specialize In...
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            ipsum?
          </p>
        </div>

        {/* Feature cards grid */}
        {/* <div className="grid grid-cols-1 md:flex md:grid-cols-2 gap-8 md:gap-10"> */}
        <div className="grid grid-cols-1 gap-8 md:flex md:justify-around">
          {accessFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFeatureCards;
