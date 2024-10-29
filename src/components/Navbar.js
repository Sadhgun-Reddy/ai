import React from "react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar Section */}
      <header className="w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 fixed top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform">
            <img
              src="https://cdn.prod.website-files.com/607e1b2ba1855c3039f2d548/64919076bf4bdd782a80350a_Layer%201.svg"
              alt="helloscribe"
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/home/helloscribe-about-us" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              About Us
            </a>
            <a href="/home/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Pricing
            </a>
            <a href="/home/contact-us" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.helloscribe.ai/auth/login" className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <span>Log in</span>
              <img
                src="images/64919bddce1ed295b04bb87e_ArrowUp.svg"
                alt="helloscribe"
                className="h-4 w-4"
              />
            </a>
            <a
              href="https://app.helloscribe.ai/auth/login"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Try Free
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="section hero bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="block mb-2">Work Without</span>
            <strong className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Guesswork.</strong>
          </h1>
          <div className="mt-6">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              HelloScribe is your AI AutoPilot for strategy and planning. Expert, thorough, and fast—no endless prompting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/"
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
              >
                Start Now. Free Trial
              </a>
              <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                <em>Existing member?</em> <span className="underline">Login</span>
              </a>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="scroll-container my-16 bg-gray-800/50 backdrop-blur-sm py-3 max-w-3xl mx-auto rounded-xl overflow-hidden">
            <div className="scroll-content text-sm text-white space-x-8 animate-scroll whitespace-nowrap mx-4">
              {[
                "Project Proposals", "Marketing Strategy", "Business Proposals", "Strategic Planning",
                "Scenario Planning", "Research Proposals", "Crisis Communications", "Grant Proposals",
                "Creative Strategy", "Document Analysis", "Policy Development", "Event Planning",
                "Innovation Strategy", "SWOT Analysis", "Crisis Planning", "Sustainability Planning",
                "Advertising Proposals", "Policy Development", "M&A Planning", "Expansion Strategy"
              ].map((item, index) => (
                <span key={index} className="scroll-item inline-flex items-center">
                  <span className="text-pink-500 mr-2">✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 mt-8 text-lg">
            30,000+ forward-thinking professionals have embraced the future of strategy. Ready to join?
          </p>

          {/* Logo Container */}
          <figure className="flex flex-wrap justify-center items-center gap-8 mt-12 px-4">
            <img src="images/65eb96900f84cbfedf9ac42a_Untitled%20design%20%2816%29.png" alt="" className="w-24 h-auto opacity-70 hover:opacity-100 transition-opacity duration-200" />
            <img src="images/65e92be36ce317053dd1b052_mayo-clinic-logos-id5BVQunM6.png" alt="" className="w-16 h-auto opacity-70 hover:opacity-100 transition-opacity duration-200" />
            <img src="images/65e92b868e154fd9be08ead9_1%20%281%29.png" alt="" className="w-28 h-auto opacity-70 hover:opacity-100 transition-opacity duration-200" />
            <img src="images/65e92c17e7bce12a3e8f4206_fedex-7d76f96d96ecd8cd3991a39011277b1cc542391c733df628a43ea1883c186634.png" alt="" className="w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-200" />
          </figure>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="uui-page-padding-2 py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full text-sm font-semibold mb-6">
                Autonomous Reasoning Engine
              </div>
              <h2 className="text-4xl font-bold mt-4 text-white">
                Tailored For You, <br /> 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Ready in Minutes</span>
              </h2>
            </div>

            {/* Grid layout with two items per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16">
              {[
                {
                  icon: "images/65f1b1fe3ae71c9df4ceb2ec_brains.png",
                  title: "Intelligent Planning",
                  desc: "Transform complex ideas into actionable strategies with our advanced AI engine."
                },
                {
                  icon: "images/65f1b1357b1604dc28991677_RealTimeDate.png",
                  title: "Research Assistance",
                  desc: "Automatically gather relevant data from millions of trustworthy sources."
                },
                {
                  icon: "images/65f1b0593495106e5d9403e2_ProblemSOlcen.png",
                  title: "Enterprise Quality",
                  desc: "AI that speaks your industry's language, backed by deep sector knowledge."
                },
                {
                  icon: "images/65f1b05992e818e9bf811b35_PRecision.png",
                  title: "Transparent Reasoning",
                  desc: "Understand the 'why' behind every recommendation with our explainable AI."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors duration-200">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-10 w-10"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the sections with your existing container structure but enhanced styling */}
      <section className="section-12 bg-gray-900">
        {/* Your existing section content with enhanced styling */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              <strong className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                One Prompt, Full Results
              </strong>
            </h2>
            <p className="text-xl text-gray-400">
              Set your goal, and HelloScribe takes over. No back and forth needed.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Your existing feature cards with enhanced hover effects */}
          {[
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
            {
              icon: "images/6495259c227b3b839f5fc023_tool.svg",
              title: "Smart Planning Engine",
              desc: "Use advanced AI and proprietary tech to turn complex ideas into clear, actionable plans."
            },
          ].map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer bg-gray-800/50 hover:bg-white backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 group">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors duration-200">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-black">{feature.title}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed font-medium group-hover:text-gray-900">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>




      {/*ROI calculator */}
      <div className="w-layout-blockcontainer w-container pt-8">
        <div className="code-embed-2 w-embed w-script">
          <div id="helloscribe-roi-calculator" className="bg-gray-900 text-gray-300 max-w-lg mx-auto p-5 rounded-lg">
            <h2 className="text-center text-xl font-bold mb-4">HelloScribe ROI Calculator</h2>
            <form id="roiForm" onSubmit={(e) => {
              e.preventDefault();

              const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
              const traditionalHours = parseFloat(document.getElementById('traditionalHours').value);
              const plansPerMonth = parseFloat(document.getElementById('plansPerMonth').value);

              const helloScribeHours = 5 / 60; // 5 minutes per plan
              const helloScribeCost = 29; // monthly subscription cost

              const traditionalCost = hourlyRate * traditionalHours * plansPerMonth;
              const helloScribeTotalCost = (hourlyRate * helloScribeHours * plansPerMonth) + helloScribeCost;
              const savings = traditionalCost - helloScribeTotalCost;
              const timeSaved = (traditionalHours - helloScribeHours) * plansPerMonth;
              const roi = (savings / helloScribeCost) * 100;

              const resultDiv = document.getElementById('result');
              resultDiv.innerHTML = `
                <p>Monthly time saved: ${timeSaved.toFixed(2)} hours</p>
                <p>Monthly cost savings: $${savings.toFixed(2)}</p>
                <p>Return on Investment: ${roi.toFixed(2)}%</p>
                <p>With HelloScribe, you could save ${((traditionalHours - helloScribeHours) / traditionalHours * 100).toFixed(2)}% of your time on plan/proposal creation!</p>
              `;
            }}>
              <label htmlFor="hourlyRate" className="block mt-2">Your hourly rate ($):</label>
              <input type="number" id="hourlyRate" required className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 text-gray-300 rounded" />

              <label htmlFor="traditionalHours" className="block mt-2">Hours spent on a typical plan/proposal (traditional method):</label>
              <input type="number" id="traditionalHours" required className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 text-gray-300 rounded" />

              <label htmlFor="plansPerMonth" className="block mt-2">Number of plans/proposals per month:</label>
              <input type="number" id="plansPerMonth" required className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 text-gray-300 rounded" />

              <button type="submit" className="bg-pink-600 text-gray-300 border-none p-3 mt-5 cursor-pointer font-bold rounded-lg w-full">
                Calculate ROI
              </button>
            </form>

            <div id="result" className="mt-5 p-3 border border-pink-600 bg-gray-800 rounded text-gray-300">
              <p>Your ROI results will appear here after calculation.</p>
            </div>
          </div>
        
          <div className="centereditems text-center my-3">
            <div className="centereditems">
              <div className="centereditems _3">
                <h2 className="secondaryheading _2 _3">
                  <strong className="text-lg font-bold">
                    <br />
                    Reduce Time to Draft by +90% - Without Sacrificing Quality
                  </strong>
                </h2>
              </div>
            </div>
            <button className="bg-pink-600 text-gray-300 border-none p-3 px-14 mt-5 cursor-pointer font-bold rounded-lg "><a href="/" target="_blank" rel="noopener noreferrer" >Start Free</a></button>
          </div>
        </div>    
      </div>









    </div>
  );
};

export default HomePage;