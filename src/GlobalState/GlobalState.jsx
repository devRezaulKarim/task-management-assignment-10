/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../useReducer/useReduce.js";
import { types } from "../useReducer/actionTypes.js";

const initValue = JSON.parse(localStorage.getItem("initValue")) ?? {
  tasks: [],
};

export const GlobalContext = createContext(initValue);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  function addTask(task) {
    dispatch({
      type: types.addTask,
      payload: task,
    });
  }

  function completeTask(id) {
    dispatch({
      type: types.completeTask,
      payload: id,
    });
  }

  function updateTask(taskInfo) {
    dispatch({
      type: types.updateTask,
      payload: taskInfo,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: types.deleteTask,
      payload: id,
    });
  }

  useEffect(() => {
    localStorage.setItem("initValue", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        completeTask,
        updateTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
