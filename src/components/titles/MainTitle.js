import React from 'react';
import S from 'styled-components';

function MainTitle(props) {
    return (
        <Title>{props.title}</Title>
    )
}
export default MainTitle;

const Title = S.h1`
    font-size: 60px;
    color: #fff;
    width: 100%;
    text-align: center;
`;