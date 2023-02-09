import { BsTwitter } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { FooterStyle } from './FooterStyle'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <FooterStyle>
        <section className='foot__flex__container'>
            <p className='about'>About us</p>
            <p className='about'>Contact</p>
        </section>
        <section className='foot__flex__container'>
            <a  className='media' href='www.twiitter.com'>
            <BsTwitter/>Twitter
            </a>
            <a  className='media' href= 'www.facebook.com'>
            <AiFillFacebook/>Facebook
            </a>
        </section>    
    </FooterStyle>
  )
}

export default Footer