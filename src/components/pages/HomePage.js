import React,{useState, useEffect} from 'react'
import axios from 'axios';
import S from 'styled-components';
import RecipeCard from '../RecipeCard.js';
import MainTitle from '../titles/MainTitle.js'
export function Homepage(props) {
    
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3001/recipes')
    .then( res => {
         setRecipes(res.data);
    })
    .catch(err => console.log(err))

  },[])
  console.log(recipes);
    return (
        <Main>
            <MainTitle title={'Crescendos Dishez'}/>
            <CardContainer>
                {recipes && recipes.map(item => {
                    console.log(item);
                    return <RecipeCard key={item.uuid} item={item}/>
                })}
            </CardContainer>
        </Main>
    )
}
export default Homepage;
const Main = S.main`

`;


const CardContainer = S.div`
    width: 75%;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: space-between;
`;
