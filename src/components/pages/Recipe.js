import React, { useState, useEffect } from "react";
import S from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTag } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import MainTitle from "../titles/MainTitle.js";
import SubTitle from "../titles/SubTitle.js";
import Ingredient from "../Ingredient";
import RecipeForm from "../forms/RecipeForm";

export function Recipe(props) {
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state.recipe);
  const [specials, setSpecials] = useState([]);
  const [isFormActive, setIsFormActive] = useState(false);

  const instructionArray = recipe.directions && recipe.directions.map(
    (instruction) => instruction.instructions
  );
  const InstructionString = instructionArray && instructionArray.join(" ");

  useEffect(() => {
    axios
      .get("http://localhost:3001/specials")
      .then((res) => {
        console.log(res);
        setSpecials(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleActiveForm = () => {
      console.log(isFormActive);
      isFormActive === false ? setIsFormActive(true) : setIsFormActive(false);
  }
  return (
    <Main>
      <RecipeInformationContainer>
        <EditButton onClick={toggleActiveForm}>Edit</EditButton>
        <FormContainer isFormActive={isFormActive} >
          <RecipeForm setIsFormActive={setIsFormActive} recipe={recipe} setRecipe={setRecipe}/>
        </FormContainer>
        <MainTitle title={recipe.title} />
        <Image src={`../public${recipe.images.full}`} />
        <AdditionalInformationContainer>
          <InfoContainer>
            <Label>Prep Time: </Label>
            <AdditionalInformation>{recipe.prepTime}</AdditionalInformation>
          </InfoContainer>
          <InfoContainer>
            <Label>Cooking Time: </Label>
            <AdditionalInformation>{recipe.cookTime}</AdditionalInformation>
          </InfoContainer>
          <InfoContainer>
            <Label>Servings: </Label>
            <AdditionalInformation>{recipe.servings}</AdditionalInformation>
          </InfoContainer>
          <InfoContainer>
            <Label>Level: </Label>
            <AdditionalInformation>Beginner</AdditionalInformation>
          </InfoContainer>
        </AdditionalInformationContainer>
        <InstructionsContainer>
          <SubTitle title={"Instructions"} />
          <Instructions>{InstructionString}</Instructions>
        </InstructionsContainer>
        <IngreidentsContainer>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient) => (
              <Ingredient ingredient={ingredient} specials={specials} />
            ))}
        </IngreidentsContainer>
        <SocialIcons>
          <LikeContainer>
            <Icon icon={faHeart} />
            <IconOverlayContainer>
              <IconOverlayText>Like</IconOverlayText>
            </IconOverlayContainer>
          </LikeContainer>
          <LikeContainer>
            <Icon icon={faFacebookF} />
            <IconOverlayContainer>
              <IconOverlayText>Share</IconOverlayText>
            </IconOverlayContainer>
          </LikeContainer>
          <LikeContainer>
            <Icon icon={faTag} />
            <IconOverlayContainer>
              <IconOverlayText>Save</IconOverlayText>
            </IconOverlayContainer>
          </LikeContainer>
        </SocialIcons>
        <DateContainer>
          <Date>Posted: {recipe.postDate}</Date>
          <Date>Edited: {recipe.editDate}</Date>
        </DateContainer>
      </RecipeInformationContainer>
    </Main>
  );
}
export default Recipe;

const Main = S.main`
    width: 75%;
    margin: 0 auto;
`;
const RecipeInformationContainer = S.section`
    position: relative;
`;
const Image = S.img`
    width: 30%;
    min-width: 400px;
    height: auto;
    border-radius: 15px;
    float: left;
    box-shadow: 0px 0px 20px 12px #171717;
`;
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

// Instructions
const InstructionsContainer = S.section`
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    float: right;
    margin-top: 20px;
`;
const Instructions = S.p`
    font-size: 18px;
    margin-bottom: 5px;
    color: #fff;
`;

// Ingredients
const IngreidentsContainer = S.section`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
    float: right;
`;
// SocialIcon
const SocialIcons = S.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`;
const IconOverlayContainer = S.div`
    display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  transition: all ease-in-out 200ms;
  position: absolute;
  width: 100%;
  border-radius: 50%;
`;
const Icon = S(FontAwesomeIcon)`
  font-size: 20px;
  color: #9d74ee;
  transition: all ease-in-out 180ms;
`;
const LikeContainer = S.div`
  background-color: transparent;
  border: 2px solid #9d74ee;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0px 0px 20px 12px #171717;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
  &:hover  {
    cursor: pointer;
    background-color: #9d74ee;
    ${Icon} {
    //   color: #76ee74;
    display: none;
    }
    ${IconOverlayContainer} {
        width: 100%;
        position: absolute;
        transform: translateY(0);
        border: 2px solid #9d74ee;
        background-color: #9d74ee;
    }
  }
`;

const IconOverlayText = S.p`
  font-size: 14px;
  color: #fff;
  
`;
// Dates
const DateContainer = S.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const Date = S.p`
    font-size: 14px;
    color: #ffffff;
    font-style: italic;
    text-decoration: underline;
`;
// Edit button
const EditButton = S.div`
  background-color: #dcdcdc;
  text-align: center;
  padding: 15px 30px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  &:hover {
      cursor: pointer;
  }
`;
const FormContainer = S.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: ${props => props.isFormActive ? 'block' : 'none'};
`;
