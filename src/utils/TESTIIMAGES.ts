// src/utils/TESTIIMAGES.ts

export interface ImageProps {
    url: string;
    alt: string;
  }
  
  export const TESTIIMAGES: ImageProps[] = [
    {
      url: 'images/testi-1.webp',
      alt: 'Testimonial Image 1',
    },
    {
      url: 'images/testi-2.webp',
      alt: 'Testimonial Image 1',
    },
    {
      url: 'images/testi-3.webp',
      alt: 'Testimonial Image 1',
    },
    {
      url: 'images/testi-4.webp',
      alt: 'Testimonial Image 1',
    },
    {
      url: 'images/testi-5.webp',
      alt: 'Testimonial Image 1',
    },
    {
      url: 'images/testi-6.webp',
      alt: 'Testimonial Image 1',
    },
    // Add more images as needed
  ];
  
  export interface TestiImagesProps {
    images: ImageProps[];
  }
  