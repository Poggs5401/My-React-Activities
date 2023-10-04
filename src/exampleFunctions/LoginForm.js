import { useState } from "react";

const LoginForm = () => {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(`${username} has logged in!`);
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label>
          Username: 
          <input type="text" onChange = {handleChange} value={username}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {username && <h2>Welcome {username}!</h2>}
    </>
  );
};

export default LoginForm;
