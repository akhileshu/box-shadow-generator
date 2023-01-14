import { createReducer } from "@reduxjs/toolkit"


let initialstate ={products:[],items:0,btnstatus:true}
export let customreducer = createReducer(initialstate,{
addproduct:(state,action)=>{
    state.products.push(action.payload)
},
subproduct:(state,action)=>{
    state.products=state.products.filter((item, index) => index !== action.payload)
},
updatbtnstatus:(state,action)=>{
    state.btnstatus=action.payload
}
})