import { Link, useNavigate } from 'react-router-dom';
import{ useState } from 'react';

import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

import './Navbar.css'

const NavBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
    }

  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>  Movie Info</Link>
        </h2>
        <form>
            <input type="text" placeholder="Search" />
            <button type='submit'>
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
  )
}

export default NavBar
