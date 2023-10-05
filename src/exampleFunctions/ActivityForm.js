import { useState } from "react";

const ActivityForm = () => {
  const [form, setForm] = useState({
    checkbox: true,
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    console.log(`Input name: ${name}. Input value: ${value}.`);

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={form.username}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={form.email}
          />
        </label>
        <br />
        <label>
          Number of Months:
          <input
            type="number"
            name="numberofmonths"
            onChange={handleInputChange}
            value={form.numberofmonths}
          />
        </label>
        <br />
        <label>
          Insurance:
          <input
            type="checkbox"
            name="checkbox"
            checked={form.checkbox}
            onChange={handleInputChange}
          />
        </label>
      </form>
      Hi, {form.username}! You have selected a {form.numberofmonths} month
      contract {form.checkbox ? "with" : "without"} insurance.
    </div>
  );
};

export default ActivityForm;
