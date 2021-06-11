import React from "react";
import S from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

 function RecipeCard(props) {
    const {title, description, images,uuid} = props.item;
    console.log(props.item);
  return (
    <Card to={{pathname:`/recipe/${uuid}`, state: {recipe: props.item}}}>
      <LikeContainer>
        <Icon icon={faHeart} />
      </LikeContainer>
      <ImgContainer>
        <CardImg src={`public${images.full}`} />
      </ImgContainer>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <Desc>{description}</Desc>
      </TextContainer>
    </Card>
  );
}
export default RecipeCard;

const CardImg = S.img`
    width: 70%;
    height: 200px;
    border-radius: 50%;
    max-height: 300px;
    margin: 0 auto;
    transition: all ease-in-out 120ms;
`;

const Card = S(Link)`
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    border-radius: 5px;
    width: 29%;
    min-width: 250px;
    margin-bottom: 50px;
    position: relative;
  text-decoration: none;
    &:hover {
      cursor: pointer;
    }
`;
const CardTitle = S.h6`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    width: 100%;
    text-align: left;
    margin-top: 20px;
    color: #fff;
`;
const TextContainer = S.div`
  background-color: #191818;
  width: 100%;
`;
const ImgContainer = S.div`
  background-color: #262626;;
  display: flex;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 12px #171717;
`;

const Desc = S.p`
    font-size: 18px;
    color: #fff;
    width: 100%;
    text-align: left;
    margin-top: 25px;
    margin: 0;
`;
const Icon = S(FontAwesomeIcon)`
  font-size: 20px;
  color: #76ee74;
  transition: all ease-in-out 180ms;
`;
const LikeContainer = S.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #191818;
  width: 50px;
  height: 50px;
  border-radius: 40%;
  margin: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover  {
    cursor: pointer;

    ${Icon} {
      color: #9d74ee;
    }
  }

`;

