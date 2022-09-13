import React from "react";
import { Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "./map.jpg";

export default function AnimatedSphere() {
  const colorMap = useLoader(TextureLoader, texture);
  return <Sphere visible args={[1, 100, 200]} scale={2}>
    <meshStandardMaterial map={colorMap} />
  </Sphere>
}
