import { StyledHeader, Nav, Logo, Hero, HeroContent, Img } from "./styles/Header.styled";
import logo from '../assets/images/logo.svg';
import { Button, PinkButton, PinkButtonHeader } from "./styles/Button";
import heroImg from '../assets/images/illustration-mockups.svg'

export default function Header () {
    return (
        <StyledHeader>
            <Nav>
                <Logo src={logo} />
                <Button>Try It Free</Button>
            </Nav>

            <Hero>
                <HeroContent>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
                    <PinkButtonHeader>Get Started for Free </PinkButtonHeader>
                </HeroContent>

                <Img src={heroImg}/>
            </Hero>
        </StyledHeader>
    )
}
