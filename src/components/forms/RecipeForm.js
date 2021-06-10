import React,{useState, useEffect} from 'react'
import S from 'styled-components';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

export function RecipeForm(props) {
    const location = useLocation();
    console.log(location);
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        images:{full: "/img/default_image.jpg"},
        servings: 0,
        prepTime: 0,
        cookTime: 0,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if(location.pathname === '/add') {
            addItem();
        } else {
            updateItem();
            props.setIsFormActive(false)
        }
    }

    const updateItem = () => {
        axios.patch(`http://localhost:3001/recipes/${props.recipe.uuid}`, formState)
        .then(res => {
            console.log(res)
            setFormState({
                title: '',
                description: '',
                servings: 0,
                prepTime: 0,
                cookTime: 0,
            })
            props.setRecipe(res.data)
        })
        .catch(err => console.log(err))
    }
    const addItem = () => {
        axios.post(`http://localhost:3001/recipes`, formState)
        .then(res => {
            console.log(res)
            setFormState({
                title: '',
                description: '',
                servings: 0,
                prepTime: 0,
                cookTime: 0,
            })
            props.setRecipe(res.data)
        })
        .catch(err => console.log(err))
    }
    const onChange = (e) => {
        console.log(e)
        setFormState({ ...formState, [e.target.name]: e.target.value});
    }
    const cancelForm = (e) => {
        e.preventDefault();
        e.stopPropagation()
        props.setIsFormActive(false)
    }
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