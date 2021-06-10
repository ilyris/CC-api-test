import React, {useState, useEffect} from 'react';
import S from 'styled-components';
import {Link} from 'react-router-dom';

const DesktopMenu = (props) => {

    return(
        <MenuContainer >
            <MenuContainerInner>
                {/* <SearchForm/> */}
                <MenuItemsWrapper>
                <StyledLink to="/">
                        Home
                    </StyledLink>
                <StyledLink to="/add">
                        Add Recipe
                </StyledLink>
                </MenuItemsWrapper>
            </MenuContainerInner>
        </MenuContainer>
    );
}

export default DesktopMenu;

const MenuContainer = S.div`
    width: 100%;
    display: flex;
    top: 0;
    z-index: 100000;
    padding: 10px 0;
    flex-flow: row wrap;
    background-color:  #191818;

    @media (max-width: 520px) {
        padding-top: 0;
    }
`;
const MenuContainerInner = S.div`
    width: 75%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
`;

const MenuItemsWrapper = S.ul`
    width: auto;
    display: flex;
    align-items: center;
    padding-left: 0;
`;

const MenuItems = S.li`
    display: flex;
    align-items: center;
    margin-right: 20px;

    &:last-of-type {
        margin-right: 0;
    }
`;

const StyledLink = S(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: all ease-in-out 120ms;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 20px;
    &:hover {
        color: #76ee74;
    }

    @media (max-width: 980px) {
        width: 100%;
        text-align: center;
        font-size: ${props => props.additionalInformation ? "16px" : "calc(2rem + 1vw)"};
    }
`;
const StyledA = S.a`
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: all ease-in-out 120ms;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
        color: red;
    }

    @media (max-width: 980px) {
        width: 100%;
        text-align: center;
        font-size: ${props => props.additionalInformation ? "16px" : "calc(2rem + 1vw)"};
    }
`;

const LogoContainer = S.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    @media (max-width: 980px) {
        width: 100%;
    }

    @media (max-width: 520px) {
        padding: 10px 0;
    }
`;


// const Login = S(PrimaryButton)`
//     padding: 10px 5px;
//     border-radius: 25px;
//     color: #fff;
//     font-size: 16px;
//     min-width: 75px;
//     margin: 0;
//     background-color: #6155A6;
//     border: none;

//     @media (max-width: 980px) {
//         font-size: 14px;
//         padding: 5px 10px;

//     }
// `;
// const StyledLogo = S(Logo)`
//     width: 100px;

//     @media (max-width: 520px) {
//         width: 100px;
//     }
// `;