import "./App.css";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import Player from "./components/Player";
import Navigation from "./components/Navigation";
// import Player from "./components/Player";
function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Player />
        <Footer />
      </div>
    </>
  );
}

export default App;
