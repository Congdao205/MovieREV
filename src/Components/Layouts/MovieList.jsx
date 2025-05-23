import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { TrailerContext } from '../../Contexts/TrailerContext';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const { handlerTrailer } = useContext(TrailerContext);
  const isLoading = !data || data.length === 0;
  const fakeArray = Array(5).fill(0);

  return (
    <div className="text-white px-4 md:px-10 py-6">
      <h2 className="uppercase text-xl font-bold mb-4">{title}</h2>
      <Carousel responsive={responsive} itemClass="px-2">
        {(isLoading ? fakeArray : data).map((item, index) => (
          <div key={item?._id || index} className="relative group rounded overflow-hidden bg-gray-800">
            <div className="aspect-[2/3] relative group-hover:scale-105 transition-transform duration-500 ease-in-out">
              {!isLoading ? (
                <>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
                  <img
                    src={item.poster_url.startsWith("http")
                      ? item.poster_url
                      : `${import.meta.env.VITE_IMG_URL}${item.poster_url}`
                    }
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 z-20 text-white space-x-5">
                    <p className="uppercase text-sm font-semibold">{item.name}</p>
                    <div className="mt-1 space-x-4">
                      <button
                        className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => handlerTrailer(item.slug)}
                      >
                        Xem trailer
                      </button>
                      <Link
                        to={`/Detail/${item.slug}`}
                        className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600"
                      >
                        Xem phim
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gray-700 animate-pulse rounded-md" />
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieList;
