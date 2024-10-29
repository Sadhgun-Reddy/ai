import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Try it Free",
      description: "Take HelloScribe for a test drive. Upgrade anytime. No credit card required.",
      price: "$0.00",
      period: "one time",
      features: [
        "10,000 Tokens Included",
        "Limited PDF Uploads",
        "50+ Languages + Speech to Text",
        "200m Research Papers, Live News, & Web Search"
      ],
      buttonText: "Start Free",
      buttonLink: "https://app.helloscribe.ai/auth/login",
      badge: "FREE",
      isPopular: false
    },
    {
      name: "Premium",
      description: "Boost productivity & results. Nail every task with precision. Focus on what matters.",
      price: "$29.00",
      period: "mo",
      features: [
        "All Autonomous Reasoning Features",
        "150+ AI Tools & Templates",
        "Unlimited PDF/Image Uploads",
        "Add Unlimited Users - $20/month each"
      ],
      buttonText: "Start Free",
      buttonLink: "https://app.helloscribe.ai/auth/login",
      badge: "Best Value",
      isPopular: true
    },
    {
      name: "AI + Human Expertise Combined",
      description: "AI and Human Intelligence combined for smarter, stronger business results.",
      price: "Contact Us",
      period: "",
      features: [
        "All AI Tools and Features",
        "Dedicated Strategy Consultant",
        "End-to-end project support",
        "Streamlined Collaboration"
      ],
      buttonText: "Get in Touch",
      buttonLink: "#",
      badge: "Best Quality",
      isPopular: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/3 -translate-y-1/3">
        <div className="absolute inset-0 bg-blue-50 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Work at the Speed of Change</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Join 30,000+ forward-thinking professionals using HelloScribe to work smarter, faster, and with greater impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                plan.isPopular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {plan.badge}
              </div>

              <div className="p-8 bg-gray-400 rounded-2xl">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href={plan.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg text-center font-semibold transition-colors duration-200 ${
                    plan.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;