import React from 'react'
import covers from '../../Assets/covers.jpg'
import microphone from '../../Assets/microphone.svg'
import albums from '../../Assets/albums.svg'
import more from '../../Assets/more.svg'
import { Footer } from '../Customs'
import { DiscoverStyle } from './DiscoverStyle'
type Props = {}

const Discover = (props: Props) => {
  return (
    <DiscoverStyle>
    <p className='discover'>Discover new music</p>
    <section>
        <div><img src={microphone} alt="Charts" />Charts</div>
        <div><img src={albums} alt="Albums" />Albums</div>
        <div><img src={more} alt="More info" />More</div>
    </section>
    <p>By joining you can benefit by listening to the latest albums released.</p>
    <img src={covers} alt="Album covers" />
    
    <Footer/>
    </DiscoverStyle>
  )
}

export default Discover