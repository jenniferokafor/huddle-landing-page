import styled from 'styled-components';
import { PinkButton, PinkButtonCta } from './styles/Button';
import { CtaWrapper, CtaStyled } from './styles/Cta.styled';

export default function Cta () {
    return (
        <CtaWrapper>
            <CtaStyled>
                <h3>Ready To Build Your Community?</h3>
                <PinkButtonCta type='button'>Get Started For Free</PinkButtonCta>
            </CtaStyled>
        </CtaWrapper>
    
    )
}