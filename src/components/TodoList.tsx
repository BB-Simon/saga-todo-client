import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getTodos} from '../store/action-creators'
import { State } from '../store/reducer';
import {TodoStateTypes} from '../store/actions-types'


const TodoList = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getTodos())
    },[dispatch])

    const {todos} = useSelector((state:State) => state.todos)
    
    return (
        <div>
            {todos && todos.map((todo:TodoStateTypes) => (
                <h2>{todo.todo}</h2>
            ))}
        </div>
    );
};

export default TodoList;