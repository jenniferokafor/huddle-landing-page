import styled from 'styled-components';
// import heroImg from '../assets/images/bg-hero-mobile.svg';

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.lightBlue};
    padding: 1.688rem 1rem 2.313rem 1rem;
    font-size: 10px;
    font-weight: 700;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    width: 6.5rem;
`

export const Hero = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    h1 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const Img = styled.img`
    max-width: 18.5rem;
`