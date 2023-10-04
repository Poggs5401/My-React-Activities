import { useState } from "react";

const Clicky = () => {
  let [clicked, setClicked] = useState(0);

  const increaseClick = () => {
    console.log("clicked");

    setClicked(clicked + 1);
  };

  const decreaseClick = () => {
    console.log("clicked");

    setClicked(clicked - 1);
  };

  return (
    <div>
      <h1>Button has been clicked {clicked} times</h1>
      <button onClick={increaseClick}>Click me to Increase!</button>
      <button onClick={decreaseClick}>Click me to Decrease!</button>
    </div>
  );
};

export default Clicky;
