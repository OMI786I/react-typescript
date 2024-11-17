type BasicInput = {
  type: "basic";
  name: string;
};
type AdvancedInput = {
  type: "advanced";
  name: string;
  email: string;
};

type Input = BasicInput | AdvancedInput;

function Component(props: Input) {
  const { type, name } = props;

  if (type === "basic") {
    return (
      <div>
        <h2>user: {name}</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
      }}
    >
      <h2>user: {name}</h2>
      <h2>email: {props.email}</h2>
    </div>
  );
}
export default Component;
