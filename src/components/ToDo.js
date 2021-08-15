import React from 'react'
import Button from '@atlaskit/button'
import styled from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'
import DeleteIcon from '@atlaskit/icon/glyph/trash'

const ButtonStyled = styled(Button)`
    text-align: left !important;
    margin-top: 5px;

    background-color: ${props => props.$isCompleted ? "#e2e2e2" : ""};

    // &:hover {
    //     .check-icon {
    //         display: inline-block;
    //     }
    // }

    .check-icon {
        // display: none;
        background-color: #e2e2e2;
        border-radius: 3px;
    }

    .delete-icon {
        margin-left: 10px;
        background-color: #e2e2e2;
        border-radius: 3px;
    }
`

export default function ToDo({todo, onCheckBtnClick, onDeleteBtnClick}) {
    return (
    <ButtonStyled shouldFitContainer $isCompleted={ todo.isCompleted } iconAfter={
        <>
            <span className="check-icon" onClick={()=>onCheckBtnClick(todo.id)}>
                <CheckIcon primaryColor="#111111f"></CheckIcon>
            </span>

            <span className="delete-icon" onClick={()=>onDeleteBtnClick(todo.id)}>
                <DeleteIcon primaryColor="#111111f"></DeleteIcon>
            </span>
        </>
    }>{todo.name}</ButtonStyled>
    )
}
