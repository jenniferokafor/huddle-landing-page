import footerLogo from '../assets/images/white-logo.svg';
import location from '../assets/images/icon-location.svg';
import phone from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';
import facebook from '../assets/images/Group-17.svg';
import twitter from '../assets/images/Group-16.svg';
import linkedin from '../assets/images/Group-15.svg';
import {Logo} from './styles/Header.styled';
import {AltPages, ContactAndLocation, ContactWrapper, SocialAndCopyright, StyledFooter, StyledFooterLogo} from './styles/Footer.styled';

export default function Footer () {
    return (
        <StyledFooter>
            
            {/* logo, contact, and location */}
            <ContactWrapper>
                <StyledFooterLogo src={footerLogo} />
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
                    <div>
                    <p><a href='#'>About Us</a></p>
                    <p><a href='#'>What We Do</a></p>
                    <p><a href='#'>FAQ</a></p>
                    </div>

                    <div>
                    <p><a href='#'>Career</a></p>
                    <p><a href='#'>Blog</a></p>
                    <p><a href='#'>Contact Us</a></p>
                    </div>
                </AltPages>

            <SocialAndCopyright>
            {/* social media links */}
                <div>
                    <a href='#'><img src={facebook} alt='facebook logo' /></a>
                    <a href='#'><img src={twitter} alt='twitter logo' /></a>
                    <a href='#'><img src={linkedin} alt='linkedin logo' /></a>
                </div>
            {/* copyright text */}
                <p>© Copyright 2018 Huddle. All rights reserved.</p>
            </SocialAndCopyright>

        </StyledFooter>
    )
}