import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todosSlice";

export const store = configureStore({
  reducer: { todos: todosReducer },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
