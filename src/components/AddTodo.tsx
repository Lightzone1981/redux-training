import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action-creators/action_creators';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e: any) => {
        setText(e.target.value);
    }
    const handleButtonClick = () => {
        if (text) {
            dispatch(addTodo(text));
            setText('');
        }
    }
    return (
        <div className='todos__add-bar'>
            <input className='todos__add-input' value={text} onChange={handleInputChange} />
            <button className='todos__add-button' onClick={handleButtonClick}>Add todo</button>
        </div>
    )
}

export { AddTodo };
