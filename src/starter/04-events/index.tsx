import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget)
    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Events</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input mb-1"
          type="text"
          name="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="email"
          className="form-input mb-1"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <p>{text}</p>
      <p>{email}</p>
    </div>
  );
}
export default Component;
