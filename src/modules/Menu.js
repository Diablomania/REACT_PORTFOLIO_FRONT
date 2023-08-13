import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Route,
} from "react-router-dom";

function Menu({ setPostValue, postValue }) {
  let isActive = (props) => {
    let all = document.getElementsByClassName("All")[0].className;
    let human = document.getElementsByClassName("Human")[0].className;
    let nature = document.getElementsByClassName("Nature")[0].className;
    let animals = document.getElementsByClassName("Animals")[0].className;
    let other = document.getElementsByClassName("Other")[0].className;
    let s = props.target["className"] + " activeElMenu";
    let so = props.target["className"];
    let bool = so.includes("activeElMenu");
    allFn(so);
    let changeMenuActive = () => {
      document.getElementsByClassName("All")[0].className = all.replace(
        "activeElMenu",
        ""
      );
      document.getElementsByClassName("Human")[0].className = human.replace(
        "activeElMenu",
        ""
      );
      document.getElementsByClassName("Nature")[0].className = nature.replace(
        "activeElMenu",
        ""
      );
      document.getElementsByClassName("Animals")[0].className = animals.replace(
        "activeElMenu",
        ""
      );
      document.getElementsByClassName("Other")[0].className = other.replace(
        "activeElMenu",
        ""
      );
      document.getElementsByClassName(so)[0].className = s;
    };

    !bool ? changeMenuActive() : console.log("It active");
  };

  const allFn = (props) => {
    !props.includes("All") ? console.log(props) : setPostValue("/all");
    !props.includes("Human") ? console.log(props) : setPostValue("/human");
    !props.includes("Nature") ? console.log(props) : setPostValue("/nature");
  };

  return (
    <div className="menuContainer">
      <div className="menuEl All activeElMenu" onClick={isActive}>
        &#x61;ll
      </div>
      <div className="menuEl Human" onClick={isActive}>
        Human
      </div>
      <div className="menuEl Nature" onClick={isActive}>
        Nature
      </div>
      <div className="menuEl Animals" onClick={isActive}>
        &#x61;nimals
      </div>
      <div className="menuEl Other" onClick={isActive}>
        Other
      </div>
    </div>
  );
}

export default Menu;
