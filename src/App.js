import React, { useState, Suspense } from "react";
import Navbar from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";
import Whiting from "./components/Whiting";
import Register from "./components/regester/Register";
let HomePage = React.lazy(() => import("./components/home/HomePage"));
let Azkar = React.lazy(() => import("./components/azkar/Container"));
let Other = React.lazy(() => import("./components/other/Other"));
let DetailsOFZekr = React.lazy(() =>
  import("./components/other/DetailsOFZekr")
);
let Maspaha = React.lazy(() => import("./components/Maspaha"));
let Quran = React.lazy(() => import("./components/quran/Quran"));
function App() {
  let [hide, setHide] = useState("hide");

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 400) {
      setHide("hide");
    } else if (window.scrollY > 400) {
      setHide(" ");
    }
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Aside />
        <Routes>
          <Route
            path="/"
            index
            element={
              <Suspense fallback={<Whiting />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/sapah"
            element={
              <Suspense fallback={<Whiting />}>
                <Azkar
                  api="https://azkary.glitch.me/azkar-spah"
                  catigory="الصباح"
                />
              </Suspense>
            }
          />
          <Route
            path="/masaa"
            element={
              <Suspense fallback={<Whiting />}>
                <Azkar
                  api="https://azkary.glitch.me/azkar-masaa"
                  catigory="المساء"
                />
              </Suspense>
            }
          />
          <Route
            path="/detailsofzekr"
            element={
              <Suspense fallback={<Whiting />}>
                <DetailsOFZekr />
              </Suspense>
            }
          />
          <Route
            path="/other"
            element={
              <Suspense fallback={<Whiting />}>
                <Other />
              </Suspense>
            }
          />
          <Route
            path="/maspaha"
            element={
              <Suspense fallback={<Whiting />}>
                <Maspaha />
              </Suspense>
            }
          />
          <Route
            path="/quran"
            element={
              <Suspense fallback={<Whiting />}>
                <Quran />
              </Suspense>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>

        <FaAngleUp
          className={`scroll-to-top ${hide} p-2 rounded`}
          onClick={() => window.scrollTo(0, 0)}
        />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
