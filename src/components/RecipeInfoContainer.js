import React from 'react'
import S from 'styled-components';
export function Recipeinfocontainer(props) {
    

    return (
        <AdditionalInformationContainer>
          <InfoContainer>
            <Label>Prep Time: </Label>
            <AdditionalInformation>{props.prepTime}</AdditionalInformation>
          </InfoContainer>
          <InfoContainer>
            <Label>Cooking Time: </Label>
            <AdditionalInformation>{props.cookTime}</AdditionalInformation>
          </InfoContainer>
          <InfoContainer>
            <Label>Servings: </Label>
            <AdditionalInformation>{props.servings}</AdditionalInformation>
          </InfoContainer>
          <InfoContainer>
            <Label>Level: </Label>
            <AdditionalInformation>Beginner</AdditionalInformation>
          </InfoContainer>
        </AdditionalInformationContainer>
    )
}
export default Recipeinfocontainer;
const AdditionalInformationContainer = S.section`
    width: 60%;
    align-items: baseline;
    float: right;
`;
const InfoContainer = S.div`
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: inline-flex;
`;
const Label = S.span`
    color: #76ee74;
    font-size: 22px;
    font-weight: bold;
    margin-right: 5px;
`;
const AdditionalInformation = S.p`
    color: #fff;
    font-size: 20px;
    margin: 0;
`;