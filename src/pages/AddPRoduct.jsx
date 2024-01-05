import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Action";

const AddPRoduct = () => {
  let [title, setTitle] = useState();
  let [price, setPrice] = useState();
  let [img, setImg] = useState();
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      title: title,
      img: img,
      price: price,
    };

    dispatch(addProduct(data));

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddPRoduct;
