import { GALLERYIMAGES, ImagesProps } from "../utils/GALLERYIMAGES"


  const Gallery: React.FC<ImagesProps> = () => {

  return (
    <div className="py-8 border-t">
    <h2 className="text-3xl font-bold py-4">Galeri Mengajar</h2>
      <div className="grid grid-cols-2 gap-2">
      {GALLERYIMAGES.map((image, index) => (
        <div key={index} className="p-2">
          <img src={image.url} alt={image.alt} className="rounded-t-lg h-52 w-full object-cover object-center" loading="lazy" />
          <p className="text-center text-xs bg-gray-100 p-2 rounded-b-lg">{image.caption}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Gallery;