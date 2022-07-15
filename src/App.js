import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="App text-center bg-secondary bg-gradient p-3">
          Ghumne Chale?.com
        </h2>
        <div className="card-container">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
