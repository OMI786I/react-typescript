import Component from "./starter/05-challenge";
function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component type="basic" name="omi" />
      <Component type="advanced" name="onni" email="onni@gmail.com" />
    </main>
  );
}

export default App;
