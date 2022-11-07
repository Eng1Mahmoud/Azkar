import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function DetailsOFZekr() {
  const navigat = useNavigate();
  let state = useSelector((state) => state.curuntData.currunt);
  console.log(state);
  return (
    <div className="details ">
      <div className="container py-5">
        <h2 className="p-5">{state.name}</h2>
        {state.data.map((zekr) => {
          return (
            <div className="zekr p-2 my-3 rounded-2 " key={zekr.id}>
              {state.id === 25 ? <span>{zekr.category}</span> : null}
              <div className="d-flex align-items-center ">{zekr.zekr}</div>
            </div>
          );
        })}
        <button  className=" p-1 px-4 rounded-2 mt-5"  onClick={()=> navigat(-1) }>العودة للصفحة السابقة</button>
      </div>
    </div>
  );
}

export default DetailsOFZekr;
