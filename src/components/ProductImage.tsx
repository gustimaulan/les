import { useState } from "react"

function ProductImage() {
  const [isloaded, setIsLoaded] = useState(false)
  return (
    <section id="product-images">
      <div className="flex items-center justify-center size-[640px] text-center mx-auto bg-gray-400">
        <div 
        className={`text-2xl txt-gray-300 w-full + ${isloaded ? "hidden" : "block" }`}></div>
        <img src="images/les-privat-1.webp" alt="les privat" 
        className={`w-full + ${isloaded ? "opacity-100" : "opacity-0"}`} 
        onLoad={() => {setIsLoaded(true)}} />
      </div>
    </section>
  )
}

export default ProductImage