import React from 'react'
import S from 'styled-components'

export function Special(props) {
    

    return (
        <IngredientContainer>
            <TextContainer>
                <Label>Title:</Label>
                <Text>{props.special.title}</Text>
            </TextContainer>
            <TextContainer>
                <Label>Type:</Label>
                <Text>{props.special.type}</Text>
            </TextContainer>
            <TextContainer>
                <Label>Info:</Label>
                <Text>{props.special.text}</Text>
            </TextContainer>
    </IngredientContainer>
    )
}
export default Special;

//Special information
const IngredientContainer = S.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const TextContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
`;
const Label = S.span`
    font-size: 14px;
    color: #76ee74;
    width: fit-content;
    margin-right: 5px;
`;
const Text = S.p`
    color: #fff;
    font-size: 15px;
    width: fit-content;
    margin: 0;
`;
