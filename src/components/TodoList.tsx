import React, { useEffect } from 'react';
import axios, {AxiosResponse} from "axios";
import {useSelector} from 'react-redux'
import {getTodos} from '../store/action-creators'
import { State } from '../store/reducer';


const TodoList = () => {

    // const url = 'api/v1/todo'
    // const fecthData = async () =>{
    //     const res:AxiosResponse  = await axios.get(url);
    //     console.log(res.data);
    // }

    useEffect( () => {
        getTodos();
    },[])

    const todo = useSelector((state:State) => state.todo)
    console.log(todo);
    

    return (
        <div>
            Hello List
        </div>
    );
};

export default TodoList;