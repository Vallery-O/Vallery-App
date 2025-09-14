import React from "react";
import servicesData from "../data/servicesData";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 px-6 bg-white dark:bg-gray-900 text-center"
    >
      {/* Soft blurred accent */}
      <div
        className="absolute pointer-events-none -z-10 rounded-full filter blur-3xl opacity-60 animate-float"
        style={{
          width: "500px",
          height: "500px",
          top: "5%",
          left: "10%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(248,176,200,0.8) 0%, rgba(248,176,200,0.25) 50%, rgba(248,176,200,0.0) 80%)",
        }}
      />

      <h2 className="text-4xl font-heading mb-12 text-gray-800 dark:text-gray-100 animate-slideIn">
        My Services – What I Can Do
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slideIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center items-center mb-6 text-pink-500">
                <Icon className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-xl text-gray-800 dark:text-gray-100 mb-3">
                {service.title}
              </h3>
              <p className="font-body text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
