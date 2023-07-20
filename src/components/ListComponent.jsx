import React, { useState } from "react";
import { styled } from "styled-components";

export default function ListComponent({ todoList,deleteFunc }) {

    const deleteFunc1 = (id)=>{
        deleteFunc(id);
    }

  return (
    <Conatiner1>
      {todoList.length > 0 ? (
        <div id="div123">
          {todoList.map((todo) => {
            return(
                <TodoItem todo={todo} deleteFunc1={deleteFunc1} key={todo.id}/>
            )
          })}
        </div>
      ) : (
        <div >
          <p>No todo defeined</p>
        </div>
      )}
    </Conatiner1>
  );
}

const TodoItem = ({todo,deleteFunc1}) => {
    const [update,setUpdate] = useState(false);
    const [todoData,setTodoData] = useState(todo.data);
    console.log(todo)
  return (
    <Container2>
      {
        !update ? (
           <div id="div12345">
            <input type="checkbox" name="todoCheckBox" id="checkbox" />
            <p>{todoData}</p>
            <button onClick={()=>{setUpdate(true)}}>update</button>
            <button onClick={()=>{deleteFunc1(todo.id)}}>delete</button>
           </div>
        ) : (
        <div id="div12345678">
         <input type="text" value={todoData} onChange={(e)=>{setTodoData(e.target.value)}}/>
         <button onClick={()=>{setUpdate(false)}}>save</button>
        </div>
        )
      }
    </Container2>
  );
};

const Conatiner1 = styled.div`
background-color: #8bd4c6;
width: 50%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 1rem;
height: 60%;
overflow: auto;
padding-top: 2rem;
padding-bottom: 2rem;
&::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      height: 1rem;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
#div123{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
`
const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #050505;
    color: white;

  #div12345{
     display: flex;
     flex-direction: row;
     gap: 1rem;
     font-size: 1.4rem;
     align-items: center;
     padding: 1rem;
     input{
        transform: scale(1.5);
     }
     p{
        width: 10rem;
        word-break: break-all;
     }
     button{
        width: 3rem;
        height: 3rem;
        background-color: #8b8585;
        border: none;
        outline: none;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
            background-color: #e2dede;
        }
     }
}
#div12345678{
    display: flex;
     flex-direction: row;
     gap: 1rem;
     font-size: 1.4rem;
     align-items: center;
     padding: 1rem;
     input{
        width: 10rem;
        word-break: break-all;
     }
     button{
        width: 3rem;
        height: 3rem;
        background-color: #8b8585;
        border: none;
        outline: none;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
            background-color: #e2dede;
        }
     }
}
`