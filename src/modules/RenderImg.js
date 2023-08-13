import React from "react";
import { useEffect, useState, forceUpdate } from "react";

function RenderImg({ images, setActive, popUpImgUrl, setPopUpImgUrl }) {
  return images.map((val) => {
    return (
      <div
        onClick={(props) => {
          setActive(true);
          let popUrl = props.target;
          popUrl = popUrl["style"]["backgroundImage"];
          popUrl = popUrl.replace('url("', "");
          popUrl = popUrl.replace('")', "");
          setPopUpImgUrl(popUrl);
        }}
        className="sample-img-grid"
        style={{
          backgroundImage: `url(${val.src})`,
        }}
        key={val.id}
      ></div>
    );
  });
}

export default RenderImg;
