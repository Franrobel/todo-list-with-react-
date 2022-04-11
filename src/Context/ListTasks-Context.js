import React, { useState, createContext } from "react";

export const listTaskContext = createContext();

export const ListTasksProvider = (props) => {
    const [listTask, setListTask] = useState(JSON.parse(localStorage.getItem("tasks"))|| [])

    const [task, setTask] = useState({
        title: "",
        completed: false
    })

    const [filter, setFilter] = useState({
        searchTitle: "",
        finished: false,
        unFinished: false
    })

    return (
        <listTaskContext.Provider value={[[listTask, setListTask], [task, setTask], [filter, setFilter]]}>
            {props.children}
        </listTaskContext.Provider>
    );
}