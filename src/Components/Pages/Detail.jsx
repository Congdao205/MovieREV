import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout'
import iconPlay from "../../assets/play.png"
import he from "he"

const Detail = () => {
  const [showMore, setShowMore] = useState(false);
  const [movie, setMovie] = useState();
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const { slug } = useParams();
  const handlerDetail = async () => {
    try {
      const url = `${import.meta.env.VITE_MOVIE_DETAIL_URL}${slug}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      }
      const response = await fetch(url, options);
      const data = await response.json();
      setMovie(data.movie)

      const description = data.movie.content;
      const shortDescription = description.slice(0, 180) + "...";

      setDescription(description);
      setShortDescription(shortDescription);

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handlerDetail();

  }, [slug])
  return (
    <DefaultLayout>
      {movie && (
        <div className="w-full h-auto lg:h-[800px] bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${movie.thumb_url})` }}>
          <div className="absolute w-full h-full opacity-40 
           bg-black" />
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-[30px] p-4 relative z-10">
            <div className='flex flex-col space-y-5 items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left'>
              {/* <p className="bg-gradient-to-r from-red-500 to-red-200
                    py-1 px-3 text-white text-md">
                TV Show
              </p> */}
              <div className="flex flex-col space-y-4">
                <h2 className="text-white text-3xl">{movie.name}</h2>
              </div>
              <p className='text-white'>
                {showMore ? he.decode(description) : he.decode(shortDescription)}
              </p>
              <div className='flex items-center space-x-3'>
                <button className='bg-zinc-700 px-4 py-2 text-white text-lg font-bold'
                  onClick={() => setShowMore(!showMore)}>
                  {showMore ? 'Ẩn bớt' : 'Chi tiết'}
                </button>
                <Link to={`/Watch/${slug}`} className='bg-red-700 p-2 text-white text-lg font-bold'>Xem Phim</Link>
                {/* <button className='bg-red-700 p-2 text-white text-lg font-bold'>Xem Phim</button> */}
              </div>
            </div>
            <div className='w-full lg:w-[50%] flex items-center justify-center'>
              <div className='w-[300px] h-[500px] relative group cursor-pointer'>
                <img src={movie.poster_url} className='h-full w-full object-cover' alt="Mật Danh: Kế Toán 2" />
                <div className='absolute w-full h-full top-0 left-0 
                      flex items-center justify-center 
                      backdrop-blur-sm opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 ease-out'>
                  <img src={iconPlay} className='w-16 h-16 relative z-10' alt="Icon Play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  )
}

export default Detail