import React from 'react'
import S from 'styled-components'
import Special from './Special';

export function Ingredient(props) {
    const {amount, measurement, name} = props.ingredient;

    const capitalizeFirstChar = (string) => {
        const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        return capitalizedString
    }

    const capitalizedName = capitalizeFirstChar(name);
    const capitalizeMeasurement = capitalizeFirstChar(measurement);

    return (
        <IngredientContainer>
            <TextContainer>
                <Label>Amount: </Label><Text>{amount}</Text>
            </TextContainer>
            <TextContainer>
                <Label>Measurement: </Label><Text>{capitalizeMeasurement}</Text>
            </TextContainer>
            <TextContainer>
                <Label>Name: </Label><Text>{capitalizedName}</Text>
            </TextContainer>
            {props.specials && props.specials.map(special => special.ingredientId == props.ingredient.uuid ? <Special special={special}/> : null)}
        </IngredientContainer>
    )
}
export default Ingredient;

const IngredientContainer = S.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #0e0e0e;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 20px;
    width: 28%;
    box-shadow: 0px 0px 20px 12px #171717;
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

