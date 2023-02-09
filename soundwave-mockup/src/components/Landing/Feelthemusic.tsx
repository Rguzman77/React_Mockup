import JoinButton from '../Elements/JoinButton'
import landing from '../../Assets/landing-page-girl.png'
import { Landing } from './LandingStyle'

type Props = {}

const Feelthemusic = (props: Props) => {
  return (
    <Landing>
      <img src={landing} alt="Landing page girl" />
      <div className='cta'>
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand song with one click</p>
        <JoinButton/>
      </div>
    </Landing>
    )
}

export default Feelthemusic