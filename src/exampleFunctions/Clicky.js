import { useState } from "react";

const Clicky = () => {
  let [clicked, setClicked] = useState(0);

  const handleClick = () => {
    console.log("clicked");

    setClicked(clicked + 1);
  };

  return (
    <div>
      <h1>Button has been clicked {clicked} times</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Clicky;
