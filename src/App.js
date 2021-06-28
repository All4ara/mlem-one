import './App.css';
import Header from "./components/Header"
import MlemCards from "./components/MlemCards"


function App() {
  return (
    // BEM class naming convention
    <div className="app">

      {/* Header */}
      <Header />

      {/* MlemCards */}
      <MlemCards /> 

      {/* SwipeButtons */}

    </div>
  );
}

export default App;
