import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import { TrailerContext } from '../../Contexts/TrailerContext';

const Search = () => {
  const { handlerTrailer } = useContext(TrailerContext);
  const [videoSearch, setVideoSearch] = useState("");
  const { keyword } = useParams();

  const handlerSearch = async (keyword) => {
    setVideoSearch([])
    try {
      const url = `${import.meta.env.VITE_MOVIE_SEARCH_URL}${keyword}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      }
      const response = await fetch(url, options);
      const data = await response.json();
      setVideoSearch(data.data.items);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handlerSearch(keyword);
  }, [keyword])
  return (
    <DefaultLayout>
      <div className='text-white p-10'>
        <h2 className="uppercase text-xl font-bold mb-4">Kết Quả Tìm Kiếm {keyword}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {videoSearch && videoSearch.map((item) => (
            <div
              key={item._id}
              className="relative group rounded overflow-hidden bg-gray-800"
            >
              <div className="aspect-[2/3] relative group-hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_url}`}
                  className="h-full w-full object-cover"
                  alt={item.name}
                />
                <div className="absolute bottom-3 left-3 z-20 text-white space-x-5">
                  <p className="uppercase text-sm font-semibold">{item.name}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <button
                      className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 whitespace-nowrap"
                      onClick={() => handlerTrailer(item.slug)}
                    >
                      Xem trailer
                    </button>
                    <Link
                      to={`/Detail/${item.slug}`}
                      className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 whitespace-nowrap"
                    >
                      Xem phim
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Search