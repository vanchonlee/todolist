import ToDoList from "./components/ToDoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useCallback, useEffect } from 'react'
import { v4 } from 'uuid'

const TODO_APP_STORAGE_KEY = "TODO_APP"

function App() {
  const [todoList, setTodoList] = useState([])
  const [textInput, setTextInput] = useState("")

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if (storageTodoList) {
      setTodoList(JSON.parse(storageTodoList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])

  const onTextInputChange = (e) => {
    setTextInput(e.target.value)
  }

  const onAddButton = (e) => {
    setTodoList([{id: v4(),name: textInput,isCompleted: false}, ...todoList])
  }

  const onDeleteBtnClick = useCallback(
    (id) => {
      setTodoList(prevState => prevState.filter(function(todo){
        if (todo.id !== id) {
          return todo
        }
      }))
    },
    [],
  )

  const onCheckBtnClick = useCallback(
    (id) => {
      setTodoList(prevState => prevState.map(todo => todo.id === id ? { ...todo, isCompleted: true} : todo))
    },
    [],
  )

  return (
   <>
    <h3>To do list</h3>
    <Textfield name="add-todo" placeholder="Add todo" elemAfterInput={
      <Button appearance='primary' onClick={onAddButton} isDisabled={!textInput}>Add</Button>
    }
    css={
      {
        padding: '2px'
      }
    }
    value={textInput}
    onChange={onTextInputChange}></Textfield>
    <ToDoList todoList={todoList} onDeleteBtnClick={onDeleteBtnClick} onCheckBtnClick={onCheckBtnClick}></ToDoList>
   </> 
  );
}

export default App;
