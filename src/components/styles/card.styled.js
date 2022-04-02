import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
    padding: 1rem 2rem;

    h1 {
        font-size: 1.25rem;

    }

    p {
        font-size: 0.875rem;
        line-height: 1.313rem;
    }
`

export const CardImg = styled.img`
    width: 16rem;
    height: 16rem;
`