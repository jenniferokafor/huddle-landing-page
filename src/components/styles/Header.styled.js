import styled from 'styled-components';
import background from '../../assets/images/bg-hero-desktop.svg';

export const StyledHeader = styled.header`
background-color: ${({theme}) => theme.colors.lightBlue};
    padding: 1.688rem 1rem 2.313rem 1rem;
    font-size: 10px;
    font-weight: 700;

    @media (min-width: 64rem) {
        padding: 4.813rem 5.625rem 4.5rem 5rem;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    width: 6.5rem;

    @media (min-width: 64rem) {
        width: 12.5rem;
    }
`

export const Hero = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    @media (min-width: 64rem) {
        flex-direction: row;
        align-items: flex-start;
    }
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

    @media (min-width: 64rem) {
        max-width: 33.5rem;
        align-items: flex-start;
        text-align: left;
        margin-top: 9rem;

        h1 {
            font-size: 2.5rem;
        }
    }
    
`

export const Img = styled.img`
    max-width: 18.5rem;

    @media (min-width: 64rem) {
        max-width: 42.5rem;
    }
`