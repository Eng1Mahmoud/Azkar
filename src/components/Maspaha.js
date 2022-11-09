import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaImages } from "react-icons/fa";
function Maspaha() {
  const ref = useRef();
  const refInput = useRef();
  let [data, setData] = useState([]);
  let [counter, setCounter] = useState(0);
  let [activeImage, setActiveImage] = useState(
    "https://i.ibb.co/TwYjNMj/m7.png"
  );
  let [input, setInput] = useState("لا حول ولا قوة الا بالله ");
  console.log(input);
  const increased = () => {
    setCounter(++counter);
  };
  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    const res = async () => {
      await axios
        .get("https://azkary.glitch.me/images")
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
    <div className="maspaha p-5 px-1 px-md-5 ">
      <div className="container  p-5 px-1 px-md-5">
        <h2 className="p-4">المسبحة الالكترونية</h2>
        <div className="box text-center p-5 px-1 px-md-2 rounded-4 w-75 mx-auto">
          <div className="image mx-auto ">
            <img src={activeImage} alt="maspaha" loading="lazy" />
            <span className="count rounded-circle" onClick={increased}></span>
            <span className="reset rounded-circle" onClick={reset}></span>
            <span className="number">{counter}</span>
          </div>
          <div className="zekr p-3">{input}</div>
          <div className="add w-50 mx-auto">
            <button
              onClick={() => setInput(refInput.current.value)}
              className="w-25 ">
              اضافة
            </button>
            <input
              type="text"
              placeholder="اضافة ذكر "
              ref={refInput}
              className="w-75 "
            />
          </div>
        </div>
      </div>
      <div className="list-of-images ">
        <FaImages
          size={40}
          className="icon mb-1 p-1 rounded"
          onClick={() => {
            ref.current.classList.toggle("visible");
          }}
        />
        <div className="row  rounded-2 " ref={ref}>
          {data.map((img, i) => {
            return (
              <div
                className="img col-6  d-flex justify-content-center mb-1"
                key={i}>
                <img
                  src={img}
                  alt="img"
                  loading="lazy"
                  onClick={() => setActiveImage(img)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Maspaha;
