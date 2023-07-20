import React, { useState } from 'react'
import Inputarea from '../components/Inputarea'
import ListComponent from '../components/ListComponent'
import { styled } from 'styled-components';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const toastOptions = {
    position: `${window.innerWidth > 1200 ? "top-right" : "top-center"}`,
    autoClose: "8000",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
    const [todoList, setTodoList] = useState([]);
    const funcToSetTodoList = (todo)=>{
       let newTodoList = [
        ...todoList,
        todo
       ];
       setTodoList(newTodoList)
    }
    const deleteFunc = (id)=>{
       let newTodoList = todoList.filter((todo)=>{
            return(
                todo.id !== id
            )
        })
        setTodoList(newTodoList);
       toast.success("Todo deleted succesfully")
    }
  return (
    <>
    <Container123>
      <Inputarea funcToSetTodoList={funcToSetTodoList}/>
      <ListComponent todoList={todoList} deleteFunc={deleteFunc}/>
    </Container123>
    <ToastContainer />
    </>
  )
}
const Container123 = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 height: 100vh;
 padding-top: 20px;
 gap: 1rem;
 background-color: #b56d6d;
`