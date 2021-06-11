import React,{useState, useEffect} from 'react'
import S from 'styled-components';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import {initalState} from '../../initalState';

export function RecipeForm(props) {
    // const [inputs, setAddInput] = useState(['directions-input-0'])
    // const [directions, setDirections] = useState([{
    //     optional: false,
    //     'directions-input-0': '',
    // }]);

    // Get route path
    const location = useLocation();
    // Set Forms initalState
    const [formState, setFormState] = useState(initalState);

    // If we're on the /add route, add the recipe, else edit it.
    const onSubmit = (e) => {
        e.preventDefault();
        if(location.pathname === '/add') {
            addItem(formState);
        } else {
            updateItem(props.recipe.uuid,formState);
            props.setIsFormActive(false)
        }
    }
    // Function to edit the Recipe
    const updateItem = (uuid,data) => {
        axios.patch(`http://localhost:3001/recipes/${uuid}`, data)
        .then(res => {
            setFormState(initalState)
            props.setRecipe(res.data)
        })
        .catch(err => console.log(err))
    }
    // Function to Add a recipe
    const addItem = (data) => {
        axios.post(`http://localhost:3001/recipes`, data)
        .then(res => {
            setFormState(initalState)
            props.setRecipe(res.data)
        })
        .catch(err => console.log(err))
    }
    // Event Handler to update form state
    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value});
    }
    // const onChangeDirections = (e) => {
    //     setDirections([{optional: false, [e.target.name]: e.target.value}])
    //     console.log(directions);
    // }
    
    // Function to set the closed state of the form
    const cancelForm = (e) => {
        e.preventDefault();
        props.setIsFormActive(false)
    }
    // const appendInput = () => {
    //     const newInput = `directions-input-${inputs.length}`;
    //     setAddInput([...inputs, newInput]);
    // }
    
    return (
        <Form onSubmit={onSubmit}>
            <Label>
                Title:
                <Input type={'text'} name={'title'} value={formState.title} onChange={onChange}/>
            </Label>
            <Label>
                Description:
                <Textarea type={'textarea'} name={'description'} value={formState.description} onChange={onChange}/>
            </Label>
            {/* <IngredientUploadContainer>
            <Label>
                Directions:
                {inputs.map(input => <Input type={'text'} name={`${input}`} onChange={onChangeDirections}/>)}
            </Label>
            <IngredientAddInput onClick={appendInput}>Add Another</IngredientAddInput>
            </IngredientUploadContainer> */}
            <Label>
                Servings:
                <Input type={'text'} name={'servings'} value={formState.servings} onChange={onChange}/>
            </Label>
            <Label>
                Prep Time:
                <Input type={'text'} name={'prepTime'} value={formState.prepTime} onChange={onChange}/>
            </Label>
            <Label>
                Cook Time:
                <Input type={'text'} name={'cookTime'} value={formState.cookTime} onChange={onChange}/>
            </Label>
            <ButtonContainer>
                <SubmitButton>Save</SubmitButton>
                <CancelButton onClick={cancelForm}>Cancel</CancelButton>
            </ButtonContainer>
        </Form>
    )
}
export default RecipeForm;

const Form = S.form`
    width: 300px;
    background-color: green;
    flex-flow: row wrap;
    padding: 20px;
    border-radius: 5px;
`;
const Label = S.label`
    font-size: 14px;
    width: 100%;
    color: #fff;
    display: flex;
    flex-flow: row wrap;
`;
const Input = S.input`
    font-size: 18px;
    padding: 5px;
    borde-radius: 5px;
    outline: unset;
    width: 100%;
`;
const Textarea = S.textarea`
    font-size: 18px;
    padding: 5px;
    borde-radius: 5px;
    outline: unset;
    width: 100%;
`;
/*
const IngredientUploadContainer = S.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const IngredientAddInput = S.div`
    padding: 10px 25px;
    background-color: #000;
    color: #fff;
    width: 50px;
    margin-top: 25px;
`;
*/
const ButtonContainer = S.div`
    widtH: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-top: 15px;
`;
const SubmitButton = S.button`
    padding: 10px 20px;
    border: unset;
    &:hover {
        cursor: pointer;
    }
`;
const CancelButton = S.button`
    padding: 10px 20px;
    border: unset;
    &:hover {
        cursor: pointer;
    }
`;