import React, { useState, useEffect } from "react";
import S from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MainTitle from "../titles/MainTitle.js";
import SubTitle from "../titles/SubTitle.js";
import Ingredient from "../Ingredient";
import RecipeForm from "../forms/RecipeForm";
import SocialIcons from '../SocialIcons';
import RecipeInfoContainer from '../RecipeInfoContainer';

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
        <RecipeInfoContainer prepTime={recipe.prepTime} cookTime={recipe.cookTime} servings={recipe.servings}/>
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
        <SocialIcons />
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
