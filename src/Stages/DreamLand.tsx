/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Dreamland_render.glb --types --keepnames --instance --transform
*/

import * as THREE from 'three'
import {AnimationClip} from 'three'
import React, {useEffect, useRef} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type ActionName = 'whispy_idle'

interface GLTFAction extends AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
    nodes: {
        Joint_1_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_6_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_9_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_10_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_11_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_12_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_12_Object_1_SINGLE001: THREE.SkinnedMesh
        Joint_12_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_4_SINGLE: THREE.SkinnedMesh
        Joint_14_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_15_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_16_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_17_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_18_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_19_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_1_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_1_Object_1_SINGLE001: THREE.SkinnedMesh
        Joint_2_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_3_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_4_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_5_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_7_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_8_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_9_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_10_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_11_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_1_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_1_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_1_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_1_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_2_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_2_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_2_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_2_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_4_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_4_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_4_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_4_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_6_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_7_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_7_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_8_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_8_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_11_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_12_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_14_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_15_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_2_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_3_Object_0_SINGLE004: THREE.SkinnedMesh
        Joint_4_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_5_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_6_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_8_Object_0_SINGLE003: THREE.SkinnedMesh
        Joint_9_Object_0_SINGLE003: THREE.SkinnedMesh
        Cube: THREE.Mesh
        Joint_0_Object_0: THREE.Mesh
        JOBJ_0_1: THREE.Bone
        JOBJ_0_2: THREE.Bone
        JOBJ_0_3: THREE.Bone
        JOBJ_0_4: THREE.Bone
        JOBJ_0: THREE.Bone
    }
    materials: {
        Joint_1_Object_0_Material_0: THREE.MeshBasicMaterial
        ['Joint_3_Object_0_Material_0.003']: THREE.MeshBasicMaterial
        ['Joint_6_Object_0_Material_0.002']: THREE.MeshBasicMaterial
        ['Joint_9_Object_0_Material_0.002']: THREE.MeshBasicMaterial
        ['Joint_10_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_12_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_12_Object_1_Material_1.001']: THREE.MeshBasicMaterial
        Joint_13_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_13_Object_2_Material_2: THREE.MeshBasicMaterial
        Joint_13_Object_4_Material_4: THREE.MeshBasicMaterial
        Joint_14_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_15_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_17_Object_0_Material_0: THREE.MeshBasicMaterial
        ['Joint_1_Object_0_Material_0.002']: THREE.MeshBasicMaterial
        ['Joint_1_Object_1_Material_1.001']: THREE.MeshBasicMaterial
        ['Joint_2_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_3_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_4_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        Joint_10_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_11_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_12_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_12_Object_1_Material_1: THREE.MeshBasicMaterial
        ['Joint_1_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        Joint_1_Object_1_Material_1: THREE.MeshBasicMaterial
        Joint_1_Object_2_Material_2: THREE.MeshBasicMaterial
        Joint_2_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_2_Object_2_Material_2: THREE.MeshBasicMaterial
        Joint_6_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_7_Object_0_Material_0: THREE.MeshStandardMaterial
        Joint_7_Object_1_Material_1: THREE.MeshBasicMaterial
        Joint_8_Object_1_Material_1: THREE.MeshBasicMaterial
        ['Joint_11_Object_0_Material_0.003']: THREE.MeshStandardMaterial
        ['Joint_15_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_2_Object_0_Material_0.002']: THREE.MeshBasicMaterial
        ['Joint_3_Object_0_Material_0.004']: THREE.MeshBasicMaterial
        ['Joint_5_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_6_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        ['Joint_8_Object_0_Material_0.002']: THREE.MeshBasicMaterial
        Material: THREE.MeshBasicMaterial
        ['Joint_1_Object_1_Material_1.001']: THREE.MeshBasicMaterial
    },
    animations: GLTFAction[]
}

export default function DreamLand(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null)
    const {
        nodes,
        materials,
        animations
    } = useGLTF(`Dreamland_render-transformed.glb`) as unknown as GLTFResult
    const {actions} = useAnimations(animations, group)
    const music = new Audio("music/DreamLand.mp3")
    music.loop = true;

    useEffect(() => {
        music.play()
        actions.whispy_idle?.play()

        return () => {
            music.pause()
        }
    }, [])
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_1}/>
                    <skinnedMesh name="Joint_1_Object_0_SINGLE" geometry={nodes.Joint_1_Object_0_SINGLE.geometry}
                                 material={materials.Joint_1_Object_0_Material_0}
                                 skeleton={nodes.Joint_1_Object_0_SINGLE.skeleton}/>
                </group>
                <group name="Armature004" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_2}/>
                    <skinnedMesh name="Joint_3_Object_0_SINGLE003" geometry={nodes.Joint_3_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.003']}
                                 skeleton={nodes.Joint_3_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_6_Object_0_SINGLE002" geometry={nodes.Joint_6_Object_0_SINGLE002.geometry}
                                 material={materials['Joint_6_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_6_Object_0_SINGLE002.skeleton}/>
                    <skinnedMesh name="Joint_9_Object_0_SINGLE002" geometry={nodes.Joint_9_Object_0_SINGLE002.geometry}
                                 material={materials['Joint_9_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_9_Object_0_SINGLE002.skeleton}/>
                </group>
                <group name="Armature002" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_3}/>
                    <skinnedMesh name="Joint_10_Object_0_SINGLE001"
                                 geometry={nodes.Joint_10_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_10_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_10_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_11_Object_0_SINGLE001"
                                 geometry={nodes.Joint_11_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_10_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_11_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_0_SINGLE001"
                                 geometry={nodes.Joint_12_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_12_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_12_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_1_SINGLE001"
                                 geometry={nodes.Joint_12_Object_1_SINGLE001.geometry}
                                 material={materials['Joint_12_Object_1_Material_1.001']}
                                 skeleton={nodes.Joint_12_Object_1_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_2_SINGLE" geometry={nodes.Joint_12_Object_2_SINGLE.geometry}
                                 material={materials['Joint_12_Object_1_Material_1.001']}
                                 skeleton={nodes.Joint_12_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_0_SINGLE" geometry={nodes.Joint_13_Object_0_SINGLE.geometry}
                                 material={materials.Joint_13_Object_0_Material_0}
                                 skeleton={nodes.Joint_13_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_1_SINGLE" geometry={nodes.Joint_13_Object_1_SINGLE.geometry}
                                 material={materials.Joint_13_Object_0_Material_0}
                                 skeleton={nodes.Joint_13_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_2_SINGLE" geometry={nodes.Joint_13_Object_2_SINGLE.geometry}
                                 material={materials.Joint_13_Object_2_Material_2}
                                 skeleton={nodes.Joint_13_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_3_SINGLE" geometry={nodes.Joint_13_Object_3_SINGLE.geometry}
                                 material={materials.Joint_13_Object_2_Material_2}
                                 skeleton={nodes.Joint_13_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_4_SINGLE" geometry={nodes.Joint_13_Object_4_SINGLE.geometry}
                                 material={materials.Joint_13_Object_4_Material_4}
                                 skeleton={nodes.Joint_13_Object_4_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_0_SINGLE" geometry={nodes.Joint_14_Object_0_SINGLE.geometry}
                                 material={materials.Joint_14_Object_0_Material_0}
                                 skeleton={nodes.Joint_14_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_0_SINGLE" geometry={nodes.Joint_15_Object_0_SINGLE.geometry}
                                 material={materials.Joint_15_Object_0_Material_0}
                                 skeleton={nodes.Joint_15_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_16_Object_0_SINGLE" geometry={nodes.Joint_16_Object_0_SINGLE.geometry}
                                 material={materials.Joint_15_Object_0_Material_0}
                                 skeleton={nodes.Joint_16_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_17_Object_0_SINGLE" geometry={nodes.Joint_17_Object_0_SINGLE.geometry}
                                 material={materials.Joint_17_Object_0_Material_0}
                                 skeleton={nodes.Joint_17_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_18_Object_0_SINGLE" geometry={nodes.Joint_18_Object_0_SINGLE.geometry}
                                 material={materials.Joint_17_Object_0_Material_0}
                                 skeleton={nodes.Joint_18_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_19_Object_0_SINGLE" geometry={nodes.Joint_19_Object_0_SINGLE.geometry}
                                 material={materials.Joint_14_Object_0_Material_0}
                                 skeleton={nodes.Joint_19_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_0_SINGLE002" geometry={nodes.Joint_1_Object_0_SINGLE002.geometry}
                                 material={materials['Joint_1_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_1_Object_0_SINGLE002.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_1_SINGLE001" geometry={nodes.Joint_1_Object_1_SINGLE001.geometry}
                                 material={materials['Joint_1_Object_1_Material_1.001']}
                                 skeleton={nodes.Joint_1_Object_1_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_2_Object_0_SINGLE001" geometry={nodes.Joint_2_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_2_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_2_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_0_SINGLE001" geometry={nodes.Joint_3_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_3_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_4_Object_0_SINGLE001" geometry={nodes.Joint_4_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_4_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_4_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_5_Object_0_SINGLE" geometry={nodes.Joint_5_Object_0_SINGLE.geometry}
                                 material={materials['Joint_4_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_5_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_7_Object_0_SINGLE001" geometry={nodes.Joint_7_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_4_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_7_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_8_Object_0_SINGLE001" geometry={nodes.Joint_8_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_10_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_8_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_9_Object_0_SINGLE" geometry={nodes.Joint_9_Object_0_SINGLE.geometry}
                                 material={materials['Joint_10_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_9_Object_0_SINGLE.skeleton}/>
                </group>
                <group name="Armature001" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_4}/>
                    <skinnedMesh name="Joint_10_Object_0_SINGLE" geometry={nodes.Joint_10_Object_0_SINGLE.geometry}
                                 material={materials.Joint_10_Object_0_Material_0}
                                 skeleton={nodes.Joint_10_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_11_Object_0_SINGLE" geometry={nodes.Joint_11_Object_0_SINGLE.geometry}
                                 material={materials.Joint_11_Object_0_Material_0}
                                 skeleton={nodes.Joint_11_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_0_SINGLE" geometry={nodes.Joint_12_Object_0_SINGLE.geometry}
                                 material={materials.Joint_12_Object_0_Material_0}
                                 skeleton={nodes.Joint_12_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_1_SINGLE" geometry={nodes.Joint_12_Object_1_SINGLE.geometry}
                                 material={materials.Joint_12_Object_1_Material_1}
                                 skeleton={nodes.Joint_12_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_0_SINGLE001" geometry={nodes.Joint_1_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_1_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_1_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_1_SINGLE" geometry={nodes.Joint_1_Object_1_SINGLE.geometry}
                                 material={materials.Joint_1_Object_1_Material_1}
                                 skeleton={nodes.Joint_1_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_2_SINGLE" geometry={nodes.Joint_1_Object_2_SINGLE.geometry}
                                 material={materials.Joint_1_Object_2_Material_2}
                                 skeleton={nodes.Joint_1_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_3_SINGLE" geometry={nodes.Joint_1_Object_3_SINGLE.geometry}
                                 material={materials.Joint_1_Object_2_Material_2}
                                 skeleton={nodes.Joint_1_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_2_Object_0_SINGLE" geometry={nodes.Joint_2_Object_0_SINGLE.geometry}
                                 material={materials.Joint_2_Object_0_Material_0}
                                 skeleton={nodes.Joint_2_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_2_Object_1_SINGLE" geometry={nodes.Joint_2_Object_1_SINGLE.geometry}
                                 material={materials.Joint_2_Object_0_Material_0}
                                 skeleton={nodes.Joint_2_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_2_Object_2_SINGLE" geometry={nodes.Joint_2_Object_2_SINGLE.geometry}
                                 material={materials.Joint_2_Object_2_Material_2}
                                 skeleton={nodes.Joint_2_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_2_Object_3_SINGLE" geometry={nodes.Joint_2_Object_3_SINGLE.geometry}
                                 material={materials.Joint_2_Object_2_Material_2}
                                 skeleton={nodes.Joint_2_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_0_SINGLE" geometry={nodes.Joint_3_Object_0_SINGLE.geometry}
                                 material={materials.Joint_2_Object_0_Material_0}
                                 skeleton={nodes.Joint_3_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_1_SINGLE" geometry={nodes.Joint_3_Object_1_SINGLE.geometry}
                                 material={materials.Joint_2_Object_0_Material_0}
                                 skeleton={nodes.Joint_3_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_2_SINGLE" geometry={nodes.Joint_3_Object_2_SINGLE.geometry}
                                 material={materials.Joint_2_Object_2_Material_2}
                                 skeleton={nodes.Joint_3_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_3_SINGLE" geometry={nodes.Joint_3_Object_3_SINGLE.geometry}
                                 material={materials.Joint_2_Object_2_Material_2}
                                 skeleton={nodes.Joint_3_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_4_Object_0_SINGLE" geometry={nodes.Joint_4_Object_0_SINGLE.geometry}
                                 material={materials.Joint_2_Object_0_Material_0}
                                 skeleton={nodes.Joint_4_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_4_Object_1_SINGLE" geometry={nodes.Joint_4_Object_1_SINGLE.geometry}
                                 material={materials.Joint_2_Object_0_Material_0}
                                 skeleton={nodes.Joint_4_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_4_Object_2_SINGLE" geometry={nodes.Joint_4_Object_2_SINGLE.geometry}
                                 material={materials.Joint_2_Object_2_Material_2}
                                 skeleton={nodes.Joint_4_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_4_Object_3_SINGLE" geometry={nodes.Joint_4_Object_3_SINGLE.geometry}
                                 material={materials.Joint_2_Object_2_Material_2}
                                 skeleton={nodes.Joint_4_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_6_Object_0_SINGLE" geometry={nodes.Joint_6_Object_0_SINGLE.geometry}
                                 material={materials.Joint_6_Object_0_Material_0}
                                 skeleton={nodes.Joint_6_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_7_Object_0_SINGLE" geometry={nodes.Joint_7_Object_0_SINGLE.geometry}
                                 material={materials.Joint_7_Object_0_Material_0}
                                 skeleton={nodes.Joint_7_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_7_Object_1_SINGLE" geometry={nodes.Joint_7_Object_1_SINGLE.geometry}
                                 material={materials.Joint_7_Object_1_Material_1}
                                 skeleton={nodes.Joint_7_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_8_Object_0_SINGLE" geometry={nodes.Joint_8_Object_0_SINGLE.geometry}
                                 material={materials.Joint_7_Object_0_Material_0}
                                 skeleton={nodes.Joint_8_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_8_Object_1_SINGLE" geometry={nodes.Joint_8_Object_1_SINGLE.geometry}
                                 material={materials.Joint_8_Object_1_Material_1}
                                 skeleton={nodes.Joint_8_Object_1_SINGLE.skeleton}/>
                </group>
                <group name="Armature005" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0}/>
                    <skinnedMesh name="Joint_11_Object_0_SINGLE003"
                                 geometry={nodes.Joint_11_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_11_Object_0_Material_0.003']}
                                 skeleton={nodes.Joint_11_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_0_SINGLE003"
                                 geometry={nodes.Joint_12_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_6_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_12_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_0_SINGLE002"
                                 geometry={nodes.Joint_14_Object_0_SINGLE002.geometry}
                                 material={materials['Joint_11_Object_0_Material_0.003']}
                                 skeleton={nodes.Joint_14_Object_0_SINGLE002.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_0_SINGLE002"
                                 geometry={nodes.Joint_15_Object_0_SINGLE002.geometry}
                                 material={materials['Joint_15_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_15_Object_0_SINGLE002.skeleton}/>
                    <skinnedMesh name="Joint_2_Object_0_SINGLE003" geometry={nodes.Joint_2_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_2_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_2_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_0_SINGLE004" geometry={nodes.Joint_3_Object_0_SINGLE004.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.004']}
                                 skeleton={nodes.Joint_3_Object_0_SINGLE004.skeleton}/>
                    <skinnedMesh name="Joint_4_Object_0_SINGLE003" geometry={nodes.Joint_4_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.004']}
                                 skeleton={nodes.Joint_4_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_5_Object_0_SINGLE002" geometry={nodes.Joint_5_Object_0_SINGLE002.geometry}
                                 material={materials['Joint_5_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_5_Object_0_SINGLE002.skeleton}/>
                    <skinnedMesh name="Joint_6_Object_0_SINGLE003" geometry={nodes.Joint_6_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_6_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_6_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_8_Object_0_SINGLE003" geometry={nodes.Joint_8_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_8_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_8_Object_0_SINGLE003.skeleton}/>
                    <skinnedMesh name="Joint_9_Object_0_SINGLE003" geometry={nodes.Joint_9_Object_0_SINGLE003.geometry}
                                 material={materials['Joint_8_Object_0_Material_0.002']}
                                 skeleton={nodes.Joint_9_Object_0_SINGLE003.skeleton}/>
                </group>
                <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} scale={-879.84}/>
                <mesh name="Joint_0_Object_0" geometry={nodes.Joint_0_Object_0.geometry}
                      material={materials['Joint_1_Object_1_Material_1.001']} rotation={[Math.PI / 2, 0, 0]}/>
            </group>
        </group>
    )
}

useGLTF.preload('/Dreamland_render-transformed.glb')
