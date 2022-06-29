import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/componentA";

function App() {
  const testContact = {
    name: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contact={testContact} />
      </header>
    </div>
  );
}

export default App;
