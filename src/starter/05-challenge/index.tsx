type Input = {
  type: string;
  name: string;
  email?: string;
};

function Component({ name, email, type }: Input) {
  return (
    <div>
      {type == "basic" ? (
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "red",
          }}
        >
          <p>{name}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}
export default Component;
