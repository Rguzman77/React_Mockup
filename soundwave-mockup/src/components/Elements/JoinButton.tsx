import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from './JoinButtonStyle'

type Props = {}

const JoinButton = (props: Props) => {
  return (
    <StyledButton>
    <Link to="/join">Join</Link>
    </StyledButton>
  )
}

export default JoinButton