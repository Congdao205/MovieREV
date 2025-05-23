import { Route, Routes } from "react-router"
import Home from "../Components/Pages/Home"
import Detail from "../Components/Pages/Detail"
import Search from "../Components/Pages/Search"
import Watch from "../Components/Pages/Watch"

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Detail/:slug' element={<Detail />} />
      <Route path='/Watch/:slug' element={<Watch />} />
      <Route path='/Search/:keyword' element={<Search />} />
    </Routes>
  )
}

export default RouterConfig