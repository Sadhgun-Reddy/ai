import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PopularReads = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const blogPosts = [
    {
      title: "The Beginner's Guide to Autonomous Reasoning Agents",
      link: "/post/autonomous-reasoning-agent-helloscribe",
      image: "https://cdn.prod.website-files.com/607e1b2ba1855c18abf2d554/6529c6ae7072c8fe22d9e7aa_amplify.png",
      description: "Enter a world of extraordinary technology, where artificial intelligence has taken on the power of human reasoning.",
      tags: ["Chat AI", "ART", "CREATIVE"]
    },
    {
      title: "A Touch of Wit: Clever and Humorous Ad Headlines That Stick",
      link: "/post/a-touch-of-wit-clever-and-humorous-ad-headlines-that-stick",
      image: "https://cdn.prod.website-files.com/607e1b2ba1855c18abf2d554/6529c6ae7072c8fe22d9e7aa_amplify.png",
      description: "Looking for inspiration to create clever and humorous ad headlines that will leave a lasting impression?",
      tags: ["Chat AI", "ART", "CREATIVE"]
    },
    {
      title: "The Future of Content Creation with AI",
      link: "/post/future-of-content-creation-ai",
      image: "https://cdn.prod.website-files.com/607e1b2ba1855c18abf2d554/6529c6ae7072c8fe22d9e7aa_amplify.png",
      description: "Discover how artificial intelligence is revolutionizing the way we create and consume content.",
      tags: ["Chat AI", "CREATIVE", "TECH"]
    },
    {
    title: "The Future of Content Creation with AI",
    link: "/post/future-of-content-creation-ai",
    image: "https://cdn.prod.website-files.com/607e1b2ba1855c18abf2d554/6529c6ae7072c8fe22d9e7aa_amplify.png",
    description: "Discover how artificial intelligence is revolutionizing the way we create and consume content.",
    tags: ["Chat AI", "CREATIVE", "TECH"]
    },
    {
    title: "The Future of Content Creation with AI",
    link: "/post/future-of-content-creation-ai",
    image: "https://cdn.prod.website-files.com/607e1b2ba1855c18abf2d554/6529c6ae7072c8fe22d9e7aa_amplify.png",
    description: "Discover how artificial intelligence is revolutionizing the way we create and consume content.",
    tags: ["Chat AI", "CREATIVE", "TECH"]
    },
    {
    title: "The Future of Content Creation with AI",
    link: "/post/future-of-content-creation-ai",
    image: "https://cdn.prod.website-files.com/607e1b2ba1855c18abf2d554/6529c6ae7072c8fe22d9e7aa_amplify.png",
    description: "Discover how artificial intelligence is revolutionizing the way we create and consume content.",
    tags: ["Chat AI", "CREATIVE", "TECH"]
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-12 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {/* Group blog posts in sets of three */}
              {Array(totalPages).fill().map((_, pageIndex) => (
                <div key={pageIndex} className="flex min-w-full gap-6 ">
                  {blogPosts
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((post, index) => (
                      <div 
                        key={index}
                        className="w-1/3 bg-black rounded-xl p-5"
                      >
                        <a 
                          href={post.link}
                          className="block group hover:opacity-95 transition-opacity"
                        >
                          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-white mb-4 line-clamp-2">
                            {post.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-black"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Only show navigation buttons if there's more than one page */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularReads;