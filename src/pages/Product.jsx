import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../redux/Action";
import { Link } from "react-router-dom";

const Product = () => {
  let { product } = useSelector((store) => store.products);

  let dispatch = useDispatch();
  useEffect(() => {
    if (product.length == 0) {
      dispatch(GetProduct());
      console.log("called");
    }
  }, []);

  // console.log(product);

  return (
    <div>
      {product.map((ele) => {
        return (
          <Link to={`/product/${ele.id}`}>
            <img src={ele.img} alt="" />
            <p>{ele.title}</p>
            <p>{ele.price}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
