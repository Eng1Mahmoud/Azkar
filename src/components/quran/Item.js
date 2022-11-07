import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
function Item({ item, changeAudio, pause, curuntAudio}) {
  let { id, title, url } = item;
  let [displayPlayIcon, setdisplayPlayIcon] = useState("");
  let [displayPauseIcon, setdisplayPauseIcon] = useState("hidePause");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if ((curuntAudio !== url && curuntAudio !== "")) {
      // close any audio if play anther audio
      setdisplayPauseIcon("hidePause");
      setdisplayPlayIcon("");
    }
  });
  return (
    <div className="sorah col-12 col-md-6 " key={id}>
      <div className="content d-flex justify-content-between align-items-center rounded-2 px-2 py-3">
        <span>{title}</span>
        <FaPlayCircle
          size={35}
          className={`${displayPlayIcon} icon`}
          onClick={() => {
            if (displayPauseIcon === "") {
              setdisplayPauseIcon("hidePause");
            }
            changeAudio(url);
            setdisplayPlayIcon("hidePlay");
            setdisplayPauseIcon("");
          }}
        />

        <FaPauseCircle
          className={`${displayPauseIcon} icon`}
          size={35}
          onClick={() => {
            setdisplayPlayIcon("");
            setdisplayPauseIcon("hidePause");
            pause();
          }}
        />
      </div>
    </div>
  );
}

export default Item;
