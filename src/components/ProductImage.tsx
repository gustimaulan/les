import { useState } from 'react';

function ProductImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="product-images">
      <div className="max-w-screen-sm mx-auto relative">
        {/* Placeholder image from CDN */}
        <img
          src="https://via.placeholder.com/640x640?text=Loading+Image..." 
          alt="loading placeholder"
          className={`w-full h-auto object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Real image */}
        <img
          src="images/les-privat-1.webp"
          alt="les privat"
          className={`w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </section>
  );
}

export default ProductImage;
