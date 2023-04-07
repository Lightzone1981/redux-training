import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO, FINISH_EDIT_TODO } from '../action-types/action_types';
import { IStore } from "../types";

const initialState = {
    todos: []
};



export default (state: IStore = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, text} = action.newTodo;
            return ({
                ...state,
                todos: [...state.todos, { id, text, isComplete: false, disabled:true }]
            })
        }
            
        case DELETE_TODO: {
            const { id } = action.deleteTodo
            const newTodosArr = state.todos.filter((el)=> String(el.id) !== id)
            
            return ({
                ...state,
                todos: newTodosArr
            })
        }
            
        case COMPLETE_TODO: {
            const { id } = action.completeTodo
            const newTodosArr = state.todos.map((el) => {
                if (String(el.id) === id) {
                    el.isComplete = !el.isComplete
                }
                return el
            })
            
            return ({
                ...state,
                todos: newTodosArr
            })
        }
        
        case EDIT_TODO: {
            const { id } = action.editingTodo
            const newTodosArr = state.todos.map((el) => {
                if (String(el.id) === id) {
                    el.disabled = false
                }
                return el
            })
            
            return ({
                ...state,
                todos: newTodosArr
            })
        }
        
        case FINISH_EDIT_TODO: {
            const { id } = action.finishEditingTodo
            console.log(id)
            const newTodosArr = state.todos.map((el) => {
                if (String(el.id) === id) {
                    el.disabled = true
                }
                return el
            })
            
            return ({
                ...state,
                todos: newTodosArr
            })
        }    
            
        default: {
            return state
        }
    }
}