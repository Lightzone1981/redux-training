import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo, editTodo, finishEditTodo } from '../redux/action-creators/action_creators';
import { ITodo } from '../redux/types';


const Todo = ({ id, text, isComplete, disabled }: ITodo) => {
    const [inputText, setInputText] = useState(text);

    const dispatch = useDispatch();
    
    const handleDeleteButtonClick = (e: any) => {
        dispatch(deleteTodo(e.target.id));
    }

    const handleCheckboxClick = (e: any) => {
        dispatch(completeTodo(e.target.id));
    }

    const handleTextClick = (e: any) => {
        // const a = window.getSelection()
        // a?.removeAllRanges()
        dispatch(editTodo(e.target.id));
        
    }

    const handleTextOnBlur = (e: any) => {
        dispatch(finishEditTodo(e.target.id));
    }

    return (
        <>
            <li className='todos__item' id={`${id}`}>
                <input id={`${id}`} type='checkbox' onChange={(e) => handleCheckboxClick(e)} />

                <div className='input-container' id={`${id}`} onClick={(e) => { handleTextClick(e) }} >
                    
                    <input className="todos__text" id={`${id}`} type='text' value={inputText}
                        disabled={disabled} autoFocus={!disabled} onBlur={(e) => handleTextOnBlur(e)}
                        onChange={(e) => setInputText(e.target.value)}
                        style={!isComplete ? { textDecoration: 'none' } : { textDecoration: 'line-through' }} />
                </div>

                <button className='todos__delete-button' id={`${id}`} onClick={(e)=> handleDeleteButtonClick(e)} style= {{color:'red'}}>Delete</button>
            </li>
        </>
    )
    
}
export { Todo };
