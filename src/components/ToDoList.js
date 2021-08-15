import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({todoList, onCheckBtnClick, onDeleteBtnClick}) {
    return (
        <>
            {
                todoList.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onDeleteBtnClick={onDeleteBtnClick}  onCheckBtnClick={onCheckBtnClick}></ToDo>
                ))
            }
        </>
    )
}
