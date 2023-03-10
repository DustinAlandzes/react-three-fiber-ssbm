/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Battlefield_render.glb --types --keepnames --transform
*/

import * as THREE from 'three'
import {AnimationClip} from 'three'
import React, {useRef} from 'react'
import {PerspectiveCamera, useAnimations, useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type ActionName = 'new_anim' | 'new_anim.002' | 'new_anim.003' | 'new_anim.007' | 'new_anim.001' | 'new_anim.005'

interface GLTFAction extends AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
    nodes: {
        Joint_4_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_4_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_4_Object_0_SINGLE002: THREE.SkinnedMesh
        Joint_3_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_5_Object_0_SINGLE001: THREE.SkinnedMesh
        Joint_1_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_10_Object_0_SINGLE: THREE.Mesh
        Joint_11_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_10_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_11_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_12_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_13_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_14_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_15_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_16_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_17_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_18_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_18_SINGLE001: THREE.SkinnedMesh
        Joint_12_Object_19_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_19_SINGLE001: THREE.SkinnedMesh
        Joint_12_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_20_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_21_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_4_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_5_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_6_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_7_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_8_SINGLE: THREE.SkinnedMesh
        Joint_12_Object_9_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_13_Object_6_SINGLE: THREE.SkinnedMesh
        Joint_14_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_14_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_14_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_14_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_14_Object_6_SINGLE: THREE.SkinnedMesh
        Joint_15_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_15_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_15_Object_2_SINGLE: THREE.SkinnedMesh
        Joint_15_Object_3_SINGLE: THREE.SkinnedMesh
        Joint_15_Object_6_SINGLE: THREE.SkinnedMesh
        Joint_1_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_3_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_5_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_5_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_7_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_7_Object_1_SINGLE: THREE.SkinnedMesh
        Joint_9_Object_0_SINGLE: THREE.SkinnedMesh
        Joint_9_Object_1_SINGLE: THREE.SkinnedMesh
        Cube: THREE.Mesh
        JOBJ_0: THREE.Bone
        JOBJ_0_1: THREE.Bone
        JOBJ_0_2: THREE.Bone
        JOBJ_0_3: THREE.Bone
        JOBJ_0_5: THREE.Bone
        JOBJ_0_4: THREE.Bone
        neutral_bone: THREE.Bone
        neutral_bone_1: THREE.Bone
        neutral_bone_2: THREE.Bone
        neutral_bone_3: THREE.Bone
        neutral_bone_4: THREE.Bone
        neutral_bone_5: THREE.Bone
        neutral_bone_6: THREE.Bone
        neutral_bone_7: THREE.Bone
        neutral_bone_8: THREE.Bone
        neutral_bone_9: THREE.Bone
        neutral_bone_10: THREE.Bone
        neutral_bone_11: THREE.Bone
        neutral_bone_12: THREE.Bone
        neutral_bone_13: THREE.Bone
        neutral_bone_14: THREE.Bone
        neutral_bone_15: THREE.Bone
        neutral_bone_16: THREE.Bone
        neutral_bone_17: THREE.Bone
        neutral_bone_18: THREE.Bone
        neutral_bone_19: THREE.Bone
        neutral_bone_20: THREE.Bone
        neutral_bone_21: THREE.Bone
        neutral_bone_22: THREE.Bone
        neutral_bone_23: THREE.Bone
        neutral_bone_24: THREE.Bone
        neutral_bone_25: THREE.Bone
        neutral_bone_26: THREE.Bone
        neutral_bone_27: THREE.Bone
        neutral_bone_28: THREE.Bone
        neutral_bone_29: THREE.Bone
        neutral_bone_30: THREE.Bone
        neutral_bone_31: THREE.Bone
        neutral_bone_32: THREE.Bone
        neutral_bone_33: THREE.Bone
        neutral_bone_34: THREE.Bone
        neutral_bone_35: THREE.Bone
        neutral_bone_36: THREE.Bone
        neutral_bone_37: THREE.Bone
        neutral_bone_38: THREE.Bone
        neutral_bone_39: THREE.Bone
        neutral_bone_40: THREE.Bone
        neutral_bone_41: THREE.Bone
        neutral_bone_42: THREE.Bone
        neutral_bone_43: THREE.Bone
        neutral_bone_44: THREE.Bone
        neutral_bone_45: THREE.Bone
        neutral_bone_46: THREE.Bone
        neutral_bone_47: THREE.Bone
        neutral_bone_48: THREE.Bone
    }
    materials: {
        Joint_4_Object_0_Material_0: THREE.MeshStandardMaterial
        ['Joint_3_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        Joint_10_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_11_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_12_Object_0_Material_0: THREE.MeshBasicMaterial
        Joint_12_Object_10_Material_10: THREE.MeshBasicMaterial
        Joint_12_Object_11_Material_11: THREE.MeshBasicMaterial
        Joint_12_Object_12_Material_12: THREE.MeshBasicMaterial
        Joint_12_Object_13_Material_13: THREE.MeshBasicMaterial
        Joint_12_Object_14_Material_14: THREE.MeshBasicMaterial
        Joint_12_Object_15_Material_15: THREE.MeshBasicMaterial
        Joint_12_Object_18_Material_18: THREE.MeshBasicMaterial
        Joint_12_Object_19_Material_19: THREE.MeshBasicMaterial
        Joint_12_Object_1_Material_1: THREE.MeshBasicMaterial
        Joint_12_Object_20_Material_20: THREE.MeshBasicMaterial
        Joint_12_Object_21_Material_21: THREE.MeshBasicMaterial
        Joint_12_Object_2_Material_2: THREE.MeshBasicMaterial
        Joint_12_Object_3_Material_3: THREE.MeshStandardMaterial
        Joint_12_Object_4_Material_4: THREE.MeshBasicMaterial
        Joint_12_Object_5_Material_5: THREE.MeshBasicMaterial
        Joint_12_Object_6_Material_6: THREE.MeshBasicMaterial
        Joint_12_Object_7_Material_7: THREE.MeshBasicMaterial
        Joint_12_Object_8_Material_8: THREE.MeshBasicMaterial
        Joint_12_Object_9_Material_9: THREE.MeshBasicMaterial
        Joint_13_Object_1_Material_1: THREE.MeshBasicMaterial
        Joint_13_Object_3_Material_3: THREE.MeshBasicMaterial
        ['Joint_3_Object_0_Material_0.001']: THREE.MeshBasicMaterial
        Joint_5_Object_1_Material_1: THREE.MeshStandardMaterial
        Material: THREE.MeshBasicMaterial
    },
    animations: GLTFAction[]
}

export default function Battlefield(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null)
    const {
        nodes,
        materials,
        animations
    } = useGLTF(`Battlefield_render-transformed.glb`) as unknown as GLTFResult
    const {actions} = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature001" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0}/>
                    <skinnedMesh name="Joint_4_Object_0_SINGLE" geometry={nodes.Joint_4_Object_0_SINGLE.geometry}
                                 material={materials.Joint_4_Object_0_Material_0}
                                 skeleton={nodes.Joint_4_Object_0_SINGLE.skeleton}/>
                </group>
                <group name="Armature002" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_1}/>
                    <skinnedMesh name="Joint_4_Object_0_SINGLE001" geometry={nodes.Joint_4_Object_0_SINGLE001.geometry}
                                 material={materials.Joint_4_Object_0_Material_0}
                                 skeleton={nodes.Joint_4_Object_0_SINGLE001.skeleton}/>
                </group>
                <group name="Armature004" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_2}/>
                    <skinnedMesh name="Joint_4_Object_0_SINGLE002" geometry={nodes.Joint_4_Object_0_SINGLE002.geometry}
                                 material={materials.Joint_4_Object_0_Material_0}
                                 skeleton={nodes.Joint_4_Object_0_SINGLE002.skeleton}/>
                </group>
                <group name="Armature005" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_3}/>
                    <skinnedMesh name="Joint_3_Object_0_SINGLE001" geometry={nodes.Joint_3_Object_0_SINGLE001.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_3_Object_0_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_5_Object_0_SINGLE001" geometry={nodes.Joint_5_Object_0_SINGLE001.geometry}
                                 material={materials.Joint_4_Object_0_Material_0}
                                 skeleton={nodes.Joint_5_Object_0_SINGLE001.skeleton}/>
                </group>
                <group name="Armature003" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.JOBJ_0_5}/>
                    <skinnedMesh name="Joint_1_Object_1_SINGLE" geometry={nodes.Joint_1_Object_1_SINGLE.geometry}
                                 material={materials.Joint_4_Object_0_Material_0}
                                 skeleton={nodes.Joint_1_Object_1_SINGLE.skeleton}/>
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
                    <skinnedMesh name="Joint_11_Object_0_SINGLE" geometry={nodes.Joint_11_Object_0_SINGLE.geometry}
                                 material={materials.Joint_11_Object_0_Material_0}
                                 skeleton={nodes.Joint_11_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_0_SINGLE" geometry={nodes.Joint_12_Object_0_SINGLE.geometry}
                                 material={materials.Joint_12_Object_0_Material_0}
                                 skeleton={nodes.Joint_12_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_10_SINGLE" geometry={nodes.Joint_12_Object_10_SINGLE.geometry}
                                 material={materials.Joint_12_Object_10_Material_10}
                                 skeleton={nodes.Joint_12_Object_10_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_11_SINGLE" geometry={nodes.Joint_12_Object_11_SINGLE.geometry}
                                 material={materials.Joint_12_Object_11_Material_11}
                                 skeleton={nodes.Joint_12_Object_11_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_12_SINGLE" geometry={nodes.Joint_12_Object_12_SINGLE.geometry}
                                 material={materials.Joint_12_Object_12_Material_12}
                                 skeleton={nodes.Joint_12_Object_12_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_13_SINGLE" geometry={nodes.Joint_12_Object_13_SINGLE.geometry}
                                 material={materials.Joint_12_Object_13_Material_13}
                                 skeleton={nodes.Joint_12_Object_13_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_14_SINGLE" geometry={nodes.Joint_12_Object_14_SINGLE.geometry}
                                 material={materials.Joint_12_Object_14_Material_14}
                                 skeleton={nodes.Joint_12_Object_14_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_15_SINGLE" geometry={nodes.Joint_12_Object_15_SINGLE.geometry}
                                 material={materials.Joint_12_Object_15_Material_15}
                                 skeleton={nodes.Joint_12_Object_15_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_16_SINGLE" geometry={nodes.Joint_12_Object_16_SINGLE.geometry}
                                 material={materials.Joint_12_Object_14_Material_14}
                                 skeleton={nodes.Joint_12_Object_16_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_17_SINGLE" geometry={nodes.Joint_12_Object_17_SINGLE.geometry}
                                 material={materials.Joint_12_Object_15_Material_15}
                                 skeleton={nodes.Joint_12_Object_17_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_18_SINGLE" geometry={nodes.Joint_12_Object_18_SINGLE.geometry}
                                 material={materials.Joint_12_Object_18_Material_18}
                                 skeleton={nodes.Joint_12_Object_18_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_18_SINGLE001"
                                 geometry={nodes.Joint_12_Object_18_SINGLE001.geometry}
                                 material={materials.Joint_12_Object_18_Material_18}
                                 skeleton={nodes.Joint_12_Object_18_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_19_SINGLE" geometry={nodes.Joint_12_Object_19_SINGLE.geometry}
                                 material={materials.Joint_12_Object_19_Material_19}
                                 skeleton={nodes.Joint_12_Object_19_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_19_SINGLE001"
                                 geometry={nodes.Joint_12_Object_19_SINGLE001.geometry}
                                 material={materials.Joint_12_Object_19_Material_19}
                                 skeleton={nodes.Joint_12_Object_19_SINGLE001.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_1_SINGLE" geometry={nodes.Joint_12_Object_1_SINGLE.geometry}
                                 material={materials.Joint_12_Object_1_Material_1}
                                 skeleton={nodes.Joint_12_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_20_SINGLE" geometry={nodes.Joint_12_Object_20_SINGLE.geometry}
                                 material={materials.Joint_12_Object_20_Material_20}
                                 skeleton={nodes.Joint_12_Object_20_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_21_SINGLE" geometry={nodes.Joint_12_Object_21_SINGLE.geometry}
                                 material={materials.Joint_12_Object_21_Material_21}
                                 skeleton={nodes.Joint_12_Object_21_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_2_SINGLE" geometry={nodes.Joint_12_Object_2_SINGLE.geometry}
                                 material={materials.Joint_12_Object_2_Material_2}
                                 skeleton={nodes.Joint_12_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_3_SINGLE" geometry={nodes.Joint_12_Object_3_SINGLE.geometry}
                                 material={materials.Joint_12_Object_3_Material_3}
                                 skeleton={nodes.Joint_12_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_4_SINGLE" geometry={nodes.Joint_12_Object_4_SINGLE.geometry}
                                 material={materials.Joint_12_Object_4_Material_4}
                                 skeleton={nodes.Joint_12_Object_4_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_5_SINGLE" geometry={nodes.Joint_12_Object_5_SINGLE.geometry}
                                 material={materials.Joint_12_Object_5_Material_5}
                                 skeleton={nodes.Joint_12_Object_5_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_6_SINGLE" geometry={nodes.Joint_12_Object_6_SINGLE.geometry}
                                 material={materials.Joint_12_Object_6_Material_6}
                                 skeleton={nodes.Joint_12_Object_6_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_7_SINGLE" geometry={nodes.Joint_12_Object_7_SINGLE.geometry}
                                 material={materials.Joint_12_Object_7_Material_7}
                                 skeleton={nodes.Joint_12_Object_7_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_8_SINGLE" geometry={nodes.Joint_12_Object_8_SINGLE.geometry}
                                 material={materials.Joint_12_Object_8_Material_8}
                                 skeleton={nodes.Joint_12_Object_8_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_12_Object_9_SINGLE" geometry={nodes.Joint_12_Object_9_SINGLE.geometry}
                                 material={materials.Joint_12_Object_9_Material_9}
                                 skeleton={nodes.Joint_12_Object_9_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_0_SINGLE" geometry={nodes.Joint_13_Object_0_SINGLE.geometry}
                                 material={materials.Joint_12_Object_3_Material_3}
                                 skeleton={nodes.Joint_13_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_1_SINGLE" geometry={nodes.Joint_13_Object_1_SINGLE.geometry}
                                 material={materials.Joint_13_Object_1_Material_1}
                                 skeleton={nodes.Joint_13_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_2_SINGLE" geometry={nodes.Joint_13_Object_2_SINGLE.geometry}
                                 material={materials.Joint_12_Object_8_Material_8}
                                 skeleton={nodes.Joint_13_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_3_SINGLE" geometry={nodes.Joint_13_Object_3_SINGLE.geometry}
                                 material={materials.Joint_13_Object_3_Material_3}
                                 skeleton={nodes.Joint_13_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_13_Object_6_SINGLE" geometry={nodes.Joint_13_Object_6_SINGLE.geometry}
                                 material={materials.Joint_12_Object_21_Material_21}
                                 skeleton={nodes.Joint_13_Object_6_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_0_SINGLE" geometry={nodes.Joint_14_Object_0_SINGLE.geometry}
                                 material={materials.Joint_12_Object_3_Material_3}
                                 skeleton={nodes.Joint_14_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_1_SINGLE" geometry={nodes.Joint_14_Object_1_SINGLE.geometry}
                                 material={materials.Joint_13_Object_1_Material_1}
                                 skeleton={nodes.Joint_14_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_2_SINGLE" geometry={nodes.Joint_14_Object_2_SINGLE.geometry}
                                 material={materials.Joint_12_Object_8_Material_8}
                                 skeleton={nodes.Joint_14_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_3_SINGLE" geometry={nodes.Joint_14_Object_3_SINGLE.geometry}
                                 material={materials.Joint_13_Object_3_Material_3}
                                 skeleton={nodes.Joint_14_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_14_Object_6_SINGLE" geometry={nodes.Joint_14_Object_6_SINGLE.geometry}
                                 material={materials.Joint_12_Object_21_Material_21}
                                 skeleton={nodes.Joint_14_Object_6_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_0_SINGLE" geometry={nodes.Joint_15_Object_0_SINGLE.geometry}
                                 material={materials.Joint_12_Object_3_Material_3}
                                 skeleton={nodes.Joint_15_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_1_SINGLE" geometry={nodes.Joint_15_Object_1_SINGLE.geometry}
                                 material={materials.Joint_13_Object_1_Material_1}
                                 skeleton={nodes.Joint_15_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_2_SINGLE" geometry={nodes.Joint_15_Object_2_SINGLE.geometry}
                                 material={materials.Joint_12_Object_8_Material_8}
                                 skeleton={nodes.Joint_15_Object_2_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_3_SINGLE" geometry={nodes.Joint_15_Object_3_SINGLE.geometry}
                                 material={materials.Joint_13_Object_3_Material_3}
                                 skeleton={nodes.Joint_15_Object_3_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_15_Object_6_SINGLE" geometry={nodes.Joint_15_Object_6_SINGLE.geometry}
                                 material={materials.Joint_12_Object_21_Material_21}
                                 skeleton={nodes.Joint_15_Object_6_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_1_Object_0_SINGLE" geometry={nodes.Joint_1_Object_0_SINGLE.geometry}
                                 material={materials.Joint_12_Object_12_Material_12}
                                 skeleton={nodes.Joint_1_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_0_SINGLE" geometry={nodes.Joint_3_Object_0_SINGLE.geometry}
                                 material={materials.Joint_10_Object_0_Material_0}
                                 skeleton={nodes.Joint_3_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_3_Object_1_SINGLE" geometry={nodes.Joint_3_Object_1_SINGLE.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_3_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_5_Object_0_SINGLE" geometry={nodes.Joint_5_Object_0_SINGLE.geometry}
                                 material={materials.Joint_10_Object_0_Material_0}
                                 skeleton={nodes.Joint_5_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_5_Object_1_SINGLE" geometry={nodes.Joint_5_Object_1_SINGLE.geometry}
                                 material={materials.Joint_5_Object_1_Material_1}
                                 skeleton={nodes.Joint_5_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_7_Object_0_SINGLE" geometry={nodes.Joint_7_Object_0_SINGLE.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_7_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_7_Object_1_SINGLE" geometry={nodes.Joint_7_Object_1_SINGLE.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_7_Object_1_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_9_Object_0_SINGLE" geometry={nodes.Joint_9_Object_0_SINGLE.geometry}
                                 material={materials.Joint_10_Object_0_Material_0}
                                 skeleton={nodes.Joint_9_Object_0_SINGLE.skeleton}/>
                    <skinnedMesh name="Joint_9_Object_1_SINGLE" geometry={nodes.Joint_9_Object_1_SINGLE.geometry}
                                 material={materials['Joint_3_Object_0_Material_0.001']}
                                 skeleton={nodes.Joint_9_Object_1_SINGLE.skeleton}/>
                </group>
                <group name="Armature006">
                    <group name="root">
                        <group name="eye"/>
                        <group name="target"/>
                    </group>
                </group>
                <PerspectiveCamera name="Camera" makeDefault={false} far={10000} near={1} fov={22.73}
                                   position={[0, 100, 450]} rotation={[-0.17, 0, 0]} scale={68.19}/>
                <pointLight name="Point" intensity={5000000} decay={2} position={[57, 57, 57]}
                            rotation={[-Math.PI / 2, 0, 0]}/>
                <pointLight name="Point001" intensity={2500000} decay={2} position={[57, 57, 57]}
                            rotation={[-Math.PI / 2, 0, 0]}/>
                <pointLight name="Point002" intensity={2500000} decay={2} position={[57, 57, 57]}
                            rotation={[-Math.PI / 2, 0, 0]}/>
                <PerspectiveCamera name="Camera_Intro" makeDefault={false} far={20000} near={1} fov={74.82}
                                   position={[13.3, 77.17, 221.21]} rotation={[-0.28, 0.12, 0.03]} scale={68.19}/>
                <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} scale={2329.08}/>
            </group>
        </group>
    )
}

useGLTF.preload('Battlefield_render-transformed.glb')
