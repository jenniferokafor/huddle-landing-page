import styled from "styled-components";

export const Button = styled.button`
    width: 6rem;
    height: 1.5rem;
    border: none;
    border-radius: 24px;
    background-color: ${({theme}) => theme.colors.lightBlue};
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.white};
    }

    @media (min-width: 64rem) {
        width: 12.5rem;
        height: 3rem;
        font-size: 0.875rem;
    }
`;

{/* pink button derivative for header and footer sections */}


export const PinkButton = styled(Button)`
    background-color: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.white};

    &:hover {
        background-color: ${({theme}) => theme.colors.activePink};
    }
`;

export const PinkButtonHeader = styled(PinkButton)`
    width: 15rem;
    height: 2.5rem;

    @media (min-width: 64rem) {
        width: 17.5rem;
        height: 3.5rem;
        border-radius: 28px;
    }
`

export const PinkButtonCta = styled(PinkButton)`
    width: 12.5rem;
    height: 2.5rem;

    @media (min-width: 64rem) {
        width: 25rem;
        height: 5rem;
        font-size: 1.25rem;
        border-radius: 40px;
    }
`
