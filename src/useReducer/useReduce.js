/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */

import { types } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.addTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case types.completeTask:
      return {
        ...state,
        tasks: [...state.tasks].map((task) => {
          if (task.id === action.payload) {
            return { ...task, isComplete: !task.isComplete };
          }
          return task;
        }),
      };
    case types.updateTask:
      return {
        ...state,
        tasks: [...state.tasks].map((t) => {
          if (t.id === action.payload.id) {
            return { ...t, task: action.payload.task };
          }
          return t;
        }),
      };

    case types.deleteTask:
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
