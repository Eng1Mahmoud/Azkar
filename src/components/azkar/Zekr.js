import React, { useState, useRef } from "react";
import {FaBackward} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
function Zekr(props) {
  let navigat = useNavigate();
  let ref = useRef(null);
  let { zekr, reference, description, image, count } = props.zekr;
  let [counter, setCounter] = useState(0);
  let [numberElement, setNumberElement] = useState(0);
  const increased = () => {
    if (ref.current.parentElement.children.length === 1) {
      setNumberElement(1);
    }
    setCounter(++counter);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      {counter <= count - 1 ? (
        <div className={`zekr col-12 col-md-6 `} ref={ref}>
          <div className="content p-3 p-md-5 py-5 rounded-3 h-100">
            <div className="image pt-3">
              <img
                src={image}
                alt="maspaha"
                loading="lazy"
                className="img-fluid"></img>
              <span className="count rounded-circle" onClick={increased}></span>
              <span className="reset rounded-circle" onClick={reset}></span>

              <span className="number">{counter}</span>
            </div>
            <p className="pt-3 pb-1 px-2">{zekr}</p>

            {description ? (
              <p className="description  p-3 p-md-3 rounded-2 mb-5">{description}</p>
            ) : null}
            {reference ? <p className="reference p-1 ">{reference}</p> : null}

            {count ? (
              <span className="goal p-1 rounded-2 ">{count}</span>
            ) : null}
          </div>
        </div>
      ) :null}

      {numberElement === 1 && counter === +count ?(
         <div className="finsh py-5">
          <p className="py-2">لقد اتممت قراءة الاذكار </p>
          <p><FaBackward size={40} className="back rounded-circle p-2" onClick={() => navigat("/")}/></p>
          </div>):null
          }
    </>
  );
}

export default Zekr;
