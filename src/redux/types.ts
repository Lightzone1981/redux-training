interface ITodo {
    id: number,
    text: string,
    isComplete: boolean,
    disabled:boolean
};

interface IStore {
    todos: ITodo[]
};

export type { ITodo, IStore }