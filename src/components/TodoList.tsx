import React, { useEffect } from 'react';
import axios, {AxiosResponse} from "axios";

const TodoList = () => {

    const url = 'api/v1/todo'
    const fecthData = async () =>{
        const res:AxiosResponse  = await axios.get(url);
        console.log(res.data);
    }

    useEffect( () => {
        fecthData()
    },[])

    return (
        <div>
            Hello List
        </div>
    );
};

export default TodoList;