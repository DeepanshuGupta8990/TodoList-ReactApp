import React, { useState } from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
 
export default function Inputarea({funcToSetTodoList}) {
    const [inputVal,setInputval] = useState('');
    
  return (
    <Container>
        <h2>Todo list</h2>
        <input type='text' value={inputVal} onKeyDown={(e)=>{
             if(e.key ==='Enter'){
                funcToSetTodoList({data: inputVal, id:uuidv4()})
                setInputval('')
            }
        }} onChange={(e)=>{setInputval(e.target.value)}}/>
        <button onClick={()=>{
            funcToSetTodoList({data: inputVal, id:uuidv4()})
            setInputval('')
            }}>add</button>
    </Container>
  )
}

const Container = styled.div`
height: 10rem;
background-color: #6df5cd;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
    input{
        width: 40%;
        height: 2rem;
        outline: none;
        border: none;
        &:focus{
            box-shadow: 0px 0px 3px 1px #ff8787;
        }
    }
    button{
        width: 3rem;
        height: 3rem;
        background-color: #ff8787;
        border: none;
        outline: none;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
            background-color: #e2dede;
        }
     
    }
`