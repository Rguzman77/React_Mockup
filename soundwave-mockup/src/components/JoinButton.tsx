import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const JoinButton = (props: Props) => {
  return (
    <button><Link to="/join">Join</Link></button>
  )
}

export default JoinButton