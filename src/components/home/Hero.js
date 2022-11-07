import React from "react";
import video from "../../dist/images/pexels-viresh-studio-5243307.mp4";
function Hero() {
  return (
    <div className="hero">
      <video src={video} loop autoPlay muted className="video" />
      <div className="welcom d-flex justify-content-center align-items-center">
        <div className="content d-flex justify-content-center align-items-center p-md-5 p-2 rounded-3">
          <h1>
            مرحبا بك في أذكاري ,عملنا في هذا الموقع علي ان نقدم لك مجموعة من
            الاذكار , التي هي بمثابة حصنك الذي تتحصن به في يومك , وحرصنا علي ان
            تكون هذه الاذكار منتقا من الاحاديث النبوية الصحيحة .ومن القرأن
            الكريم سائلين المولي أن ينتفع بها قارئها كما اننا خصصنا صفحة للاستمتاع باستماع القران الكريم وايضا صفحة للمسبحة الالكترونية
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
