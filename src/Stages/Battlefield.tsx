/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef} from "react";
import {PerspectiveCamera, useAnimations, useGLTF} from "@react-three/drei";

export default function Battlefield(props) {
    const group = useRef();
    const {nodes, materials, animations} = useGLTF("/Battlefield_render.glb");
    const {actions} = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature001" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0}/>
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE"
                        geometry={nodes.Joint_4_Object_0_SINGLE.geometry}
                        material={materials.Joint_4_Object_0_Material_0}
                        skeleton={nodes.Joint_4_Object_0_SINGLE.skeleton}
                    />
                </group>
                <group name="Armature002" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_1}/>
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE001"
                        geometry={nodes.Joint_4_Object_0_SINGLE001.geometry}
                        material={materials["Joint_4_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE001.skeleton}
                    />
                </group>
                <group name="Armature004" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_2}/>
                    <skinnedMesh
                        name="Joint_4_Object_0_SINGLE002"
                        geometry={nodes.Joint_4_Object_0_SINGLE002.geometry}
                        material={materials["Joint_4_Object_0_Material_0.002"]}
                        skeleton={nodes.Joint_4_Object_0_SINGLE002.skeleton}
                    />
                </group>
                <group name="Armature005" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_3}/>
                    <skinnedMesh
                        name="Joint_3_Object_0_SINGLE001"
                        geometry={nodes.Joint_3_Object_0_SINGLE001.geometry}
                        material={materials["Joint_3_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_3_Object_0_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_0_SINGLE001"
                        geometry={nodes.Joint_5_Object_0_SINGLE001.geometry}
                        material={materials["Joint_5_Object_0_Material_0.001"]}
                        skeleton={nodes.Joint_5_Object_0_SINGLE001.skeleton}
                    />
                </group>
                <group name="Armature003" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_5}/>
                    <skinnedMesh
                        name="Joint_1_Object_1_SINGLE"
                        geometry={nodes.Joint_1_Object_1_SINGLE.geometry}
                        material={materials.Joint_1_Object_1_Material_1}
                        skeleton={nodes.Joint_1_Object_1_SINGLE.skeleton}
                    />
                </group>
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_4}/>
                    <primitive object={nodes.neutral_bone}/>
                    <primitive object={nodes.neutral_bone_1}/>
                    <primitive object={nodes.neutral_bone_2}/>
                    <primitive object={nodes.neutral_bone_3}/>
                    <primitive object={nodes.neutral_bone_4}/>
                    <primitive object={nodes.neutral_bone_5}/>
                    <primitive object={nodes.neutral_bone_6}/>
                    <primitive object={nodes.neutral_bone_7}/>
                    <primitive object={nodes.neutral_bone_8}/>
                    <primitive object={nodes.neutral_bone_9}/>
                    <primitive object={nodes.neutral_bone_10}/>
                    <primitive object={nodes.neutral_bone_11}/>
                    <primitive object={nodes.neutral_bone_12}/>
                    <primitive object={nodes.neutral_bone_13}/>
                    <primitive object={nodes.neutral_bone_14}/>
                    <primitive object={nodes.neutral_bone_15}/>
                    <primitive object={nodes.neutral_bone_16}/>
                    <primitive object={nodes.neutral_bone_17}/>
                    <primitive object={nodes.neutral_bone_18}/>
                    <primitive object={nodes.neutral_bone_19}/>
                    <primitive object={nodes.neutral_bone_20}/>
                    <primitive object={nodes.neutral_bone_21}/>
                    <primitive object={nodes.neutral_bone_22}/>
                    <primitive object={nodes.neutral_bone_23}/>
                    <primitive object={nodes.neutral_bone_24}/>
                    <primitive object={nodes.neutral_bone_25}/>
                    <primitive object={nodes.neutral_bone_26}/>
                    <primitive object={nodes.neutral_bone_27}/>
                    <primitive object={nodes.neutral_bone_28}/>
                    <primitive object={nodes.neutral_bone_29}/>
                    <primitive object={nodes.neutral_bone_30}/>
                    <primitive object={nodes.neutral_bone_31}/>
                    <primitive object={nodes.neutral_bone_32}/>
                    <primitive object={nodes.neutral_bone_33}/>
                    <primitive object={nodes.neutral_bone_34}/>
                    <primitive object={nodes.neutral_bone_35}/>
                    <primitive object={nodes.neutral_bone_36}/>
                    <primitive object={nodes.neutral_bone_37}/>
                    <primitive object={nodes.neutral_bone_38}/>
                    <primitive object={nodes.neutral_bone_39}/>
                    <primitive object={nodes.neutral_bone_40}/>
                    <primitive object={nodes.neutral_bone_41}/>
                    <primitive object={nodes.neutral_bone_42}/>
                    <primitive object={nodes.neutral_bone_43}/>
                    <primitive object={nodes.neutral_bone_44}/>
                    <primitive object={nodes.neutral_bone_45}/>
                    <primitive object={nodes.neutral_bone_46}/>
                    <primitive object={nodes.neutral_bone_47}/>
                    <primitive object={nodes.neutral_bone_48}/>
                    <skinnedMesh
                        name="Joint_11_Object_0_SINGLE"
                        geometry={nodes.Joint_11_Object_0_SINGLE.geometry}
                        material={materials.Joint_11_Object_0_Material_0}
                        skeleton={nodes.Joint_11_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_12_SINGLE"
                        geometry={nodes.Joint_12_Object_12_SINGLE.geometry}
                        material={materials.Joint_12_Object_12_Material_12}
                        skeleton={nodes.Joint_12_Object_12_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_13_SINGLE"
                        geometry={nodes.Joint_12_Object_13_SINGLE.geometry}
                        material={materials.Joint_12_Object_13_Material_13}
                        skeleton={nodes.Joint_12_Object_13_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_15_SINGLE"
                        geometry={nodes.Joint_12_Object_15_SINGLE.geometry}
                        material={materials.Joint_12_Object_15_Material_15}
                        skeleton={nodes.Joint_12_Object_15_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_17_SINGLE"
                        geometry={nodes.Joint_12_Object_17_SINGLE.geometry}
                        material={materials.Joint_12_Object_17_Material_17}
                        skeleton={nodes.Joint_12_Object_17_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_3_SINGLE"
                        geometry={nodes.Joint_12_Object_3_SINGLE.geometry}
                        material={materials.Joint_12_Object_3_Material_3}
                        skeleton={nodes.Joint_12_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_8_SINGLE"
                        geometry={nodes.Joint_12_Object_8_SINGLE.geometry}
                        material={materials.Joint_12_Object_8_Material_8}
                        skeleton={nodes.Joint_12_Object_8_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_0_SINGLE"
                        geometry={nodes.Joint_13_Object_0_SINGLE.geometry}
                        material={materials.Joint_13_Object_0_Material_0}
                        skeleton={nodes.Joint_13_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_2_SINGLE"
                        geometry={nodes.Joint_13_Object_2_SINGLE.geometry}
                        material={materials.Joint_13_Object_2_Material_2}
                        skeleton={nodes.Joint_13_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_14_Object_0_SINGLE"
                        geometry={nodes.Joint_14_Object_0_SINGLE.geometry}
                        material={materials.Joint_14_Object_0_Material_0}
                        skeleton={nodes.Joint_14_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_14_Object_2_SINGLE"
                        geometry={nodes.Joint_14_Object_2_SINGLE.geometry}
                        material={materials.Joint_14_Object_2_Material_2}
                        skeleton={nodes.Joint_14_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_0_SINGLE"
                        geometry={nodes.Joint_15_Object_0_SINGLE.geometry}
                        material={materials.Joint_15_Object_0_Material_0}
                        skeleton={nodes.Joint_15_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_2_SINGLE"
                        geometry={nodes.Joint_15_Object_2_SINGLE.geometry}
                        material={materials.Joint_15_Object_2_Material_2}
                        skeleton={nodes.Joint_15_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_1_Object_0_SINGLE"
                        geometry={nodes.Joint_1_Object_0_SINGLE.geometry}
                        material={materials.Joint_1_Object_0_Material_0}
                        skeleton={nodes.Joint_1_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_0_SINGLE"
                        geometry={nodes.Joint_3_Object_0_SINGLE.geometry}
                        material={materials.Joint_3_Object_0_Material_0}
                        skeleton={nodes.Joint_3_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_3_Object_1_SINGLE"
                        geometry={nodes.Joint_3_Object_1_SINGLE.geometry}
                        material={materials.Joint_3_Object_1_Material_1}
                        skeleton={nodes.Joint_3_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_0_SINGLE"
                        geometry={nodes.Joint_5_Object_0_SINGLE.geometry}
                        material={materials.Joint_5_Object_0_Material_0}
                        skeleton={nodes.Joint_5_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_5_Object_1_SINGLE"
                        geometry={nodes.Joint_5_Object_1_SINGLE.geometry}
                        material={materials.Joint_5_Object_1_Material_1}
                        skeleton={nodes.Joint_5_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_7_Object_0_SINGLE"
                        geometry={nodes.Joint_7_Object_0_SINGLE.geometry}
                        material={materials.Joint_7_Object_0_Material_0}
                        skeleton={nodes.Joint_7_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_7_Object_1_SINGLE"
                        geometry={nodes.Joint_7_Object_1_SINGLE.geometry}
                        material={materials.Joint_7_Object_1_Material_1}
                        skeleton={nodes.Joint_7_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_9_Object_0_SINGLE"
                        geometry={nodes.Joint_9_Object_0_SINGLE.geometry}
                        material={materials.Joint_9_Object_0_Material_0}
                        skeleton={nodes.Joint_9_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_9_Object_1_SINGLE"
                        geometry={nodes.Joint_9_Object_1_SINGLE.geometry}
                        material={materials.Joint_9_Object_1_Material_1}
                        skeleton={nodes.Joint_9_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_0_SINGLE"
                        geometry={nodes.Joint_12_Object_0_SINGLE.geometry}
                        material={materials.Joint_12_Object_0_Material_0}
                        skeleton={nodes.Joint_12_Object_0_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_10_SINGLE"
                        geometry={nodes.Joint_12_Object_10_SINGLE.geometry}
                        material={materials.Joint_12_Object_10_Material_10}
                        skeleton={nodes.Joint_12_Object_10_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_11_SINGLE"
                        geometry={nodes.Joint_12_Object_11_SINGLE.geometry}
                        material={materials.Joint_12_Object_11_Material_11}
                        skeleton={nodes.Joint_12_Object_11_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_14_SINGLE"
                        geometry={nodes.Joint_12_Object_14_SINGLE.geometry}
                        material={materials.Joint_12_Object_14_Material_14}
                        skeleton={nodes.Joint_12_Object_14_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_16_SINGLE"
                        geometry={nodes.Joint_12_Object_16_SINGLE.geometry}
                        material={materials.Joint_12_Object_16_Material_16}
                        skeleton={nodes.Joint_12_Object_16_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_2_SINGLE"
                        geometry={nodes.Joint_12_Object_2_SINGLE.geometry}
                        material={materials.Joint_12_Object_2_Material_2}
                        skeleton={nodes.Joint_12_Object_2_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_18_SINGLE"
                        geometry={nodes.Joint_12_Object_18_SINGLE.geometry}
                        material={materials.Joint_12_Object_18_Material_18}
                        skeleton={nodes.Joint_12_Object_18_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_18_SINGLE001"
                        geometry={nodes.Joint_12_Object_18_SINGLE001.geometry}
                        material={materials.Joint_12_Object_18_Material_18}
                        skeleton={nodes.Joint_12_Object_18_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_19_SINGLE"
                        geometry={nodes.Joint_12_Object_19_SINGLE.geometry}
                        material={materials.Joint_12_Object_19_Material_19}
                        skeleton={nodes.Joint_12_Object_19_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_19_SINGLE001"
                        geometry={nodes.Joint_12_Object_19_SINGLE001.geometry}
                        material={materials.Joint_12_Object_19_Material_19}
                        skeleton={nodes.Joint_12_Object_19_SINGLE001.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_1_SINGLE"
                        geometry={nodes.Joint_12_Object_1_SINGLE.geometry}
                        material={materials.Joint_12_Object_1_Material_1}
                        skeleton={nodes.Joint_12_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_20_SINGLE"
                        geometry={nodes.Joint_12_Object_20_SINGLE.geometry}
                        material={materials.Joint_12_Object_20_Material_20}
                        skeleton={nodes.Joint_12_Object_20_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_21_SINGLE"
                        geometry={nodes.Joint_12_Object_21_SINGLE.geometry}
                        material={materials.Joint_12_Object_21_Material_21}
                        skeleton={nodes.Joint_12_Object_21_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_6_SINGLE"
                        geometry={nodes.Joint_13_Object_6_SINGLE.geometry}
                        material={materials.Joint_13_Object_6_Material_6}
                        skeleton={nodes.Joint_13_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_14_Object_6_SINGLE"
                        geometry={nodes.Joint_14_Object_6_SINGLE.geometry}
                        material={materials.Joint_14_Object_6_Material_6}
                        skeleton={nodes.Joint_14_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_6_SINGLE"
                        geometry={nodes.Joint_15_Object_6_SINGLE.geometry}
                        material={materials.Joint_15_Object_6_Material_6}
                        skeleton={nodes.Joint_15_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_4_SINGLE"
                        geometry={nodes.Joint_12_Object_4_SINGLE.geometry}
                        material={materials.Joint_12_Object_4_Material_4}
                        skeleton={nodes.Joint_12_Object_4_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_5_SINGLE"
                        geometry={nodes.Joint_12_Object_5_SINGLE.geometry}
                        material={materials.Joint_12_Object_5_Material_5}
                        skeleton={nodes.Joint_12_Object_5_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_1_SINGLE"
                        geometry={nodes.Joint_13_Object_1_SINGLE.geometry}
                        material={materials.Joint_13_Object_1_Material_1}
                        skeleton={nodes.Joint_13_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_14_Object_1_SINGLE"
                        geometry={nodes.Joint_14_Object_1_SINGLE.geometry}
                        material={materials.Joint_14_Object_1_Material_1}
                        skeleton={nodes.Joint_14_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_1_SINGLE"
                        geometry={nodes.Joint_15_Object_1_SINGLE.geometry}
                        material={materials.Joint_15_Object_1_Material_1}
                        skeleton={nodes.Joint_15_Object_1_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_6_SINGLE"
                        geometry={nodes.Joint_12_Object_6_SINGLE.geometry}
                        material={materials.Joint_12_Object_6_Material_6}
                        skeleton={nodes.Joint_12_Object_6_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_7_SINGLE"
                        geometry={nodes.Joint_12_Object_7_SINGLE.geometry}
                        material={materials.Joint_12_Object_7_Material_7}
                        skeleton={nodes.Joint_12_Object_7_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_12_Object_9_SINGLE"
                        geometry={nodes.Joint_12_Object_9_SINGLE.geometry}
                        material={materials.Joint_12_Object_9_Material_9}
                        skeleton={nodes.Joint_12_Object_9_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_13_Object_3_SINGLE"
                        geometry={nodes.Joint_13_Object_3_SINGLE.geometry}
                        material={materials.Joint_13_Object_3_Material_3}
                        skeleton={nodes.Joint_13_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_14_Object_3_SINGLE"
                        geometry={nodes.Joint_14_Object_3_SINGLE.geometry}
                        material={materials.Joint_14_Object_3_Material_3}
                        skeleton={nodes.Joint_14_Object_3_SINGLE.skeleton}
                    />
                    <skinnedMesh
                        name="Joint_15_Object_3_SINGLE"
                        geometry={nodes.Joint_15_Object_3_SINGLE.geometry}
                        material={materials.Joint_15_Object_3_Material_3}
                        skeleton={nodes.Joint_15_Object_3_SINGLE.skeleton}
                    />
                </group>
                <group name="Camera_Target" position={[7.99, 64.81, 177.76]}/>
                <group name="Armature006">
                    <primitive object={nodes.root}/>
                </group>
                <PerspectiveCamera
                    name="Camera"
                    makeDefault={false}
                    far={10000}
                    near={1}
                    fov={22.73}
                    position={[0, 100, 450]}
                    rotation={[-0.17, 0, 0]}
                    scale={68.19}
                />
                <pointLight
                    name="Point"
                    intensity={5000000}
                    decay={2}
                    position={[57, 57, 57]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <pointLight
                    name="Point001"
                    intensity={2500000}
                    decay={2}
                    position={[57, 57, 57]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <pointLight
                    name="Point002"
                    intensity={2500000}
                    decay={2}
                    position={[57, 57, 57]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <PerspectiveCamera
                    name="Camera_Intro"
                    makeDefault={false}
                    far={20000}
                    near={1}
                    fov={74.82}
                    position={[13.3, 77.17, 221.21]}
                    rotation={[-0.28, 0.12, 0.03]}
                    scale={68.19}
                />
                <mesh
                    name="Cube"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.Material}
                    scale={2329.08}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/Battlefield_render.glb");