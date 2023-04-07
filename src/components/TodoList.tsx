import { useSelector } from 'react-redux';
import { IStore } from '../redux/types';
import { Todo } from './Todo';

const TodoList = () => {

    const todos = useSelector((state: IStore) => state.todos);
    return (
        <ul className='todos__container'>
            {
                todos.map(({id, text, isComplete, disabled})=>{
                    return (
                        <Todo key={id} id={id} text={text} isComplete={isComplete} disabled={disabled} />
                    )
                })
            }
        </ul>
    );
};

export { TodoList };
