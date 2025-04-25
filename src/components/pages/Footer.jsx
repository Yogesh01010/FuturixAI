import React, { useState } from 'react';

export default function CiplaFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const sections = [
    {
      title: 'About Cipla',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed nec commodo purus. Integer lacinia, libero non dictum fermentum, justo elit ultrices sapien, vitae volutpat massa velit in leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed nec commodo purus. Integer lacinia, libero non dictum fermentum, justo elit ultrices sapien, vitae volutpat massa velit in leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed nec commodo purus. Integer lacinia, libero non dictum fermentum, justo elit ultrices sapien, vitae volutpat massa velit in leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed nec commodo purus. Integer lacinia, libero non dictum fermentum, justo elit ultrices sapien, vitae volutpat massa velit in leo.',
    },
    {
      title: 'About Cipla',
      content:
        'Cipla is a renowned pharmaceutical brand committed to delivering affordable and innovative medicines. This section contains dummy text for layout testing. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Cipla is a renowned pharmaceutical brand committed to delivering affordable and innovative medicines. This section contains dummy text for layout testing. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">Cipla Price FAQs</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg font-medium">{section.title}</span>
            <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4">
              <p className="text-sm leading-relaxed text-gray-300">
                {section.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
