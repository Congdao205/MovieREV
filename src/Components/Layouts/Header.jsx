import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react" // dùng icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-black p-3 mx-auto text-white">
      <div className="flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center space-x-3">
          <h1 className="text-red-500 text-[30px]">MovieRev</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to={'/'}>Home</Link>
            <a href="https://www.facebook.com/aohuucong.2024?locale=vi_VN" >About</a>
            <a href="https://www.facebook.com/aohuucong.2024?locale=vi_VN" >Contact</a>
          </nav>
        </div>

        {/* Search + Toggle */}
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Search"
            className="p-2 rounded text-zinc-500 hidden md:block"
            onChange={(e) => setTextSearch(e.target.value)} value={textSearch}
          />
          <Link to={`/Search/${textSearch}`} className="bg-red-500 px-3 py-1 rounded hidden md:block">Search</Link>

          {/* Hamburger Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-2 mt-2 md:hidden">
          <Link to={'/'}>Home</Link>
          <a href="https://www.facebook.com/aohuucong.2024?locale=vi_VN" className="block ">About</a>
          <a href="https://www.facebook.com/aohuucong.2024?locale=vi_VN" className="block ">Contact</a>
          <input type="text" placeholder="Search"
            className="p-2 rounded text-zinc-500"
            onChange={(e) => setTextSearch(e.target.value)} value={textSearch} />
          <Link to={`/Search/${textSearch}`} className="bg-red-500 px-3 py-1 rounded text-center w-max">Search</Link>
        </div>
      )}
    </header>
  )
}

export default Header
