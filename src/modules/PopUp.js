function PopUp({ active, setActive, popUpImgUrl }) {
  return (
    <div className={active ? "pop-up active" : "pop-up"}>
      <span onClick={() => setActive(false)}>&times;</span>
      <div
        className="pop-img-div"
        style={{
          backgroundImage: `url("img/1.jpg")`,
        }}
      ></div>
      <img src={popUpImgUrl} />
    </div>
  );
}

export default PopUp;
