import { type PropsWithChildren } from "react";

// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };
type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ id, name, children }: ComponentProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <p>{id}</p>
      <p>{name}</p>
      <p>{children}</p>
    </div>
  );
}
export default Component;
