import styled from 'styled-components';
import { PinkButton } from './styles/Button';
import { CtaWrapper, CtaStyled } from './styles/Cta.styled';

export default function Cta () {
    return (
        <CtaWrapper>
            <CtaStyled>
                <h3>Ready To Build Your Community?</h3>
                <PinkButton>Get Started For Free</PinkButton>
            </CtaStyled>
        </CtaWrapper>
       
    )
}