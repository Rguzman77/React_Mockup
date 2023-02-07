import React from 'react'
import JoinButton from './JoinButton'
import landing from '../Assets/landing-page-girl.png'

type Props = {}

const Feelthemusic = (props: Props) => {
  return (
    <section>
    <img src={landing} alt="Landing page girl" />
    <h1>Feel The Music</h1>
    <p>Stream over 20 thousand song with one click</p>
    <JoinButton/>
    </section>  
    )
}

export default Feelthemusic