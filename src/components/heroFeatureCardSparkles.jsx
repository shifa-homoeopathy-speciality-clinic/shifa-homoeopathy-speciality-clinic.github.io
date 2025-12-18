import { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';
import { features1 } from '../assets/data';
import DiseaseModal from './diseaseModal';

const FeatureCard = ({ icon: Icon, title, description, gradient, delay, index, setValue }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [particles, setParticles] = useState([]);

  // useEffect(() => {
  //   if (isHovered) {
  //     const newParticles = Array.from({ length: 123 }, (_, i) => ({
  //       id: i,
  //       angle: (i * 360) / 12,
  //       delay: i * 0.05,
  //       x: Math.random() * 100,
  //       y: Math.random() * 100
  //     }));
  //     setParticles(newParticles);
  //   }
  // }, [isHovered]);

  return (
    <div
      className="relative overflow-visible"
      style={{
        animation: `floatIn 1s ease-out ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onTouchStart={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing background effect */}
      <div
        className={`absolute inset-0 rounded-3xl blur-sm transition-all duration-700 ${isHovered ? 'opacity-40 scale-110' : 'opacity-0 scale-95'
          }`}
        style={{
          background: gradient,
        }}
      />

      {/* Main card */}
      <div
        className={`relative bg-white rounded-3xl p-8 transition-all duration-700 transform ${isHovered ? 'scale-101 -translate-y-2' : ''
          }`}
        style={{
          boxShadow: isHovered
            ? `0 30px 60px -12px rgba(0,0,0,0.25), 0 0 80px -10px ${gradient.split(',')[1].split(')')[0]})`
            : '0 10px 30px -5px rgba(0,0,0,0.15)',
        }}
      >
        {/* Animated particles on hover */}
        {/* {isHovered &&
          particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: gradient,
                top: `${particle.x}%`,
                left: `${particle.y}%`,
                animation: `particle 1s ease-out ${particle.delay}s`,
                transform: `rotate(${particle.angle}deg) translateX(0)`,
                opacity: "10%"
              }}
            />
          ))} */}

        {/* Floating sparkles */}
        {isHovered && (
          <>
            <Sparkles
              className="absolute top-4 right-4 text-yellow-500 animate-[pulse_3s_ease-out_infinite]"
              size={20}
              // style={{ animation: 'twinkle 3s ease-in-out infinite' }}
            />
            <Star
              className="absolute bottom-6 left-6 text-yellow-300 animate-[spin_4s_linear_infinite]"
              size={16}
              // style={{ animation: 'twinkle 2s ease-in-out infinite 0.5s' }}
            />
          </>
        )}

        {/* Icon with rotating ring */}
        <div className="relative mb-6 flex justify-center">
          {/* Outer rotating ring */}
          <div
            className={`absolute w-28 h-28 rounded-full transition-all duration-1000 ${isHovered ? 'rotate-180' : 'rotate-0'
              }`}
            style={{
              background: `conic-gradient(from 0deg, ${gradient}, transparent 70%)`,
              opacity: isHovered ? 0.6 : 0.3,
            }}
          />

          {/* Middle pulsing ring */}
          <div
            className={`absolute w-24 h-24 rounded-full transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'
              }`}
            style={{
              background: gradient,
              opacity: 0.15,
              // animation: isHovered ? 'pulse 5s ease-in-out infinite' : 'none',
            }}
          />

          {/* Icon container */}
          <div
            className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full transition-all duration-700 ${isHovered ? 'scale-125 rotate-12' : ''
              }`}
            style={{
              background: gradient,
            }}
          >
            <Icon
              size={40}
              className={`text-white transition-all duration-700 ${isHovered ? 'scale-110' : ''
                }`}
            />
          </div>

          {/* Lightning bolt effect */}
          {/* {isHovered && (
            <Zap
              className="absolute text-yellow-400"
              size={24}
              style={{
                bottom: '-10px',
                left: '-10px',
                animation: 'pulse 0.6s ease-out infinite',
              }}
            />
          )} */}
        </div>

        {/* Number badge with animation */}
        <div
          className={`absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-700 ${isHovered ? 'scale-125 rotate-12' : ''
            }`}
          style={{
            background: gradient,
            boxShadow: isHovered ? `0 10px 30px ${gradient.split(',')[1].split(')')[0]})` : 'none',
          }}
        >
          {index + 1}
        </div>

        {/* Content with gradient text on hover */}
        <div className="relative text-center">
          <h3
            className={`text-2xl font-bold mb-4 transition-all duration-500 ${isHovered ? 'scale-105' : ''
              }`}
            style={{
              background: isHovered ? gradient : '#fff',
              WebkitBackgroundClip: isHovered ? 'text' : 'unset',
              WebkitTextFillColor: isHovered ? 'transparent' : '#1f2937',
              backgroundClip: isHovered ? 'text' : 'unset',
            }}
          >
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <button
            className="relative inline-flex items-center px-4 py-2 mt-4 text-small font-bold text-white rounded-full overflow-hidden group"
            style={{
              background: gradient
            }}
            onClick={() => setValue(index)}
          >
            <span className="relative z-10 flex items-center p-1">
              Know More
              <Sparkles size={15} className="ml-2" />
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-1000"
              style={{
                animation: 'shimmer 15s linear infinite',
                backgroundSize: '200% 100%',
              }}
            />
          </button>
        </div>

        {/* Animated border gradient */}
        {/* <div
          className={`absolute inset-0 rounded-3xl transition-all duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            background: `linear-gradient(135deg, ${gradient}, transparent)`,
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        /> */}

        {/* Bottom shine effect */}
        {/* <div
          className={`absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            background: gradient,
            boxShadow: `0 10px 40px ${gradient.split(',')[1].split(')')[0]})`,
          }}
        /> */}
      </div>
    </div>
  );
};

