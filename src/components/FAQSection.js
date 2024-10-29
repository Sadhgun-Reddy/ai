import React, { useState } from 'react';

// Define an array of questions and answers
const questions = [
  {
    question: "What can HelloScribe generate?",
    answer: `HelloScribe is an automated system that generates detailed plans from start to finish using a proprietary Autonomous Reasoning Engine (ARE) powered by the world's most advanced Language Models.
    *This is not an exhaustive list:* Marketing Plans, Business Strategies, Financial Planning, etc.`
  },
  {
    question: "Is my user data private and secure?",
    answer: `Yes. HelloScribe uses the highest levels of encryption for all data. Your data is access-controlled and 100% owned by you. You can download or delete anytime. This includes documents you create within the platform, as well as login and billing information.`
  },
  {
    question: "Why choose HelloScribe?",
    answer: `HelloScribe's ARE is trained on vast industry-specific data, allowing it to understand nuances, terminology, and best practices in various fields. It provides real-time insights and adapts to evolving needs to support informed decision-making.`
  },
  {
    question: "What does it cost and how to pay?",
    answer: `HelloScribe starts at $29 per month. This covers the basic cost of the service and includes 400,000 tokens. We use a convenient tokenized billing system for topping up as needed. Secure payments are facilitated by Stripe.`
  },
  {
    question: "Can HelloScribe be used on mobile?",
    answer: `HelloScribe is a web application accessible from desktop, mobile phone, or tablet. Currently, there is no native Android or iOS app.`
  },
  {
    question: "Can I add my team?",
    answer: `Yes. You can add as many team members as you'd like for just $9 per month per user.`
  }
];

const FAQSection = () => {
  // Use a single state to manage open/close status for each question
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open state for each question based on its index
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-center mt-10">
      <div className="max-w-screen-2xl mx-auto text-white ">
        <h2 className="text-white">Common Questions</h2>
        <div className="container mx-auto ">
          {questions.map((item, index) => (
            <div key={index} className="accordion-items w-1/2 mx-auto my-4">
              <div
                className={`accordion-item-trigger-3 cursor-pointer bg-gray-900 rounded-lg flex items-center justify-between p-4 ${openIndex === index ? 'bg-gray-700' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <h4 className="accordion-heading">{item.question}</h4>
                <img
                  src="https://cdn.prod.website-files.com/607e1b2ba1855c3039f2d548/6495297e11407d44a30573bc_cheveron-down.svg"
                  loading="lazy"
                  alt="helloscribe"
                  className={`chevron-arrow transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="text-white p-4">
                  <p className="paragraph-18 text-white">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
