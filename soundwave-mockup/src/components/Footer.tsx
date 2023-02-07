import { BsTwitter } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
        <section>
            <p>About us</p>
            <p>Contact</p>
        </section>
        <section>
            <a href='www.twiitter.com'>
            <BsTwitter/>Twitter
            </a>
            <a href= 'www.facebook.com'>
            <AiFillFacebook/>Facebook
            </a>
        </section>    
    </>
  )
}

export default Footer