const HeroFeatureCardsSparkles = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [val, setVal] = useState(-1);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (val != -1) { // closing the popup
      setHeading(features1[val].heading);
      // setDescription(features1[val].detailedDescription);
      const targetDescriptionElement = document.getElementById('description');
      targetDescriptionElement.innerHTML = (features1[val].detailedDescription)
    }
  }, [val]);

  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-4 overflow-hidden">
      <style>
        {`
          @keyframes floatIn {
            from {
              opacity: 0;
              transform: translateY(100px) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes particle {
            0% {
              opacity: 1;
              transform: rotate(var(--angle)) translateX(0);
            }
            100% {
              opacity: 0;
              transform: rotate(var(--angle)) translateX(120px);
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: scale(1.3) rotate(180deg);
            }
          }

          @keyframes zap {
            0% {
              opacity: 0;
              transform: scale(0) rotate(-45deg);
            }
            50% {
              opacity: 1;
              transform: scale(1.5) rotate(0deg);
            }
            100% {
              opacity: 0;
              transform: scale(1) rotate(45deg);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.15;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.25;
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }
        `}
      </style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full opacity-30 md:motion-safe:animate-[pulse_5s_ease_infinite] md:blur-lg"
          // style={{ animation: 'pulse 7s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-300 rounded-full opacity-30 md:motion-safe:animate-[pulse_5s_ease_infinite] md:blur-lg"
          // style={{ animation: 'pulse 9s ease-in-out infinite 2s' }}
        />
        <div
          className="absolute top-40 left-1/2 w-80 h-80 bg-blue-300 rounded-full opacity-30 md:motion-safe:animate-[pulse_5s_ease_infinite] md:blur-lg"
          // style={{ animation: 'pulse 11s ease-in-out infinite 4s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Eye-catching header */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4"
            style={{
              animation: isVisible ? 'floatIn 1s ease-out' : 'none',
            }}
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm uppercase tracking-wider shadow-lg">
              <Sparkles size={16} className="mr-2" />
              How We Stand Out
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
            style={{
              animation: isVisible ? 'floatIn 1s ease-out 0.2s both' : 'none',
            }}
          >
            We Also Specialize In...
          </h2>

          {/* <p
            className="text-gray-700 text-lg max-w-2xl mx-auto"
            style={{
              animation: isVisible ? 'floatIn 1s ease-out 0.4s both' : 'none',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus?
          </p> */}
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 gap-8 md:flex md:justify-around">
          {features1.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} setValue={setVal} />
          ))}
        </div>

        {/* Call to action shimmer button */}
        <div
          className="text-center mt-16"
          style={{
            animation: isVisible ? 'floatIn 1s ease-out 1s both' : 'none',
          }}
        >
        </div>
        <DiseaseModal isOpen={val != -1} onClose={() => setVal(-1)}>
          <h2 className="text-3xl font-bold mb-4 pt-10">{heading}</h2>
          <p id='description' className="text-lg text-gray-700 mb-6">
            {description}
          </p>
          <button
            onClick={() => setVal(-1)}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600"
          >
            Close
          </button>
        </DiseaseModal>
      </div>
    </div>
  );
};

export default HeroFeatureCardsSparkles;