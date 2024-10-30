import React from "react";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <section className=" bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 lg:px-24 mt-8">
      <div className="container mx-auto text-center lg:text-left max-w-3xl lg:max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          About us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          HelloScribe is an applied AI Lab focused on Reasoning. Our long-term goal is to build a General Autonomous Reasoning Engine capable of long-term planning and decision-making across all fields.
        </p>
        <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
            Our flagship product is an AI-powered strategy engine that revolutionizes how professionals create plans and proposals. It combines advanced AI with deep industry knowledge to deliver comprehensive, data-driven strategies in minutes—10x faster than traditional methods, across any business challenge, with no AI expertise needed.
          </p>
        </div>
      </div>

      <div className="w-full mt-8">
        <Footer />
      </div>
    </section>
  );
};

export default AboutUs;
