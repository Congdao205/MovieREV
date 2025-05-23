import { useState } from 'react';
import iconRating from '../../assets/rating.png';
import iconRatingHalf from '../../assets/rating-half.png';
import poster from '../../assets/poster.png';
import banner from '../../assets/banner.png';
import iconPlay from '../../assets/play.png';

const Banner = () => {
  const [showMore, setShowMore] = useState(false);

  const description = `Khi một người quen cũ bị sát hại, Wolff buộc phải giải quyết vụ án. Nhận ra rằng cần phải có những biện pháp cực đoan hơn,
  Wolff đã chiêu mộ người anh trai xa cách và cực kỳ nguy hiểm của mình, Brax, để giúp đỡ. Bằng cách hợp tác với Marybeth Medina, họ đã phát hiện ra một âm mưu chết người, trở thành mục tiêu của một mạng lưới sát thủ tàn nhẫn, những kẻ sẽ không từ bất cứ thủ đoạn nào để giữ bí mật của họ được chôn vùi.`;

  const shortDescription = description.slice(0, 180) + '...';

  return (
    <div className="w-full h-auto lg:h-[600px] bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute w-full h-full opacity-40 bg-black" />
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-[30px] p-4 relative z-10">

        {/* Left content */}
        <div className='flex flex-col space-y-5 items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left'>
          <p className="bg-gradient-to-r from-red-500 to-red-200 py-1 px-3 text-white text-sm md:text-md">
            TV Show
          </p>

          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              Mật Danh: Kế Toán 2
            </h2>
            <div className="flex justify-center lg:justify-start items-center space-x-2 md:space-x-3">
              <img src={iconRating} className='w-6 h-6 md:w-8 md:h-8' alt="Icon Rating" />
              <img src={iconRating} className='w-6 h-6 md:w-8 md:h-8' alt="Icon Rating" />
              <img src={iconRating} className='w-6 h-6 md:w-8 md:h-8' alt="Icon Rating" />
              <img src={iconRating} className='w-6 h-6 md:w-8 md:h-8' alt="Icon Rating" />
              <img src={iconRatingHalf} className='w-6 h-6 md:w-8 md:h-8' alt="Icon Rating Half" />
            </div>
          </div>

          <p className='text-white text-sm md:text-base'>
            {showMore ? description : shortDescription}
          </p>

          <div className='flex justify-center lg:justify-start items-center space-x-3'>
            <button
              onClick={() => setShowMore(!showMore)}
              className='bg-zinc-700 px-4 py-2 text-white text-sm md:text-lg font-bold'>
              {showMore ? 'Ẩn bớt' : 'Chi tiết'}
            </button>
            <button className='bg-red-700 px-4 py-2 text-white text-sm md:text-lg font-bold'>Xem Phim</button>
          </div>
        </div>

        {/* Right content */}
        <div className='w-full lg:w-[50%] flex items-center justify-center'>
          <div className='w-[220px] md:w-[260px] lg:w-[300px] h-[400px] md:h-[450px] lg:h-[500px] relative group cursor-pointer'>
            <img src={poster} className='h-full w-full object-cover' alt="Mật Danh: Kế Toán 2" />
            <div className='absolute w-full h-full top-0 left-0 
              flex items-center justify-center 
              backdrop-blur-sm opacity-0 group-hover:opacity-100
              transition-opacity duration-500 ease-out'>
              <img src={iconPlay} className='w-12 h-12 md:w-16 md:h-16 relative z-10' alt="Icon Play" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner;
