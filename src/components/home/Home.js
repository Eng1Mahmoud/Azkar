import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Whiting from "../Whiting";
let Zekr = React.lazy(() => import("../home/Zekr"));

function Home() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const res = async () => {
      await axios
        .get("https://zekr1.herokuapp.com/home")
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
    <div className="home">
      <div className="azkars">
        <div className="container py-5">
          <h2 className="p-5">أذكار من الكتاب والسنة وفضائلها </h2>
          <div className="row  g-5 text-center">
            {data.map((zekr) => {
              return (
                <Suspense fallback={<Whiting />}>
                  <Zekr zekr={zekr} key={zekr.id} />
                </Suspense>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
//https://i.ibb.co/qyn6dW0/m2.png
//https://i.ibb.co/vcYFJ4L/m3.png
//https://i.ibb.co/Jv9fx32/m5.png
//https://i.ibb.co/hmMwYqW/m6.png
//https://i.ibb.co/TwYjNMj/m7.png
//https://i.ibb.co/RCzdvnY/m8.png
//https://i.ibb.co/25WxJ0h/m9.png
//https://i.ibb.co/ZYx28L1/m10.png
//https://i.ibb.co/xS925tq/m11.png
//https://i.ibb.co/Vj4qmmC/m12.png
//https://i.ibb.co/sWhLYQw/m13.png
//https://i.ibb.co/jrkf729/m14.png
//https://i.ibb.co/y8jStyD/m15.png
//https://i.ibb.co/RBz7VxJ/m16.png
