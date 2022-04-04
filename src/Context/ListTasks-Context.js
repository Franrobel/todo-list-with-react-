import React, { useState, createContext } from "react";

export const listTaskContext = createContext();

export const ListTasksProvider = (props) => {
    const [listTask, setListTask] = useState([])

    const [task, setTask] = useState({
        title: "",
        completed: false
    })

    return (
        <listTaskContext.Provider value={[[listTask, setListTask], [task, setTask]]}>
            {props.children}
        </listTaskContext.Provider>
    );
}