import '../App.css';
import { Suspense, useState } from "react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box.js";
import Sphere from "./AnimatedSphere.js";
import Archer from "./Archer.js";

function Interface() {
  const [action, setAction] = useState("StandingIdle");
  return (
    <div className="Interface">
      <div className="set">
        <div className="stage" style={{ width: "50vh", height: "50vh" }} >
          <>
          <Canvas>
            <ambientLight />
            <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
            <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
            <pointLight intensity={2} position={[0, 3, -10]} color="white" />
            <Suspense fallback={null}>
            <Archer action={action} />
            </Suspense>
            <OrbitControls />
          </Canvas>
          <div className="controls">
            <button onClick={() => {setAction("RunForward")}}>Run Forward</button>
            <button onClick={() => {setAction("DeathBackwards")}}>Death</button>
            <button onClick={() => {setAction("DrawArrow")}}>Draw arrow</button>
            <button onClick={() => {setAction("StandingIdle")}}>Idle</button>
          </div>
          </>
        </div>
        <div className="collection">
          <div className="design">
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Box />
            </Canvas>
          </div>
          <div className="design">
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Sphere />
            </Canvas>
          </div>
          <div className="design">
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Box />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface;
