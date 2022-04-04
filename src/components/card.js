import { StyledCard, CardImg } from "./styles/card.styled";
import { CardWrapper } from "./styles/container.styled";

export default function Card (props) {
    return (
            <StyledCard>
                <CardImg src={props.item.image} />
                <div>
                    <h3>{props.item.title}</h3>
                    <p>{props.item.body}</p>
                </div>
            </StyledCard>
    )
}