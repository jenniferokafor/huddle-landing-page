import styled from 'styled-components';
import {Logo} from './Header.styled';

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.darkBlue};
    padding: 5rem 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;

    @media (min-width: 64rem) {
        padding: 7.5rem 6.5rem 7.5rem 4rem;
        flex-direction: row;
        gap: 8.125rem;
    }
`

export const StyledFooterLogo = styled(Logo)`
    width: 6.5rem;

    @media (min-width: 64rem) {
        width: 9.5rem;
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 64rem) {
        margin-top: -1.75rem;
    }
`

export const ContactAndLocation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    @media (min-width: 64rem) {
        max-width: 23.688rem;

        p {
            font-size: 0.875rem;
        }
    }
`

export const AltPages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div p a {
        color: white;
        text-decoration: none;
    }
    

    @media (min-width: 64rem) {
        flex-direction: row;
        gap: 4rem;

        div p {
            font-size: 0.875rem;
        }

        div p:hover {
            text-decoration: underline;
        }
    }
`

export const SocialAndCopyright = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    @media (min-width: 64rem) {
        align-items: flex-start;
        gap: 5rem;

        div img:hover {
            filter: invert(49%) sepia(45%) saturate(1977%) hue-rotate(292deg) brightness(99%) contrast(103%);
        }

        p {
            font-size: 0.875rem;
        }
    } 
`