import { useState, useEffect } from "react";

const CountDown = (props) => {
  const [count, setCount] = useState(props.startValue);
    useEffect(() => {
        setTimeout(() => {
            setCount(count - 1);
        }, 1000);
    }, [count]);
  if (count > 0) {
    return <h2>Time remaining: {count} seconds </h2>;
  } else {
    return <h2>Time is up!</h2>;
  }
};

export default CountDown;
