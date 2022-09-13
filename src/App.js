import logo from './logo.svg';
import { Suspense } from "react";
import './App.css';
import Interface from "./components/Interface.js";
import { Canvas } from "@react-three/fiber";
import Buddy from "./components/Buddy.js";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Canvas style={{ width: "70vh", height: "70vh" }} className="buddy" >
          <ambientLight />
          <Suspense fallback={null}>
            <Buddy />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </header>
      <Interface />
    </div>
  );
}

export default App;
