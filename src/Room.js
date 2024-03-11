import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/envWLamp-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Material} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.krzeslo_1} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.krzeslo_okno} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.krzeslo_prawe} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.krzeslo_srodek} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.podloga} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.sciana_okno} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['stolik.001']} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.001']} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_15.geometry} material={materials['Material.005']} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.mata} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.stolik} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
      <mesh geometry={nodes.Obj_012.geometry} material={materials.Glass_Milky__1} position={[0.021, -0.732, -0.117]} rotation={[-Math.PI / 2, 0, 2.353]} scale={0.0004} />
      <mesh geometry={nodes.Obj_000001.geometry} material={materials.Material__3} position={[0.055, -0.824, -0.15]} rotation={[-Math.PI / 2, 0, 2.353]} scale={0.0004} />
      <mesh geometry={nodes.Circle002.geometry} material={materials.BlackMetal} position={[0.055, -0.824, -0.15]} rotation={[-Math.PI / 2, 0, 2.353]} scale={0.0004} />
      <mesh geometry={nodes.Object_3.geometry} material={materials['Material.002']} position={[0.017, -0.892, -0.124]} rotation={[-Math.PI / 2, 0, 0]} scale={0.084} />
    </group>
  )
}

useGLTF.preload('/envWLamp-transformed.glb')
