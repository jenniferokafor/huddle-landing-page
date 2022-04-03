import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.darkBlue};
    padding: 5rem 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;

    @media (min-width: 64rem) {
        flex-direction: row;
        gap: 8.125rem;
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ContactAndLocation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`

export const AltPages = styled.ul`
    li {
        color: white;
        margin-top: .75rem;
        margin-bottom: .75rem;
    }

    li a {
        color: white;
        text-decoration: none;
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
`