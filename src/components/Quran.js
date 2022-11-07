import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
function Quran() {
  const refAudio = useRef(null);
  let [data, setData] = useState([]);
  let [audio, setAudio] = useState("");
  let [displayPlayIcon, setdisplayPlayIcon] = useState("");
  let [displayPauseIcon, setdisplayPauseIcon] = useState("hidePause");
  const changeAudio = (url) => {
    setAudio(url);
    setdisplayPlayIcon("hidePlay");
    setdisplayPauseIcon("");
    if (refAudio.current) {
      refAudio.current.pause();
      refAudio.current.load();
    }
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
              <div className="sorah col-12 col-md-6 " key={sorah.id}>
                <div className="content d-flex justify-content-between align-items-center rounded-2 px-2 py-3">
                  <span>{sorah.title}</span>
                  <FaPlayCircle
                    size={35}
                    className={`${displayPlayIcon}`}
                    onClick={() => changeAudio(sorah.url)}
                  />

                  <FaPauseCircle
                    className={`${displayPauseIcon}`}
                    size={35}
                    onClick={() => {
                      setdisplayPlayIcon("");
                      setdisplayPauseIcon("hidePause");
                      refAudio.current.pause();
                    }}
                  />
                </div>
              </div>
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
