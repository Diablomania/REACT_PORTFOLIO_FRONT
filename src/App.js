import React from "react";
import Images from "./modules/Images";
import Header from "./modules/header.js";
import Content from "./modules/content.js";
import Footer from "./modules/footer.js";
import PopUp from "./modules/PopUp";
import Menu from "./modules/Menu.js";
import { useEffect, useReducer, useState } from "react";
import { NavLink, Route } from "react-router-dom";

function App() {
  const [popUpImgUrl, setPopUpImgUrl] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [postValue, setPostValue] = useState("/all");
  const [reducerValue1, forceUpdate1] = useReducer((x) => x + 1, 0);

  console.log("rendering...");

  return (
    <div>
      <Menu setPostValue={setPostValue} postValue={postValue} />
      <Header />
      <Images
        postValue={postValue}
        setActive={setModalActive}
        setPopUpImgUrl={setPopUpImgUrl}
        popUpImgUrl={popUpImgUrl}
      />
      <PopUp
        active={modalActive}
        setActive={setModalActive}
        popUpImgUrl={popUpImgUrl}
      />
      <Footer />
    </div>
  );
}

export default App;
