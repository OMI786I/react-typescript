import Component from "./starter/02-props";
function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component id={2} name="Omi" />
      <Component id={9} name="jahid">
        <h1>Hellow world</h1>
      </Component>
    </main>
  );
}

export default App;
