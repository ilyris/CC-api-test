import React from 'react'
import S from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTag } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function SocialIcons(props) {
    return (
        <SocialIconsContainer>
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
        </SocialIconsContainer>
    )
}
export default SocialIcons;

// SocialIcon
const SocialIconsContainer = S.section`
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