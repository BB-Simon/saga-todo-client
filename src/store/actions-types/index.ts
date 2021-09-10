export enum ActionTypes {
    GET_TODO = 'get_todos',
    CREATE_TODO = 'create_todo',
    UPDATE_TODO = 'update_todo',
    DELETE_TODO = 'delete_todo'
}

export interface TodoStateTypes {
    id: string;
    todo: string;
    date: string;
}

interface GetTodoAction {
    type: ActionTypes.GET_TODO,
    payload: TodoStateTypes[],
}
interface CraeteTodoAction {
    type: ActionTypes.CREATE_TODO,
    payload: TodoStateTypes[],
}
interface UpdateTodoAction {
    type: ActionTypes.UPDATE_TODO,
    payload: TodoStateTypes[],
}
interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODO,
    payload: string,
}

export type TodoAction = GetTodoAction | CraeteTodoAction | UpdateTodoAction | DeleteTodoAction