/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/TrophyStand.glb --types --keepnames --transform
*/

import * as THREE from 'three'
import React from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0019: THREE.Mesh
  }
  materials: {
    Tex_0005_0_dds: THREE.MeshStandardMaterial
  }
}

export function TrophyStand(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/TrophyStand-transformed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="Mesh_0019" geometry={nodes.Mesh_0019.geometry} material={materials.Tex_0005_0_dds} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/TrophyStand-transformed.glb')
