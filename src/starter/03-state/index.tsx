import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/contact",
    text: "Contact",
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
  },
];

function Component() {
  const [text, setText] = useState("string");
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState(navLinks);
  return (
    <div>
      <h2>React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("typescript");
          setList(["hello", "omi"]);
          setLinks([...links, { id: 4, url: "hello", text: "hello" }]);
        }}
      >
        Click me!
      </button>
      <h2>{text}</h2>
      <h1>{list}</h1>
    </div>
  );
}
export default Component;
