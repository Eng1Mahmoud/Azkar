import React, { useEffect, useState,useRef,Suspense  } from "react";
import axios from "axios";
import Whiting from "../Whiting";
let Zekr = React.lazy(() => import("../azkar/Zekr"));

function Container(props) {
  let ref  = useRef(null)
  let {api, catigory}= props
  let [data, setData] = useState([])
  useEffect(() => {
    const res = async () => {
      await axios
        .get(api)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    res();
  
  }, [api]);
  return (
    <div className="azkar" ref={ref}>
      
      <div className="azkars">
        <div className="container py-5">
        <h2 className="p-5">أذكار {catigory} </h2>
          <div className="row  g-5 text-center">
           {data.map((zekr) => {
              return (
                <Suspense  fallback={<Whiting/>}  key={zekr.id}>
                    <Zekr zekr = {zekr} key={zekr.id}/>
                </Suspense>
               
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;