function Hero() {
  return (
    <div>
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          <span className='text-orange-500'>
            Get guaranteed real and active
          </span>
          <br />
          <span className='text-gray-800'>followers in seconds!</span>
        </h1>
        <p className='text-gray-600 text-lg mb-8'>
          Only the best quality. 100% risk-free and completely anonymous.
        </p>

        {/* Social Media Icons */}
        <div className='flex justify-center gap-4 mb-12'>
          <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
            <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
              <div className='w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded'></div>
            </div>
          </div>
          <div className='w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold'>T</span>
          </div>
          <div className='w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center'>
            <div className='w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white ml-1'></div>
          </div>
          <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold text-xl'>f</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
