import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Item from "./Item";
function Quran() {
  const refAudio = useRef(null);
  let [data, setData] = useState([]);
  let [audio, setAudio] = useState("");

  const changeAudio = (url) => {
    setAudio(url);
    if (refAudio.current) {
      refAudio.current.pause();
      refAudio.current.load();
    }
  };
  const pause = () => {
    refAudio.current.pause();
  };
  useEffect(() => {
    const res = async () => {
      await axios
        .get(
          "https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/quran/get-recitation/326582/ar/json"
        )
        .then((res) => {
          setData(res.data.attachments);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    res();

  }, []);
  return (
    <div className="quran py-5">
      <div className="container  py-5">
        <h2 className="p-4">القران الكريم بصوت القارئ مشاري راشد </h2>
        <div className="row g-4">
          {data.map((sorah) => {
            return (
              <Item
                item={sorah}
                changeAudio={changeAudio}
                pause={pause}
                key={sorah.id}
                curuntAudio={audio}
             
              />
            );
          })}
          <div className="audio py-3">
            <audio controls autoPlay ref={refAudio}>
              <source src={`${audio}`} type="audio/mp3" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quran;
