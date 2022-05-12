import { Footer } from "./Components";
import { Home, Mint } from "./Pages";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <Footer />
    </div>
  );
}

export default App;
