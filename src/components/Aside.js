import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../redux/slices/class";
import { changBackground } from "../redux/slices/class";
import logo from "../dist/images/logo.png";
import { FaTimes } from "react-icons/fa";
import { Link,useNavigate} from "react-router-dom";
function Aside() {
  const shows = useSelector((state) => state.showSlice.show);
const navigat = useNavigate();
  const dispatch = useDispatch();
  let showing = (classe) => {
    dispatch(show(classe));
    window.scrollTo(0, 0);
  };
  useEffect(() => { // use useEffect to check if href of page chang when route betwen pages to set background to header if page note home page 
    let location = window.location.href;

    if (location[location.length - 1] !== "/") {
      dispatch(changBackground("White"));
    } else {
      dispatch(changBackground(" "));
    }
  });
  return (
    <aside className={`aside ${shows} `}>
      <div className="head p-2 pt- pb-1">
        <div className="d-flex justify-content-between align-items-center">
          <div className="close d-flex justify-content-center align-items-center rounded-2">
            <FaTimes
              className="icon"
              onClick={() => {
                dispatch(show(""));
              }}
            />
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="navigation px-2">
        <ul>
          <li className="pb-1">
            <Link to="/" className="link" onClick={() => showing(" ")}>
              الصفحة الرئيسية
            </Link>
          </li>
          <li className="py-1">
            <Link to="sapah" className="link py-3" onClick={() => showing(" ")}>
              أذكار الصباح
            </Link>
          </li>
          <li className="py-1" onClick={() => showing(" ")}>
            <Link to="masaa" className="link py-3">
              أذكار المساء
            </Link>
          </li>
          <li className="py-1" onClick={() => showing(" ")}>
            <Link to="/other" className="link py-3">
              جامع الاذكار
            </Link>
          </li>
          <li className="py-1" onClick={() => showing(" ")}>
            <Link to="/maspaha" className="link py-3">
            المسبحة الالكترونية
            </Link>
          </li>
          <li className="pt-1" onClick={() => showing(" ")}>
            <Link to="/quran" className="link py-3">
              القران الكريم
            </Link>
          </li>
        </ul>
        <p>يمكنك تقييم الموقع من الرابط التالي او يمكنك ارسال طلب في التعديل علي شئ ما في الموقع نحن نسعد بذالك </p>
        <button
          className="subscribe  px-4 rounded-2"
          onClick={() =>{
            showing(" ");
            navigat("/register")
            }}>
             تقييم
        </button>
      </div>
    </aside>
  );
}

export default Aside;
