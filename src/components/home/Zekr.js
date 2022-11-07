import React, { useState } from "react";

function Zekr(props) {
    let {zekr,reference,description,image,count} = props.zekr
  let [counter, setCounter] = useState(0);
  const increased = () => {
    setCounter(++counter);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="zekr col-12 col-md-6 ">
      <div className="content p-5 rounded-3 h-100">
        <div className="image">
          <img
            src={image}
            alt="maspaha"
            loading="lazy"
            className="img-fluid"></img>
          <span
            className="count rounded-circle"
            onClick={increased}></span>
          <span className="reset rounded-circle" onClick={ reset}></span>

          <span className="number">{counter}</span>
        </div>
        <p className="pt-3">{zekr}</p>

        {description?( <p className="description p-3 rounded-2 mb-3">{description}</p>):null} 
        <span className="reference p-2 ">{reference}</span>

        {count ? (
          <span className="goal p-1 rounded-2 ">{count}</span>
        ) : null}
      </div>
    </div>
  );
}

export default Zekr;
