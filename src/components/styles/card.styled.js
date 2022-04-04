import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
    padding: 1rem 2rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }

    div h3 {
        font-size: 1.25rem;

    }

    div p {
        font-size: 0.875rem;
        line-height: 1.313rem;
    }

    @media (min-width: 64rem) {
        flex-direction: row-reverse;
        justify-content: space-between;

        &:nth-child(2) {
            flex-direction: row;
            padding-left: 7.5rem;
        }

        div {
            align-items: flex-start;
            text-align: left;
            max-width: 30.5rem;
            margin: 9.375rem 0 9.375rem 7.5rem;
        }

        div h3 {
            font-size: 1.75rem;
        }
    }
`

export const CardImg = styled.img`
    width: 16rem;
    height: 16rem;

    @media (min-width: 64rem) {
        width: 22.438rem;
        height: 17.813rem;
    }
`
