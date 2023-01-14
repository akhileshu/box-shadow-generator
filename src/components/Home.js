import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function () {
  // const [btntext, setbtntext] = useState('buy now')


  const dispatch = useDispatch();
  const addbtn = (e, i,index) => {
    console.log(e, i);
    e.target.disabled=true
    e.target.innerText='added'
   
    // alert('product added in cart')
    // console.log(items[index],index);

    dispatch({
      type: "addproduct",
      payload: i,
    });
    
   

    
  };

  const { products ,btnstatus} = useSelector((state) => state.mystore);
  console.log(products);

  const [product, setproduct] = useState([]);
  useEffect(() => {
    async function getResponse() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json(); // 
      setproduct(data);
    }
    getResponse();
  }, []);
  let items = product.map((i, index) => {
    return (
      <div key={index} className="card" style={{ width: "18rem" }}>
        <img src={i.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{i.price}</h5>
          <p className="card-text">{i.title}</p>
          <p className="card-text">{i.rating.rate}</p>
          <button
            href="#"
            onClick={(e) => addbtn(e, i,index)}
            className="btn btn-primary"
            
          >
            {'add to cart'}
          </button>

        </div>
      </div>
    );
  });

  return <div className="homediv">{items}</div>;
}
