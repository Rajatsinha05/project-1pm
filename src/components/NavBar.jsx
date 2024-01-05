import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Action";
const NavBar = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.user);
  // console.log(data);

  let all=useSelector((store)=>store)
  // console.log(all);

  return (
    <div id="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/product" className="link">
        Product
      </Link>

      <Link to="/addproduct" className="link">Add Product</Link>
      <Link to="/cart" className="link">
        Cart
      </Link>
      {data.isLogin ? (
        <span className="link">{data.userData.username}</span>
      ) : (
        <Link to="/signup" className="link">
          Signup
        </Link>
      )}
      {data.isLogin ? (
        <span className="link" onClick={() => dispatch(logout())}>
          LogOut
        </span>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
