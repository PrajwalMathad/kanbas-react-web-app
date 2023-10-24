import helloReducer from "./assignment4/ReduxExamples/HelloRedux/helloReducer";
import counter1Reducer from "./assignment4/ReduxExamples/counters/counter1Reducer";
import counter2Reducer from "./assignment4/ReduxExamples/counters/counter2Reducer";
import todosReducer from "./assignment4/ReduxExamples/todos/todosReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter1Reducer: counter1Reducer,
    counter2Reducer,
    helloReducer,
    todosReducer,
  },
});

export default store;
