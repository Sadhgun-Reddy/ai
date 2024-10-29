import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content in a row */}
        <div className="flex flex-wrap justify-between items-start gap-8 mb-6">
          

          {/* Links section in a row */}
          <div className=" flex-wrap grid grid-cols-1 md:grid-cols-4 gap-28">

            {/* Logo and Description */}
            <div className="flex-shrink-0 max-w-[200px]">
                <a href="/" className="block mb-2">
                <img src="images/64966dab60a0e31c39d078a4_Layer%201.svg" alt="helloscribe" className="h-6" />
                </a>
                <p className="text-white text-xs">
                HelloScribe is the world's first Autonomous Reasoning Engine that generates comprehensive plans and proposals—in minutes.
                </p>
            </div>

            {/* Company Links */}
            <div >
              <h3 className="text-white font-semibold mb-2 text-sm">Company</h3>
              <div className="flex gap-4">
                <div className="space-y-1">
                  <a href="/home/helloscribe-about-us" className="block text-white hover:text-gray-900 text-xs">About Us</a>
                  <a href="/home/pricing" className="block text-white hover:text-gray-900 text-xs">Pricing</a>
                  <a href="/home/contact-us" className="block text-white hover:text-gray-900 text-xs">Contact</a>
                  <a href="/home/privacy" className="block text-white hover:text-gray-900 text-xs">Privacy</a>
                  <a href="/home/terms" className="block text-white hover:text-gray-900 text-xs">Terms</a>
                  <a href="/home/blog" className="block text-white hover:text-gray-900 text-xs">Blog</a>
                </div>
              </div>
            </div>

            {/* Support Links */}
            <div >
              <h3 className="text-white font-semibold mb-2 text-sm">Support</h3>
              <div className="flex gap-4">
                <div className="space-y-1">
                  <a href="/" className="block text-white hover:text-gray-900 text-xs">Help Center</a>
                  <a href="/" className="block text-white hover:text-gray-900 text-xs">Request Feature</a>
                  <a href="/" className="block text-white hover:text-gray-900 text-xs">Report Bug</a>
                  <a href="/" className="block text-white hover:text-gray-900 text-xs">Report Outage</a>
                  <a href="/" className="block text-white hover:text-gray-900 text-xs">Release Notes</a>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div >
              <div className="mb-3">
                <p className="text-white text-xs mb-1">Send feedback:</p>
                <a href="mailto:team@helloscribe.ai" className="inline-flex items-center space-x-1 text-white ">
                  <img src="images/64966f5ebd638777edaee5b6_mail.svg" alt="email" className="h-3 w-3" />
                  <span className="text-xs">team@helloscribe.ai</span>
                </a>
              </div>
            </div>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center  grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-xs text-white">© Copyright 2024 HelloScribe</div>


          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <a href="https://www.facebook.com/helloscribeai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <img src="images/649673a060a0e31c39d4648b_Facebook.svg" alt="Facebook" className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/helloscribeai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <img src="images/649674c51624e29a27b5ff37_Twitter.svg" alt="Twitter" className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/helloscribe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <img src="images/649674e11624e29a27b60e24_Instagram.svg" alt="Instagram" className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCJ6cZsMOzAPbJb5iLy62wBA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <img src="images/649674fd14b331014c5b0b32_YouTube.svg" alt="YouTube" className="h-4 w-4" />
            </a>
            <a href="https://www.pinterest.com/helloscribeAI/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <img src="images/64967510860a8ebaefe30555_Pintrest.svg" alt="Pinterest" className="h-4 w-4" />
            </a>
          </div>

          {/* Discord Link */}
          <div >
            <a 
              href="https://discord.gg/zVx8CFkq" 
              className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
            >
              Join Discord Community
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;