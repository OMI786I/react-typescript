function Component({ id, name }: { name: string; id: number }) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
}
export default Component;
