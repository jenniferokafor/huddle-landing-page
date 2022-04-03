import styled from 'styled-components';

export const CtaWrapper = styled.section`
background: linear-gradient(180deg, ${({theme}) => theme.colors.white} 50%, ${({theme}) => theme.colors.darkBlue} 50%);
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`

export const CtaStyled = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 22rem;
    height: 11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-radius: 15px;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.0710768);
`