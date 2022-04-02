import styled from "styled-components";

export const Button = styled.button`
    width: 6rem;
    height: 1.5rem;
    border: none;
    border-radius: 24px;
    background-color: ${({theme}) => theme.colors.lightBlue};
    font-weight: 700;

    &:hover {
        background-color: ${({theme}) => theme.colors.white};
    }
`;

export const PinkButton = styled(Button)`
    width: 15rem;
    height: 2.5rem;
    background-color: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.white};

    &:hover {
        background-color: ${({theme}) => theme.colors.activePink};
    }
`;