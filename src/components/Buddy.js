/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/buddy.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
    actions.Talk.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[-3, -11, 1]} rotation={[0, 2.2, 0]} scale={1.5} >
        <group name="Armature">
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone004} />
          <skinnedMesh name="rock_lp2" geometry={nodes.rock_lp2.geometry} material={materials.Default} skeleton={nodes.rock_lp2.skeleton} />
        </group>
        <group name="Armature001" position={[-1.03, 6.13, 0.57]} rotation={[Math.PI / 2, 0, 0.88]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Ch44">
            <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Ch44_Body} skeleton={nodes.Mesh.skeleton} />
            <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.Ch44_body1} skeleton={nodes.Mesh_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/buddy.glb')
