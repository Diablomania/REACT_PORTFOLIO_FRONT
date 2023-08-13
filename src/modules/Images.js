import { useEffect, useReducer, useState } from "react";
import RenderImg from "./RenderImg";

function Images({ setActive, popUpImgUrl, setPopUpImgUrl, postValue }) {
  let [image, setImage] = useState([]);
  let [image1, setImage1] = useState([
    { id: 1, src: "img/1.jpg" },
    { id: 2, src: "img/2.jpg" },
    { id: 3, src: "img/3.jpg" },
    { id: 4, src: "img/4.jpg" },
  ]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    fetch(postValue, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => setImage(response));
  }, [postValue]);

  return (
    <div className="col">
      <RenderImg
        setPopUpImgUrl={setPopUpImgUrl}
        popUpImgUrl={popUpImgUrl}
        setActive={setActive}
        images={image}
      />
    </div>
  );
}

export default Images;
