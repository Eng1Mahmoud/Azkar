import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { show } from "../redux/slices/class";
import { changBackground } from "../redux/slices/class";
import logo from "../dist/images/logo.png";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const navigat = useNavigate();
  const background = useSelector((state) => state.showSlice.background);
  const dispatch = useDispatch();
  let showing = (classe) => {
    dispatch(show(classe));
  };
  window.onscroll = () => {
    if (window.scrollY >= 150) {
      dispatch(changBackground("White"));
    } else {
      // check curunt page to set background
      let location = window.location.href;
      if (location[location.length - 1] !== "/") {
        dispatch(changBackground("White"));
      } else {
        dispatch(changBackground(" "));
      }
    }
  };
  return (
    <header>
      <div className={`header ${background} w-100`}>
        <div className="container py-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="menu d-flex justify-content-center align-items-center rounded-2">
              <FaBars className="bars" onClick={() => showing("show")} />
            </div>

            <div className="logo">
              <img src={logo} alt="logo" onClick={() => navigat("/")} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
