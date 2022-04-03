import logo from '../assets/images/logo.svg';
import location from '../assets/images/icon-location.svg';
import phone from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';
import facebook from '../assets/images/Group-17.svg';
import twitter from '../assets/images/Group-16.svg';
import linkedin from '../assets/images/Group-15.svg';
import {Logo} from './styles/Header.styled';
import {AltPages, ContactAndLocation, ContactWrapper, SocialAndCopyright, StyledFooter} from './styles/Footer.styled';

export default function Footer () {
    return (
        <StyledFooter>
            <Logo src={logo} />
            {/* contact and location */}
            <ContactWrapper>

                <ContactAndLocation>
                    <img src={location} alt='location icon'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </ContactAndLocation>

                <ContactAndLocation>
                    <img src={phone} alt='phone icon'/>
                    <p>+1-543-123-4567</p>
                </ContactAndLocation>

                <ContactAndLocation>
                    <img src={email} alt='email icon' />
                    <p>example@fylo.com</p>
                </ContactAndLocation>

            </ContactWrapper>

            {/* links to other pages */}
                <AltPages>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>What We Do</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Career</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </AltPages>

            <SocialAndCopyright>
            {/* social media links */}
                <div>
                    <img src={facebook} alt='facebook logo' />
                    <img src={twitter} alt='twitter logo' />
                    <img src={linkedin} alt='linkedin logo' />
                </div>
            {/* copyright text */}
                <p>© Copyright 2018 Huddle. All rights reserved.</p>
            </SocialAndCopyright>

        </StyledFooter>
    )
}