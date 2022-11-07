import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { ChangeData } from "../../redux/slices/curuntData"; 
import axios from "axios";
function Other() {

  const navigat = useNavigate()
  const dispatch = useDispatch();

   const change = (curunt) =>{
    dispatch(ChangeData(curunt))
    navigat("/detailsofzekr")
    window.scrollTo(0,0)
  }
  let [data, setData] = useState([]);

  useEffect(() => {
    const res = async () => {
      await axios
        .get("https://zekr1.herokuapp.com/other")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    res();
  }, []);
  return (
    <div className="azkar other" >
      <div className="azkars">
        <div className="container py-5">
        <h2 className="p-5">حصن المسلم </h2>
          <div className="row  g-3 text-center">
          {data.map((zekr) => {
              return (
                <div className="zekr col-12 col-md-4 " key={zekr.id} onClick={() => change(zekr)}>
                  <div className="content p-2 rounded-3 h-100 d-flex justify-content-center align-items-center" >
                    <h3>{zekr.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Other;
