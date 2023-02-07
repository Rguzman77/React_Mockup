import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
        <Link to="/soundwave">Soundwave</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/join">Join</Link>
    </div>
  )
}

export default Navbar