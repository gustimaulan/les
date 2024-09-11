function StarRating() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center pt-2 mt-8 gap-2">
          <div className="flex items-center justify-center">
            <img
              src="./images/sd-6.webp"
              alt="sd"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
            />
            <img
              src="./images/calistung-2.webp"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
              alt="calistung"
            />
            <img
              src="./images/smp-1.webp"
              alt="smp"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
            />
            <img
              src="./images/sma-1.webp"
              alt="smp"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
            />
            <img
              src="./images/calistung-1.webp"
              alt="calistung"
              className="relative inline-flex w-12 h-12 rounded-full border-4 border-gray-700"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-yellow-400 text-2xl">★★★★★</p>{" "}
            <p className="text-sm">(99+ siswa telah mendaftar)</p>
          </div>
        </div>
        </section>
    )
}

export default StarRating