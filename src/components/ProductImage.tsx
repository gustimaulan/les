function ProductImage({ src = "images/les-privat-1.webp" }: { src?: string }) {
  return (
    <section id="product-images">
      <div className="container max-w-screen-sm text-center mx-auto bg-gray-400">
        <img src={src} alt="les privat" 
        className="w-full" 
        loading="eager"
         />
      </div>
    </section>
  )
}

export default ProductImage