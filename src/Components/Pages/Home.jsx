import { useEffect, useState } from 'react';
import Header from '../Layouts/Header'
import Banner from '../Layouts/Banner'
import MovieList from '../Layouts/MovieList'
import DefaultLayout from '../Layouts/DefaultLayout';

const Home = () => {
  const [movieNew, setMovieNew] = useState([]);
  const [movieSeries, setMovieSeries] = useState([]);
  const [movieSingle, setMovieSingle] = useState([]);
  const [cartoon, setCartoon] = useState([]);
  useEffect(() => {
    const handlerMovieList = async () => {
      const url1 = `${import.meta.env.VITE_MOVIE_LIST_URL}`;
      const url2 = `${import.meta.env.VITE_MOVIE_SINGLE_URL}`;
      const url3 = `${import.meta.env.VITE_MOVIE_SERIES_URL}`;
      const url4 = `${import.meta.env.VITE_MOVIE_CARTOON_URL}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      };
      const [res1, res2, res3, res4] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
        fetch(url4, options)
      ])
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const data4 = await res4.json();
      setMovieNew(data1.items);
      setMovieSeries(data2.data.items);
      setMovieSingle(data3.data.items);
      setCartoon(data4.data.items);

    }
    handlerMovieList()
  }, []);

  return (
    <DefaultLayout>
      <Banner />
      <MovieList title="Phim Mới" data={movieNew} />
      <MovieList title="Phim Lẻ" data={movieSingle} />
      <MovieList title="Phim Bộ" data={movieSeries} />
      <MovieList title="Phim Hoạt Hình" data={cartoon} />
    </DefaultLayout>
  )
}

export default Home