import React from 'react'
import covers from '../Assets/covers.jpg'
import microphone from '../Assets/microphone.svg'
import albums from '../Assets/albums.svg'
import more from '../Assets/more.svg'
type Props = {}

const Discover = (props: Props) => {
  return (
    <>
    <section>
        <h2>Discover new music</h2>
        <div><img src={microphone} alt="Charts" />Charts</div>
        <div><img src={albums} alt="Albums" />Albums</div>
        <div><img src={more} alt="More info" />More</div>
        <p>By joining you can benefit by listening to the latest albums released.</p>
    </section>
    <section>
        <img src={covers} alt="Album covers" />
    </section>
    </>
  )
}

export default Discover