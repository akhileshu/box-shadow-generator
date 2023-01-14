
import { configureStore } from "@reduxjs/toolkit"; 
import { customreducer } from "./Reducers";


let Store =configureStore({
    reducer:{
        mystore:customreducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default Store