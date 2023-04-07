import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO, FINISH_EDIT_TODO } from "../action-types/action_types";
let idCounter = 0;

const addTodo = (text: string) => ({
    type: ADD_TODO,
    newTodo: {
        id: ++idCounter,
        text
    }
});

const deleteTodo = (id: string) => ({
    type: DELETE_TODO,
    deleteTodo: {
        id: id,
    }
});

const completeTodo = (id: string) => ({
    type: COMPLETE_TODO,
    completeTodo: {
        id: id,
    }
});

const editTodo = (id: string) => ({
    type: EDIT_TODO,
    editingTodo: {
        id: id,
    }
});

const finishEditTodo = (id: string) => ({
    type: FINISH_EDIT_TODO,
    finishEditingTodo: {
        id: id,
    }
});

export { addTodo, deleteTodo, completeTodo, editTodo, finishEditTodo };