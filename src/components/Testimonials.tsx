// src/components/Testimonials.tsx
import React from 'react';
import { TestiImagesProps, TESTIIMAGES } from '../utils/TESTIIMAGES';

const Testimonials: React.FC<TestiImagesProps> = () => {
  return (
    <div className="py-8 border-t mt-16">
      <h2 className="text-3xl font-bold py-4">Testimoni</h2>
      <div className="grid grid-cols-2 gap-2 items-center justify-center">
        {TESTIIMAGES.map((image, index) => (
          <div key={index} className="bg-gray-100 rounded-lg mx-auto">
            <img src={image.url} alt={image.alt} className="rounded-lg overflow-hidden" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
