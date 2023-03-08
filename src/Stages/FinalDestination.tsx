/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";

export default function FinalDestination(props) {
    const group = useRef();
    const {nodes, materials, animations} = useGLTF(
        "/FinalDestination_render.glb"
    );
    const {actions} = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="model">
                <group name="model_skeleton" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0}/>
                    <skinnedMesh
                        name="Joint_11_Object_0_SINGLE"
                        geometry={nodes.Joint_11_Object_0_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_11_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_11_Object_1_SINGLE"
                        geometry={nodes.Joint_11_Object_1_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_11_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_0_SINGLE"
                        geometry={nodes.Joint_13_Object_0_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_13_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_1_SINGLE"
                        geometry={nodes.Joint_13_Object_1_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_13_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_0_SINGLE"
                        geometry={nodes.Joint_15_Object_0_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_15_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_1_SINGLE"
                        geometry={nodes.Joint_15_Object_1_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_15_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE001"
                        geometry={nodes.Joint_4_Object_0_SINGLE001.geometry}
                        material={materials["Joint_4_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_0_SINGLE002"
                        geometry={nodes.Joint_5_Object_0_SINGLE002.geometry}
                        material={materials.Joint_5_Object_0_Material_0}
                        skeleton={nodes.Joint_5_Object_0_SINGLE002.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_6_Object_0_SINGLE002"
                        geometry={nodes.Joint_6_Object_0_SINGLE002.geometry}
                        material={materials.Joint_6_Object_0_Material_0}
                        skeleton={nodes.Joint_6_Object_0_SINGLE002.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_7_Object_0_SINGLE"
                        geometry={nodes.Joint_7_Object_0_SINGLE.geometry}
                        material={materials.Joint_7_Object_0_Material_0}
                        skeleton={nodes.Joint_7_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_8_Object_1_SINGLE"
                        geometry={nodes.Joint_8_Object_1_SINGLE.geometry}
                        material={materials.Joint_8_Object_1_Material_1}
                        skeleton={nodes.Joint_8_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_9_Object_0_SINGLE"
                        geometry={nodes.Joint_9_Object_0_SINGLE.geometry}
                        material={materials.Joint_9_Object_0_Material_0}
                        skeleton={nodes.Joint_9_Object_0_SINGLE.skeleton}
                    />
                </group>
                <group name="Armature003" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_1}/>
                    <skinnedMesh
                        name="Joint_6_Object_0_SINGLE001"
                        geometry={nodes.Joint_6_Object_0_SINGLE001.geometry}
                        material={materials["Joint_6_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_6_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_7_Object_0_SINGLE001"
                        geometry={nodes.Joint_7_Object_0_SINGLE001.geometry}
                        material={materials["Joint_7_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_7_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_7_Object_1_SINGLE"
                        geometry={nodes.Joint_7_Object_1_SINGLE.geometry}
                        material={materials.Joint_7_Object_1_Material_1}
                        skeleton={nodes.Joint_7_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_8_Object_0_SINGLE001"
                        geometry={nodes.Joint_8_Object_0_SINGLE001.geometry}
                        material={materials["Joint_8_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_8_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_8_Object_1_SINGLE001"
                        geometry={nodes.Joint_8_Object_1_SINGLE001.geometry}
                        material={materials["Joint_8_Object_1_Material_1.001"]}
                        skeleton={nodes.Joint_8_Object_1_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE002"
                        geometry={nodes.Joint_4_Object_0_SINGLE002.geometry}
                        material={materials["Joint_4_Object_0_Material_0.002"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE002.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_1_SINGLE001"
                        geometry={nodes.Joint_4_Object_1_SINGLE001.geometry}
                        material={materials["Joint_4_Object_1_Material_1.001"]}
                        skeleton={nodes.Joint_4_Object_1_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_2_SINGLE"
                        geometry={nodes.Joint_4_Object_2_SINGLE.geometry}
                        material={materials.Joint_4_Object_2_Material_2}
                        skeleton={nodes.Joint_4_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_3_SINGLE"
                        geometry={nodes.Joint_4_Object_3_SINGLE.geometry}
                        material={materials.Joint_4_Object_3_Material_3}
                        skeleton={nodes.Joint_4_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_4_SINGLE"
                        geometry={nodes.Joint_4_Object_4_SINGLE.geometry}
                        material={materials.Joint_4_Object_4_Material_4}
                        skeleton={nodes.Joint_4_Object_4_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_5_SINGLE"
                        geometry={nodes.Joint_4_Object_5_SINGLE.geometry}
                        material={materials.Joint_4_Object_5_Material_5}
                        skeleton={nodes.Joint_4_Object_5_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_6_SINGLE"
                        geometry={nodes.Joint_4_Object_6_SINGLE.geometry}
                        material={materials.Joint_4_Object_6_Material_6}
                        skeleton={nodes.Joint_4_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_7_SINGLE"
                        geometry={nodes.Joint_4_Object_7_SINGLE.geometry}
                        material={materials.Joint_4_Object_7_Material_7}
                        skeleton={nodes.Joint_4_Object_7_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_0_SINGLE001"
                        geometry={nodes.Joint_5_Object_0_SINGLE001.geometry}
                        material={materials["Joint_5_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_5_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_1_SINGLE"
                        geometry={nodes.Joint_5_Object_1_SINGLE.geometry}
                        material={materials.Joint_5_Object_1_Material_1}
                        skeleton={nodes.Joint_5_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_2_SINGLE"
                        geometry={nodes.Joint_5_Object_2_SINGLE.geometry}
                        material={materials.Joint_5_Object_2_Material_2}
                        skeleton={nodes.Joint_5_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_3_SINGLE"
                        geometry={nodes.Joint_5_Object_3_SINGLE.geometry}
                        material={materials.Joint_5_Object_3_Material_3}
                        skeleton={nodes.Joint_5_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_4_SINGLE"
                        geometry={nodes.Joint_5_Object_4_SINGLE.geometry}
                        material={materials.Joint_5_Object_4_Material_4}
                        skeleton={nodes.Joint_5_Object_4_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_5_SINGLE"
                        geometry={nodes.Joint_5_Object_5_SINGLE.geometry}
                        material={materials.Joint_5_Object_5_Material_5}
                        skeleton={nodes.Joint_5_Object_5_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_6_SINGLE"
                        geometry={nodes.Joint_5_Object_6_SINGLE.geometry}
                        material={materials.Joint_5_Object_6_Material_6}
                        skeleton={nodes.Joint_5_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_7_SINGLE"
                        geometry={nodes.Joint_5_Object_7_SINGLE.geometry}
                        material={materials.Joint_5_Object_7_Material_7}
                        skeleton={nodes.Joint_5_Object_7_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_7_Object_2_SINGLE"
                        geometry={nodes.Joint_7_Object_2_SINGLE.geometry}
                        material={materials.Joint_7_Object_2_Material_2}
                        skeleton={nodes.Joint_7_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_8_Object_2_SINGLE001"
                        geometry={nodes.Joint_8_Object_2_SINGLE001.geometry}
                        material={materials["Joint_8_Object_2_Material_2.001"]}
                        skeleton={nodes.Joint_8_Object_2_SINGLE001.skeleton}
                    />
                </group>
                <group name="Armature004" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_2}/>
                    <skinnedMesh
                        name="Joint_2_Object_0_SINGLE001"
                        geometry={nodes.Joint_2_Object_0_SINGLE001.geometry}
                        material={materials["Joint_2_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_2_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE003"
                        geometry={nodes.Joint_4_Object_0_SINGLE003.geometry}
                        material={materials["Joint_4_Object_0_Material_0.003"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE003.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_1_SINGLE002"
                        geometry={nodes.Joint_4_Object_1_SINGLE002.geometry}
                        material={materials["Joint_4_Object_1_Material_1.002"]}
                        skeleton={nodes.Joint_4_Object_1_SINGLE002.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_2_SINGLE001"
                        geometry={nodes.Joint_4_Object_2_SINGLE001.geometry}
                        material={materials["Joint_4_Object_2_Material_2.001"]}
                        skeleton={nodes.Joint_4_Object_2_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_3_SINGLE001"
                        geometry={nodes.Joint_4_Object_3_SINGLE001.geometry}
                        material={materials["Joint_4_Object_3_Material_3.001"]}
                        skeleton={nodes.Joint_4_Object_3_SINGLE001.skeleton}
                    />
                </group>
                <group
                    name="Armature005"
                    position={[0, 0, -5000]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <primitive object={nodes.JOBJ_0_5}/>
                    <skinnedMesh
                        name="Joint_3_Object_0_SINGLE001"
                        geometry={nodes.Joint_3_Object_0_SINGLE001.geometry}
                        material={materials["Joint_3_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_3_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE004"
                        geometry={nodes.Joint_4_Object_0_SINGLE004.geometry}
                        material={materials["Joint_4_Object_0_Material_0.004"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE004.skeleton}
                    />
                </group>
                <group name="Armature006" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_6}/>
                    <skinnedMesh
                        name="Joint_3_Object_0_SINGLE002"
                        geometry={nodes.Joint_3_Object_0_SINGLE002.geometry}
                        material={materials["Joint_3_Object_0_Material_0.002"]}
                        skeleton={nodes.Joint_3_Object_0_SINGLE002.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_1_SINGLE001"
                        geometry={nodes.Joint_3_Object_1_SINGLE001.geometry}
                        material={materials["Joint_3_Object_1_Material_1.001"]}
                        skeleton={nodes.Joint_3_Object_1_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE005"
                        geometry={nodes.Joint_4_Object_0_SINGLE005.geometry}
                        material={materials["Joint_4_Object_0_Material_0.005"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE005.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_1_SINGLE003"
                        geometry={nodes.Joint_4_Object_1_SINGLE003.geometry}
                        material={materials["Joint_4_Object_1_Material_1.003"]}
                        skeleton={nodes.Joint_4_Object_1_SINGLE003.skeleton}
                    />
                </group>
                <group name="Armature007" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_3}/>
                    <skinnedMesh
                        name="Joint_23_Object_0_SINGLE"
                        geometry={nodes.Joint_23_Object_0_SINGLE.geometry}
                        material={materials.Joint_23_Object_0_Material_0}
                        skeleton={nodes.Joint_23_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_19_Object_0_SINGLE"
                        geometry={nodes.Joint_19_Object_0_SINGLE.geometry}
                        material={materials.Joint_19_Object_0_Material_0}
                        skeleton={nodes.Joint_19_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE006"
                        geometry={nodes.Joint_4_Object_0_SINGLE006.geometry}
                        material={materials["Joint_4_Object_0_Material_0.006"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE006.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_20_Object_0_SINGLE"
                        geometry={nodes.Joint_20_Object_0_SINGLE.geometry}
                        material={materials.Joint_20_Object_0_Material_0}
                        skeleton={nodes.Joint_20_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_21_Object_0_SINGLE"
                        geometry={nodes.Joint_21_Object_0_SINGLE.geometry}
                        material={materials.Joint_21_Object_0_Material_0}
                        skeleton={nodes.Joint_21_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_22_Object_0_SINGLE"
                        geometry={nodes.Joint_22_Object_0_SINGLE.geometry}
                        material={materials.Joint_22_Object_0_Material_0}
                        skeleton={nodes.Joint_22_Object_0_SINGLE.skeleton}
                    />
                </group>
                <group name="Armature002" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_4}/>
                    <skinnedMesh
                        name="Joint_1_Object_0_SINGLE"
                        geometry={nodes.Joint_1_Object_0_SINGLE.geometry}
                        material={materials.Joint_1_Object_0_Material_0}
                        skeleton={nodes.Joint_1_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_1_Object_1_SINGLE"
                        geometry={nodes.Joint_1_Object_1_SINGLE.geometry}
                        material={materials.Joint_1_Object_1_Material_1}
                        skeleton={nodes.Joint_1_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_1_Object_2_SINGLE"
                        geometry={nodes.Joint_1_Object_2_SINGLE.geometry}
                        material={materials.Joint_1_Object_2_Material_2}
                        skeleton={nodes.Joint_1_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_1_Object_3_SINGLE"
                        geometry={nodes.Joint_1_Object_3_SINGLE.geometry}
                        material={materials.Joint_1_Object_3_Material_3}
                        skeleton={nodes.Joint_1_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_1_Object_4_SINGLE"
                        geometry={nodes.Joint_1_Object_4_SINGLE.geometry}
                        material={materials.Joint_1_Object_4_Material_4}
                        skeleton={nodes.Joint_1_Object_4_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_2_Object_0_SINGLE"
                        geometry={nodes.Joint_2_Object_0_SINGLE.geometry}
                        material={materials.Joint_2_Object_0_Material_0}
                        skeleton={nodes.Joint_2_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_0_SINGLE"
                        geometry={nodes.Joint_3_Object_0_SINGLE.geometry}
                        material={materials.Joint_3_Object_0_Material_0}
                        skeleton={nodes.Joint_3_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_10_SINGLE"
                        geometry={nodes.Joint_3_Object_10_SINGLE.geometry}
                        material={materials.Joint_3_Object_10_Material_10}
                        skeleton={nodes.Joint_3_Object_10_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_11_SINGLE"
                        geometry={nodes.Joint_3_Object_11_SINGLE.geometry}
                        material={materials.Joint_3_Object_11_Material_11}
                        skeleton={nodes.Joint_3_Object_11_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_12_SINGLE"
                        geometry={nodes.Joint_3_Object_12_SINGLE.geometry}
                        material={materials.Joint_3_Object_12_Material_12}
                        skeleton={nodes.Joint_3_Object_12_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_13_SINGLE"
                        geometry={nodes.Joint_3_Object_13_SINGLE.geometry}
                        material={materials.Joint_3_Object_13_Material_13}
                        skeleton={nodes.Joint_3_Object_13_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_14_SINGLE"
                        geometry={nodes.Joint_3_Object_14_SINGLE.geometry}
                        material={materials.Joint_3_Object_14_Material_14}
                        skeleton={nodes.Joint_3_Object_14_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_15_SINGLE"
                        geometry={nodes.Joint_3_Object_15_SINGLE.geometry}
                        material={materials.Joint_3_Object_15_Material_15}
                        skeleton={nodes.Joint_3_Object_15_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_16_SINGLE"
                        geometry={nodes.Joint_3_Object_16_SINGLE.geometry}
                        material={materials.Joint_3_Object_16_Material_16}
                        skeleton={nodes.Joint_3_Object_16_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_17_SINGLE"
                        geometry={nodes.Joint_3_Object_17_SINGLE.geometry}
                        material={materials.Joint_3_Object_17_Material_17}
                        skeleton={nodes.Joint_3_Object_17_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_1_SINGLE"
                        geometry={nodes.Joint_3_Object_1_SINGLE.geometry}
                        material={materials.Joint_3_Object_1_Material_1}
                        skeleton={nodes.Joint_3_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_2_SINGLE"
                        geometry={nodes.Joint_3_Object_2_SINGLE.geometry}
                        material={materials.Joint_3_Object_2_Material_2}
                        skeleton={nodes.Joint_3_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_5_SINGLE"
                        geometry={nodes.Joint_3_Object_5_SINGLE.geometry}
                        material={materials.Joint_3_Object_5_Material_5}
                        skeleton={nodes.Joint_3_Object_5_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_6_SINGLE"
                        geometry={nodes.Joint_3_Object_6_SINGLE.geometry}
                        material={materials.Joint_3_Object_6_Material_6}
                        skeleton={nodes.Joint_3_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_7_SINGLE"
                        geometry={nodes.Joint_3_Object_7_SINGLE.geometry}
                        material={materials.Joint_3_Object_7_Material_7}
                        skeleton={nodes.Joint_3_Object_7_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_8_SINGLE"
                        geometry={nodes.Joint_3_Object_8_SINGLE.geometry}
                        material={materials.Joint_3_Object_8_Material_8}
                        skeleton={nodes.Joint_3_Object_8_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_9_SINGLE"
                        geometry={nodes.Joint_3_Object_9_SINGLE.geometry}
                        material={materials.Joint_3_Object_9_Material_9}
                        skeleton={nodes.Joint_3_Object_9_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE"
                        geometry={nodes.Joint_4_Object_0_SINGLE.geometry}
                        material={materials.Joint_4_Object_0_Material_0}
                        skeleton={nodes.Joint_4_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_4_Object_1_SINGLE"
                        geometry={nodes.Joint_4_Object_1_SINGLE.geometry}
                        material={materials.Joint_4_Object_1_Material_1}
                        skeleton={nodes.Joint_4_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_3_SINGLE"
                        geometry={nodes.Joint_3_Object_3_SINGLE.geometry}
                        material={materials.Joint_3_Object_3_Material_3}
                        skeleton={nodes.Joint_3_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_4_SINGLE"
                        geometry={nodes.Joint_3_Object_4_SINGLE.geometry}
                        material={materials.Joint_3_Object_4_Material_4}
                        skeleton={nodes.Joint_3_Object_4_SINGLE.skeleton}
                    />
                </group>
                <group name="Circle"/>
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_7}/>
                </group>
                <group name="Armature001" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_8}/>
                </group>
                <group
                    name="Camera_Target"
                    position={[-84.7, 20.37, 249.88]}
                    scale={4}
                />
                <group name="Armature008">
                    <primitive object={nodes.root}/>
                </group>
                <mesh
                    name="Cube"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.Material}
                    scale={11.97}
                />
                <mesh
                    name="bg5_fog"
                    castShadow
                    receiveShadow
                    geometry={nodes.bg5_fog.geometry}
                    material={materials["Material.001"]}
                    scale={11.45}
                />
                <mesh
                    name="Joint_0_Object_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Joint_0_Object_0001.geometry}
                    material={materials["Joint_0_Object_0_Material_0.001"]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Joint_0_Object_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Joint_0_Object_0.geometry}
                    material={materials.Joint_0_Object_0_Material_0}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Joint_0_Object_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Joint_0_Object_1.geometry}
                    material={materials.Joint_0_Object_1_Material_1}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Joint_0_Object_1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Joint_0_Object_1001.geometry}
                    material={materials.Joint_0_Object_1_Material_1}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/FinalDestination_render.glb");