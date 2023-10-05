import { useState } from "react";

const MultipleForm = () => {
  const [form, setForm] = useState({
    checkbox: true
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox"? e.target.checked : e.target.value;

    console.log(`Input name: ${name}. Input value: ${value}.`);

    setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
  };

  return (
    <form>
      <label>
        Email:
        <input type="text" name="email" onChange={handleInputChange} value={form.email} />
      </label>
      <br />
      <label>
        Password:
        <input type="text" name="password" onChange={handleInputChange} value={form.password} />
      </label>
      <br />
      <label>
        I wish to receive the weekly newsletter:
        <input type="checkbox" name="checkbox" checked={form.checkbox} onChange={handleInputChange} />
      </label>
    </form>
  );
};

export default MultipleForm;
