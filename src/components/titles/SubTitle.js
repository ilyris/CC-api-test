import React from 'react'
import S from 'styled-components';
function Subtitle(props) {
    

    return (
        <Title>
            {props.title}
        </Title>
    )
}
export default Subtitle;

const Title = S.h6`
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    width: 100%;
    text-align: left;
    margin: 0;
`;
