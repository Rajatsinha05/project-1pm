import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart, deleteCart } from "../redux/Action";

const Cart = () => {
  let dispatch = useDispatch();
  let { cart } = useSelector((store) => store.products);
  console.log(cart);

  useEffect(()=>{
    dispatch(GetCart())
  },[])
  const handleDelete = (id)=>{
  dispatch(deleteCart(id))
  }
  return (
    <div>
      {cart.map((ele) => {
        return (
          <>
            <img src={ele.img} alt="" />
            <p>{ele.title}</p>
            <p>{ele.price}</p>

            <button onClick={()=>handleDelete(ele.id)}>delete</button>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
