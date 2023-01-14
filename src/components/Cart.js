import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Cart() {
  const { products } = useSelector((state) => state.mystore);
  const dispatch = useDispatch();

  const subbtn=(e, p,i)=>{
    console.log('working')
    dispatch({
      type: "subproduct",
      payload: i
    });
    
  }

let cartitem,totalvalue
let quantity=1
if(products){
  cartitem = products.map((p, i) => {
    return (
      <div key={i} className="card" style={{ width: "18rem" }}>
        <img src={p.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{p.price}</h5>
          <p className="card-text">{p.title}</p>

          <button href="#" className="btn btn-primary" onClick={(e) => subbtn(e, p,i)}>
            {"delete"}
          </button>
          
        </div>
      </div>
    );
  });
  
  
totalvalue = products.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price) ,
    0
    );
    
  }
  const checkout =()=>{
    if(totalvalue){
      return      <button className="btn btn-success " style={{ width: "18rem" }}>check out</button>

    }
    else{
      return <div><h1>your cart is empty please add products</h1></div>
    }

  }

  return (
    <div>
      {cartitem}
     <h1> total:{Math.round(totalvalue) }</h1>
     {checkout()}

     
    </div>
  );
}
