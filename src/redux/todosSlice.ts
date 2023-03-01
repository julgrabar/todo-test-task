import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types/ITodo";

const lsTodo = localStorage.getItem("todos");

const initialState: ITodo[] = lsTodo ? JSON.parse(lsTodo) : [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => [...state, payload],
    changeStatus: (state, { payload }) => {
      const ind = state.findIndex((todo) => todo.id === payload);
      state[ind].isDone = !state[ind].isDone;
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, changeStatus } = todosSlice.actions;
