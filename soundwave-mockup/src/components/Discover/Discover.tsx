import covers from '../../Assets/covers.jpg'
import microphone from '../../Assets/microphone.svg'
import albums from '../../Assets/albums.svg'
import more from '../../Assets/more.svg'
import { Footer } from '../Footer/Footer'
import { DiscoverStyle } from './DiscoverStyle'
type Props = {}

const Discover = (props: Props) => {
  return (
    <>
    <DiscoverStyle>
    <p className='discover'>Discover new music</p>
    <section>
        <div><img src={microphone} alt="Charts" />Charts</div>
        <div><img src={albums} alt="Albums" />Albums</div>
        <div><img src={more} alt="More info" />More</div>
    </section>
    <p>By joining you can benefit by listening to the latest albums released.</p>
    <img className='albumcover' src={covers} alt="Album covers" />
    
    </DiscoverStyle>
    <Footer/>
    </>
  )
}

export default Discover