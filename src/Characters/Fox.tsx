/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Fox_NLATest.glb --types --keepnames --transform
*/

import * as THREE from 'three'
import {AnimationClip} from 'three'
import React, {useEffect, useRef} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {useControls} from "leva";


const ActionNames = [
  'Appeal',
  'AppealSEndL',
  'AppealSEndR',
  'AppealSL',
  'AppealSR',
  'AppealSStartL',
  'AppealSStartR',
  'Attack100End',
  'Attack100Loop',
  'Attack100Start',
  'Attack11',
  'Attack12',
  'AttackAirB',
  'AttackAirF',
  'AttackAirHi',
  'AttackAirLw',
  'AttackAirN',
  'AttackDash',
  'AttackHi3',
  'AttackHi4',
  'AttackLw3',
  'AttackLw4',
  'AttackS3Hi',
  'AttackS3HiS',
  'AttackS3Lw',
  'AttackS3LwS',
  'AttackS3S',
  'AttackS4',
  'CaptureCut',
  'CaptureDamageHi',
  'CaptureDamageLw',
  'CaptureJump',
  'CapturePulledHi',
  'CapturePulledLw',
  'CaptureWaitHi',
  'CaptureWaitLw',
  'Catch',
  'CatchAttack',
  'CatchCut',
  'CatchDash',
  'CatchWait',
  'CliffAttackQuick',
  'CliffAttackSlow',
  'CliffCatch',
  'CliffClimbQuick',
  'CliffClimbSlow',
  'CliffEscapeQuick',
  'CliffEscapeSlow',
  'CliffJumpQuick1',
  'CliffJumpQuick2',
  'CliffJumpSlow1',
  'CliffJumpSlow2',
  'CliffWait',
  'DamageAir1',
  'DamageAir2',
  'DamageAir3',
  'DamageFall',
  'DamageFlyHi',
  'DamageFlyLw',
  'DamageFlyN',
  'DamageFlyRoll',
  'DamageFlyTop',
  'DamageHi1',
  'DamageHi2',
  'DamageHi3',
  'DamageLw1',
  'DamageLw2',
  'DamageLw3',
  'DamageN1',
  'DamageN2',
  'DamageN3',
  'Dash',
  'DownAttackD',
  'DownAttackU',
  'DownBackD',
  'DownBackU',
  'DownBoundD',
  'DownBoundU',
  'DownDamageD',
  'DownDamageU',
  'DownFowardD',
  'DownFowardU',
  'DownSpotD',
  'DownStandD',
  'DownStandU',
  'DownWaitD',
  'DownWaitU',
  'Entry',
  'EscapeAir',
  'EscapeB',
  'EscapeF',
  'EscapeN',
  'Fall',
  'FallAerial',
  'FallAerialB',
  'FallAerialF',
  'FallB',
  'FallF',
  'FallSpecial',
  'FallSpecialB',
  'FallSpecialF',
  'FuraFura',
  'FuraSleepEnd',
  'FuraSleepLoop',
  'FuraSleepStart',
  'Guard',
  'GuardDamage',
  'GuardOff',
  'GuardOn',
  'HeavyGet',
  'HeavyThrowB',
  'HeavyThrowF',
  'HeavyThrowHi',
  'HeavyThrowLw',
  'HeavyWalk1',
  'HeavyWalk2',
  'ItemBlind',
  'ItemHammerMove',
  'ItemHammerWait',
  'ItemParasolFall',
  'ItemParasolOpen',
  'ItemScopeAirEnd',
  'ItemScopeAirFire',
  'ItemScopeAirRapid',
  'ItemScopeAirStart',
  'ItemScopeEnd',
  'ItemScopeFire',
  'ItemScopeRapid',
  'ItemScopeStart',
  'ItemScrew',
  'ItemScrewAir',
  'ItemScrewDamage',
  'ItemShoot',
  'ItemShootAir',
  'JumpAerialB',
  'JumpAerialF',
  'JumpB',
  'JumpF',
  'Landing',
  'LandingAirB',
  'LandingAirF',
  'LandingAirHi',
  'LandingAirLw',
  'LandingAirN',
  'LightGet',
  'LightThrowAirB',
  'LightThrowAirF',
  'LightThrowAirHi',
  'LightThrowAirLw',
  'LightThrowB',
  'LightThrowDash',
  'LightThrowDrop',
  'LightThrowF',
  'LightThrowHi',
  'LightThrowLw',
  'MissFoot',
  'Ottotto',
  'OttottoWait',
  'Pass',
  'Passive',
  'PassiveCeil',
  'PassiveStandB',
  'PassiveStandF',
  'PassiveWall',
  'PassiveWallJump',
  'Rebound',
  'Run',
  'RunBrake',
  'SpecialAirLwEnd',
  'SpecialAirLwHit',
  'SpecialAirLwLoop',
  'SpecialAirLwStart',
  'SpecialAirNEnd',
  'SpecialAirNLoop',
  'SpecialAirNStart',
  'SpecialAirS',
  'SpecialAirSEnd',
  'SpecialAirSStart',
  'SpecialHi',
  'SpecialHiBound',
  'SpecialHiFall',
  'SpecialHiHold',
  'SpecialHiHoldAir',
  'SpecialHiLanding',
  'SpecialLwEnd',
  'SpecialLwHit',
  'SpecialLwLoop',
  'SpecialLwStart',
  'SpecialNEnd',
  'SpecialNLoop',
  'SpecialNStart',
  'SpecialS',
  'SpecialSEnd',
  'SpecialSStart',
  'Squat',
  'SquatRv',
  'SquatWait',
  'SquatWaitItem',
  'StopCeil',
  'StopWall',
  'Swing1',
  'Swing3',
  'Swing4',
  'SwingDash',
  'ThrowB',
  'ThrowF',
  'ThrowHi',
  'ThrowLw',
  'Turn',
  'TurnRun',
  'Wait1',
  'Wait1.003',
  'Wait2',
  'WalkFast',
  'WalkMiddle',
  'WalkSlow',
  'WallDamage',
]

type ActionName =
  | 'Appeal'
  | 'AppealSEndL'
  | 'AppealSEndR'
  | 'AppealSL'
  | 'AppealSR'
  | 'AppealSStartL'
  | 'AppealSStartR'
  | 'Attack100End'
  | 'Attack100Loop'
  | 'Attack100Start'
  | 'Attack11'
  | 'Attack12'
  | 'AttackAirB'
  | 'AttackAirF'
  | 'AttackAirHi'
  | 'AttackAirLw'
  | 'AttackAirN'
  | 'AttackDash'
  | 'AttackHi3'
  | 'AttackHi4'
  | 'AttackLw3'
  | 'AttackLw4'
  | 'AttackS3Hi'
  | 'AttackS3HiS'
  | 'AttackS3Lw'
  | 'AttackS3LwS'
  | 'AttackS3S'
  | 'AttackS4'
  | 'CaptureCut'
  | 'CaptureDamageHi'
  | 'CaptureDamageLw'
  | 'CaptureJump'
  | 'CapturePulledHi'
  | 'CapturePulledLw'
  | 'CaptureWaitHi'
  | 'CaptureWaitLw'
  | 'Catch'
  | 'CatchAttack'
  | 'CatchCut'
  | 'CatchDash'
  | 'CatchWait'
  | 'CliffAttackQuick'
  | 'CliffAttackSlow'
  | 'CliffCatch'
  | 'CliffClimbQuick'
  | 'CliffClimbSlow'
  | 'CliffEscapeQuick'
  | 'CliffEscapeSlow'
  | 'CliffJumpQuick1'
  | 'CliffJumpQuick2'
  | 'CliffJumpSlow1'
  | 'CliffJumpSlow2'
  | 'CliffWait'
  | 'DamageAir1'
  | 'DamageAir2'
  | 'DamageAir3'
  | 'DamageFall'
  | 'DamageFlyHi'
  | 'DamageFlyLw'
  | 'DamageFlyN'
  | 'DamageFlyRoll'
  | 'DamageFlyTop'
  | 'DamageHi1'
  | 'DamageHi2'
  | 'DamageHi3'
  | 'DamageLw1'
  | 'DamageLw2'
  | 'DamageLw3'
  | 'DamageN1'
  | 'DamageN2'
  | 'DamageN3'
  | 'Dash'
  | 'DownAttackD'
  | 'DownAttackU'
  | 'DownBackD'
  | 'DownBackU'
  | 'DownBoundD'
  | 'DownBoundU'
  | 'DownDamageD'
  | 'DownDamageU'
  | 'DownFowardD'
  | 'DownFowardU'
  | 'DownSpotD'
  | 'DownStandD'
  | 'DownStandU'
  | 'DownWaitD'
  | 'DownWaitU'
  | 'Entry'
  | 'EscapeAir'
  | 'EscapeB'
  | 'EscapeF'
  | 'EscapeN'
  | 'Fall'
  | 'FallAerial'
  | 'FallAerialB'
  | 'FallAerialF'
  | 'FallB'
  | 'FallF'
  | 'FallSpecial'
  | 'FallSpecialB'
  | 'FallSpecialF'
  | 'FuraFura'
  | 'FuraSleepEnd'
  | 'FuraSleepLoop'
  | 'FuraSleepStart'
  | 'Guard'
  | 'GuardDamage'
  | 'GuardOff'
  | 'GuardOn'
  | 'HeavyGet'
  | 'HeavyThrowB'
  | 'HeavyThrowF'
  | 'HeavyThrowHi'
  | 'HeavyThrowLw'
  | 'HeavyWalk1'
  | 'HeavyWalk2'
  | 'ItemBlind'
  | 'ItemHammerMove'
  | 'ItemHammerWait'
  | 'ItemParasolFall'
  | 'ItemParasolOpen'
  | 'ItemScopeAirEnd'
  | 'ItemScopeAirFire'
  | 'ItemScopeAirRapid'
  | 'ItemScopeAirStart'
  | 'ItemScopeEnd'
  | 'ItemScopeFire'
  | 'ItemScopeRapid'
  | 'ItemScopeStart'
  | 'ItemScrew'
  | 'ItemScrewAir'
  | 'ItemScrewDamage'
  | 'ItemShoot'
  | 'ItemShootAir'
  | 'JumpAerialB'
  | 'JumpAerialF'
  | 'JumpB'
  | 'JumpF'
  | 'Landing'
  | 'LandingAirB'
  | 'LandingAirF'
  | 'LandingAirHi'
  | 'LandingAirLw'
  | 'LandingAirN'
  | 'LightGet'
  | 'LightThrowAirB'
  | 'LightThrowAirF'
  | 'LightThrowAirHi'
  | 'LightThrowAirLw'
  | 'LightThrowB'
  | 'LightThrowDash'
  | 'LightThrowDrop'
  | 'LightThrowF'
  | 'LightThrowHi'
  | 'LightThrowLw'
  | 'MissFoot'
  | 'Ottotto'
  | 'OttottoWait'
  | 'Pass'
  | 'Passive'
  | 'PassiveCeil'
  | 'PassiveStandB'
  | 'PassiveStandF'
  | 'PassiveWall'
  | 'PassiveWallJump'
  | 'Rebound'
  | 'Run'
  | 'RunBrake'
  | 'SpecialAirLwEnd'
  | 'SpecialAirLwHit'
  | 'SpecialAirLwLoop'
  | 'SpecialAirLwStart'
  | 'SpecialAirNEnd'
  | 'SpecialAirNLoop'
  | 'SpecialAirNStart'
  | 'SpecialAirS'
  | 'SpecialAirSEnd'
  | 'SpecialAirSStart'
  | 'SpecialHi'
  | 'SpecialHiBound'
  | 'SpecialHiFall'
  | 'SpecialHiHold'
  | 'SpecialHiHoldAir'
  | 'SpecialHiLanding'
  | 'SpecialLwEnd'
  | 'SpecialLwHit'
  | 'SpecialLwLoop'
  | 'SpecialLwStart'
  | 'SpecialNEnd'
  | 'SpecialNLoop'
  | 'SpecialNStart'
  | 'SpecialS'
  | 'SpecialSEnd'
  | 'SpecialSStart'
  | 'Squat'
  | 'SquatRv'
  | 'SquatWait'
  | 'SquatWaitItem'
  | 'StopCeil'
  | 'StopWall'
  | 'Swing1'
  | 'Swing3'
  | 'Swing4'
  | 'SwingDash'
  | 'ThrowB'
  | 'ThrowF'
  | 'ThrowHi'
  | 'ThrowLw'
  | 'Turn'
  | 'TurnRun'
  | 'Wait1'
  | 'Wait1.003'
  | 'Wait2'
  | 'WalkFast'
  | 'WalkMiddle'
  | 'WalkSlow'
  | 'WallDamage'
interface GLTFAction extends AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Joint_0_Object_0: THREE.SkinnedMesh
    Joint_0_Object_1: THREE.SkinnedMesh
    Joint_0_Object_10: THREE.SkinnedMesh
    Joint_0_Object_11: THREE.SkinnedMesh
    Joint_0_Object_12: THREE.SkinnedMesh
    Joint_0_Object_13: THREE.SkinnedMesh
    Joint_0_Object_14: THREE.SkinnedMesh
    Joint_0_Object_15: THREE.SkinnedMesh
    Joint_0_Object_16: THREE.SkinnedMesh
    Joint_0_Object_17: THREE.SkinnedMesh
    Joint_0_Object_18: THREE.SkinnedMesh
    Joint_0_Object_19: THREE.SkinnedMesh
    Joint_0_Object_2: THREE.SkinnedMesh
    Joint_0_Object_20: THREE.SkinnedMesh
    Joint_0_Object_21: THREE.SkinnedMesh
    Joint_0_Object_22: THREE.SkinnedMesh
    Joint_0_Object_23: THREE.SkinnedMesh
    Joint_0_Object_24: THREE.SkinnedMesh
    Joint_0_Object_25: THREE.SkinnedMesh
    Joint_0_Object_26: THREE.SkinnedMesh
    Joint_0_Object_27: THREE.SkinnedMesh
    Joint_0_Object_28: THREE.SkinnedMesh
    Joint_0_Object_29: THREE.SkinnedMesh
    Joint_0_Object_3: THREE.SkinnedMesh
    Joint_0_Object_30: THREE.SkinnedMesh
    Joint_0_Object_31: THREE.SkinnedMesh
    Joint_0_Object_32: THREE.SkinnedMesh
    Joint_0_Object_33: THREE.SkinnedMesh
    Joint_0_Object_34: THREE.SkinnedMesh
    Joint_0_Object_35: THREE.SkinnedMesh
    Joint_0_Object_36: THREE.SkinnedMesh
    Joint_0_Object_37: THREE.SkinnedMesh
    Joint_0_Object_38: THREE.SkinnedMesh
    Joint_0_Object_39: THREE.SkinnedMesh
    Joint_0_Object_4: THREE.SkinnedMesh
    Joint_0_Object_40: THREE.SkinnedMesh
    Joint_0_Object_41: THREE.SkinnedMesh
    Joint_0_Object_42: THREE.SkinnedMesh
    Joint_0_Object_43: THREE.SkinnedMesh
    Joint_0_Object_44: THREE.SkinnedMesh
    Joint_0_Object_45: THREE.SkinnedMesh
    Joint_0_Object_46: THREE.SkinnedMesh
    Joint_0_Object_47: THREE.SkinnedMesh
    Joint_0_Object_48: THREE.SkinnedMesh
    Joint_0_Object_49: THREE.SkinnedMesh
    Joint_0_Object_5: THREE.SkinnedMesh
    Joint_0_Object_50: THREE.SkinnedMesh
    Joint_0_Object_51: THREE.SkinnedMesh
    Joint_0_Object_52: THREE.SkinnedMesh
    Joint_0_Object_53: THREE.SkinnedMesh
    Joint_0_Object_54: THREE.SkinnedMesh
    Joint_0_Object_55: THREE.SkinnedMesh
    Joint_0_Object_56: THREE.SkinnedMesh
    Joint_0_Object_57: THREE.SkinnedMesh
    Joint_0_Object_58: THREE.SkinnedMesh
    Joint_0_Object_59: THREE.SkinnedMesh
    Joint_0_Object_6: THREE.SkinnedMesh
    Joint_0_Object_60: THREE.SkinnedMesh
    Joint_0_Object_61: THREE.SkinnedMesh
    Joint_0_Object_62: THREE.SkinnedMesh
    Joint_0_Object_63: THREE.SkinnedMesh
    Joint_0_Object_64: THREE.SkinnedMesh
    Joint_0_Object_65: THREE.SkinnedMesh
    Joint_0_Object_66: THREE.SkinnedMesh
    Joint_0_Object_67: THREE.SkinnedMesh
    Joint_0_Object_68: THREE.SkinnedMesh
    Joint_0_Object_69: THREE.SkinnedMesh
    Joint_0_Object_7: THREE.SkinnedMesh
    Joint_0_Object_70: THREE.SkinnedMesh
    Joint_0_Object_71: THREE.SkinnedMesh
    Joint_0_Object_8: THREE.SkinnedMesh
    Joint_0_Object_9: THREE.SkinnedMesh
    Joint_41_Object_0_SINGLE: THREE.SkinnedMesh
    Joint_41_Object_1_SINGLE: THREE.SkinnedMesh
    Joint_41_Object_2_SINGLE: THREE.SkinnedMesh
    Joint_45_Object_0_SINGLE: THREE.SkinnedMesh
    Joint_49_Object_0_SINGLE: THREE.SkinnedMesh
    Cube: THREE.Mesh
    JOBJ_0: THREE.Bone
  }
  materials: {
    ['Joint_0_Object_0_Material_0.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_1_Material_1.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_10_Material_10.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_11_Material_11.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_14_Material_14.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_15_Material_15.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_16_Material_16.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_17_Material_17.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_18_Material_18.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_19_Material_19.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_2_Material_2.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_20_Material_20.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_21_Material_21.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_22_Material_22.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_23_Material_23.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_24_Material_24.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_25_Material_25.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_27_Material_27.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_28_Material_28.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_29_Material_29.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_3_Material_3.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_30_Material_30.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_31_Material_31.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_32_Material_32.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_33_Material_33.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_34_Material_34.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_35_Material_35.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_36_Material_36.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_37_Material_37.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_43_Material_43.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_47_Material_47.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_48_Material_48.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_49_Material_49.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_52_Material_52.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_53_Material_53.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_54_Material_54.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_56_Material_56.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_57_Material_57.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_58_Material_58.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_6_Material_6.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_67_Material_67.001']: THREE.MeshStandardMaterial
    ['Joint_0_Object_71_Material_71.001']: THREE.MeshStandardMaterial
    ['Joint_41_Object_1_Material_1.001']: THREE.MeshStandardMaterial
    ['Joint_45_Object_0_Material_0.001']: THREE.MeshStandardMaterial
    ['Joint_49_Object_0_Material_0.001']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  },
  animations: GLTFAction[]

}

export function Fox(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('Fox_NLATest-transformed.glb') as unknown as GLTFResult
  const { actions, names } = useAnimations(animations, group)

  const {animation} = useControls({
      animation: {
          value: "Attack100Loop",
          options: names,
      }
  })

  useEffect(() => {
    // @ts-ignore
    actions[animation]?.play()

    return () =>
    {
      // @ts-ignore
        actions[animation]?.fadeOut(0.5)
    }
  }, [animation])



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="model">
        <group name="model_skeleton">
          <primitive object={nodes.JOBJ_0} />
          <skinnedMesh name="Joint_0_Object_0" geometry={nodes.Joint_0_Object_0.geometry} material={materials['Joint_0_Object_0_Material_0.001']} skeleton={nodes.Joint_0_Object_0.skeleton} />
          <skinnedMesh name="Joint_0_Object_1" geometry={nodes.Joint_0_Object_1.geometry} material={materials['Joint_0_Object_1_Material_1.001']} skeleton={nodes.Joint_0_Object_1.skeleton} />
          <skinnedMesh name="Joint_0_Object_10" geometry={nodes.Joint_0_Object_10.geometry} material={materials['Joint_0_Object_10_Material_10.001']} skeleton={nodes.Joint_0_Object_10.skeleton} />
          <skinnedMesh name="Joint_0_Object_11" geometry={nodes.Joint_0_Object_11.geometry} material={materials['Joint_0_Object_11_Material_11.001']} skeleton={nodes.Joint_0_Object_11.skeleton} />
          <skinnedMesh name="Joint_0_Object_12" geometry={nodes.Joint_0_Object_12.geometry} material={materials['Joint_0_Object_10_Material_10.001']} skeleton={nodes.Joint_0_Object_12.skeleton} />
          <skinnedMesh name="Joint_0_Object_13" geometry={nodes.Joint_0_Object_13.geometry} material={materials['Joint_0_Object_11_Material_11.001']} skeleton={nodes.Joint_0_Object_13.skeleton} />
          <skinnedMesh name="Joint_0_Object_14" geometry={nodes.Joint_0_Object_14.geometry} material={materials['Joint_0_Object_14_Material_14.001']} skeleton={nodes.Joint_0_Object_14.skeleton} />
          <skinnedMesh name="Joint_0_Object_15" geometry={nodes.Joint_0_Object_15.geometry} material={materials['Joint_0_Object_15_Material_15.001']} skeleton={nodes.Joint_0_Object_15.skeleton} />
          <skinnedMesh name="Joint_0_Object_16" geometry={nodes.Joint_0_Object_16.geometry} material={materials['Joint_0_Object_16_Material_16.001']} skeleton={nodes.Joint_0_Object_16.skeleton} />
          <skinnedMesh name="Joint_0_Object_17" geometry={nodes.Joint_0_Object_17.geometry} material={materials['Joint_0_Object_17_Material_17.001']} skeleton={nodes.Joint_0_Object_17.skeleton} />
          <skinnedMesh name="Joint_0_Object_18" geometry={nodes.Joint_0_Object_18.geometry} material={materials['Joint_0_Object_18_Material_18.001']} skeleton={nodes.Joint_0_Object_18.skeleton} />
          <skinnedMesh name="Joint_0_Object_19" geometry={nodes.Joint_0_Object_19.geometry} material={materials['Joint_0_Object_19_Material_19.001']} skeleton={nodes.Joint_0_Object_19.skeleton} />
          <skinnedMesh name="Joint_0_Object_2" geometry={nodes.Joint_0_Object_2.geometry} material={materials['Joint_0_Object_2_Material_2.001']} skeleton={nodes.Joint_0_Object_2.skeleton} />
          <skinnedMesh name="Joint_0_Object_20" geometry={nodes.Joint_0_Object_20.geometry} material={materials['Joint_0_Object_20_Material_20.001']} skeleton={nodes.Joint_0_Object_20.skeleton} />
          <skinnedMesh name="Joint_0_Object_21" geometry={nodes.Joint_0_Object_21.geometry} material={materials['Joint_0_Object_21_Material_21.001']} skeleton={nodes.Joint_0_Object_21.skeleton} />
          <skinnedMesh name="Joint_0_Object_22" geometry={nodes.Joint_0_Object_22.geometry} material={materials['Joint_0_Object_22_Material_22.001']} skeleton={nodes.Joint_0_Object_22.skeleton} />
          <skinnedMesh name="Joint_0_Object_23" geometry={nodes.Joint_0_Object_23.geometry} material={materials['Joint_0_Object_23_Material_23.001']} skeleton={nodes.Joint_0_Object_23.skeleton} />
          <skinnedMesh name="Joint_0_Object_24" geometry={nodes.Joint_0_Object_24.geometry} material={materials['Joint_0_Object_24_Material_24.001']} skeleton={nodes.Joint_0_Object_24.skeleton} />
          <skinnedMesh name="Joint_0_Object_25" geometry={nodes.Joint_0_Object_25.geometry} material={materials['Joint_0_Object_25_Material_25.001']} skeleton={nodes.Joint_0_Object_25.skeleton} />
          <skinnedMesh name="Joint_0_Object_26" geometry={nodes.Joint_0_Object_26.geometry} material={materials['Joint_0_Object_25_Material_25.001']} skeleton={nodes.Joint_0_Object_26.skeleton} />
          <skinnedMesh name="Joint_0_Object_27" geometry={nodes.Joint_0_Object_27.geometry} material={materials['Joint_0_Object_27_Material_27.001']} skeleton={nodes.Joint_0_Object_27.skeleton} />
          <skinnedMesh name="Joint_0_Object_28" geometry={nodes.Joint_0_Object_28.geometry} material={materials['Joint_0_Object_28_Material_28.001']} skeleton={nodes.Joint_0_Object_28.skeleton} />
          <skinnedMesh name="Joint_0_Object_29" geometry={nodes.Joint_0_Object_29.geometry} material={materials['Joint_0_Object_29_Material_29.001']} skeleton={nodes.Joint_0_Object_29.skeleton} />
          <skinnedMesh name="Joint_0_Object_3" geometry={nodes.Joint_0_Object_3.geometry} material={materials['Joint_0_Object_3_Material_3.001']} skeleton={nodes.Joint_0_Object_3.skeleton} />
          <skinnedMesh name="Joint_0_Object_30" geometry={nodes.Joint_0_Object_30.geometry} material={materials['Joint_0_Object_30_Material_30.001']} skeleton={nodes.Joint_0_Object_30.skeleton} />
          <skinnedMesh name="Joint_0_Object_31" geometry={nodes.Joint_0_Object_31.geometry} material={materials['Joint_0_Object_31_Material_31.001']} skeleton={nodes.Joint_0_Object_31.skeleton} />
          <skinnedMesh name="Joint_0_Object_32" geometry={nodes.Joint_0_Object_32.geometry} material={materials['Joint_0_Object_32_Material_32.001']} skeleton={nodes.Joint_0_Object_32.skeleton} />
          <skinnedMesh name="Joint_0_Object_33" geometry={nodes.Joint_0_Object_33.geometry} material={materials['Joint_0_Object_33_Material_33.001']} skeleton={nodes.Joint_0_Object_33.skeleton} />
          <skinnedMesh name="Joint_0_Object_34" geometry={nodes.Joint_0_Object_34.geometry} material={materials['Joint_0_Object_34_Material_34.001']} skeleton={nodes.Joint_0_Object_34.skeleton} />
          <skinnedMesh name="Joint_0_Object_35" geometry={nodes.Joint_0_Object_35.geometry} material={materials['Joint_0_Object_35_Material_35.001']} skeleton={nodes.Joint_0_Object_35.skeleton} />
          <skinnedMesh name="Joint_0_Object_36" geometry={nodes.Joint_0_Object_36.geometry} material={materials['Joint_0_Object_36_Material_36.001']} skeleton={nodes.Joint_0_Object_36.skeleton} />
          <skinnedMesh name="Joint_0_Object_37" geometry={nodes.Joint_0_Object_37.geometry} material={materials['Joint_0_Object_37_Material_37.001']} skeleton={nodes.Joint_0_Object_37.skeleton} />
          <skinnedMesh name="Joint_0_Object_38" geometry={nodes.Joint_0_Object_38.geometry} material={materials['Joint_0_Object_10_Material_10.001']} skeleton={nodes.Joint_0_Object_38.skeleton} />
          <skinnedMesh name="Joint_0_Object_39" geometry={nodes.Joint_0_Object_39.geometry} material={materials['Joint_0_Object_1_Material_1.001']} skeleton={nodes.Joint_0_Object_39.skeleton} />
          <skinnedMesh name="Joint_0_Object_4" geometry={nodes.Joint_0_Object_4.geometry} material={materials['Joint_0_Object_23_Material_23.001']} skeleton={nodes.Joint_0_Object_4.skeleton} />
          <skinnedMesh name="Joint_0_Object_40" geometry={nodes.Joint_0_Object_40.geometry} material={materials['Joint_0_Object_23_Material_23.001']} skeleton={nodes.Joint_0_Object_40.skeleton} />
          <skinnedMesh name="Joint_0_Object_41" geometry={nodes.Joint_0_Object_41.geometry} material={materials['Joint_0_Object_2_Material_2.001']} skeleton={nodes.Joint_0_Object_41.skeleton} />
          <skinnedMesh name="Joint_0_Object_42" geometry={nodes.Joint_0_Object_42.geometry} material={materials['Joint_0_Object_1_Material_1.001']} skeleton={nodes.Joint_0_Object_42.skeleton} />
          <skinnedMesh name="Joint_0_Object_43" geometry={nodes.Joint_0_Object_43.geometry} material={materials['Joint_0_Object_43_Material_43.001']} skeleton={nodes.Joint_0_Object_43.skeleton} />
          <skinnedMesh name="Joint_0_Object_44" geometry={nodes.Joint_0_Object_44.geometry} material={materials['Joint_0_Object_20_Material_20.001']} skeleton={nodes.Joint_0_Object_44.skeleton} />
          <skinnedMesh name="Joint_0_Object_45" geometry={nodes.Joint_0_Object_45.geometry} material={materials['Joint_0_Object_19_Material_19.001']} skeleton={nodes.Joint_0_Object_45.skeleton} />
          <skinnedMesh name="Joint_0_Object_46" geometry={nodes.Joint_0_Object_46.geometry} material={materials['Joint_0_Object_22_Material_22.001']} skeleton={nodes.Joint_0_Object_46.skeleton} />
          <skinnedMesh name="Joint_0_Object_47" geometry={nodes.Joint_0_Object_47.geometry} material={materials['Joint_0_Object_47_Material_47.001']} skeleton={nodes.Joint_0_Object_47.skeleton} />
          <skinnedMesh name="Joint_0_Object_48" geometry={nodes.Joint_0_Object_48.geometry} material={materials['Joint_0_Object_48_Material_48.001']} skeleton={nodes.Joint_0_Object_48.skeleton} />
          <skinnedMesh name="Joint_0_Object_49" geometry={nodes.Joint_0_Object_49.geometry} material={materials['Joint_0_Object_49_Material_49.001']} skeleton={nodes.Joint_0_Object_49.skeleton} />
          <skinnedMesh name="Joint_0_Object_5" geometry={nodes.Joint_0_Object_5.geometry} material={materials['Joint_0_Object_37_Material_37.001']} skeleton={nodes.Joint_0_Object_5.skeleton} />
          <skinnedMesh name="Joint_0_Object_50" geometry={nodes.Joint_0_Object_50.geometry} material={materials['Joint_0_Object_15_Material_15.001']} skeleton={nodes.Joint_0_Object_50.skeleton} />
          <skinnedMesh name="Joint_0_Object_51" geometry={nodes.Joint_0_Object_51.geometry} material={materials['Joint_0_Object_16_Material_16.001']} skeleton={nodes.Joint_0_Object_51.skeleton} />
          <skinnedMesh name="Joint_0_Object_52" geometry={nodes.Joint_0_Object_52.geometry} material={materials['Joint_0_Object_52_Material_52.001']} skeleton={nodes.Joint_0_Object_52.skeleton} />
          <skinnedMesh name="Joint_0_Object_53" geometry={nodes.Joint_0_Object_53.geometry} material={materials['Joint_0_Object_53_Material_53.001']} skeleton={nodes.Joint_0_Object_53.skeleton} />
          <skinnedMesh name="Joint_0_Object_54" geometry={nodes.Joint_0_Object_54.geometry} material={materials['Joint_0_Object_54_Material_54.001']} skeleton={nodes.Joint_0_Object_54.skeleton} />
          <skinnedMesh name="Joint_0_Object_55" geometry={nodes.Joint_0_Object_55.geometry} material={materials['Joint_0_Object_25_Material_25.001']} skeleton={nodes.Joint_0_Object_55.skeleton} />
          <skinnedMesh name="Joint_0_Object_56" geometry={nodes.Joint_0_Object_56.geometry} material={materials['Joint_0_Object_56_Material_56.001']} skeleton={nodes.Joint_0_Object_56.skeleton} />
          <skinnedMesh name="Joint_0_Object_57" geometry={nodes.Joint_0_Object_57.geometry} material={materials['Joint_0_Object_57_Material_57.001']} skeleton={nodes.Joint_0_Object_57.skeleton} />
          <skinnedMesh name="Joint_0_Object_58" geometry={nodes.Joint_0_Object_58.geometry} material={materials['Joint_0_Object_58_Material_58.001']} skeleton={nodes.Joint_0_Object_58.skeleton} />
          <skinnedMesh name="Joint_0_Object_59" geometry={nodes.Joint_0_Object_59.geometry} material={materials['Joint_0_Object_31_Material_31.001']} skeleton={nodes.Joint_0_Object_59.skeleton} />
          <skinnedMesh name="Joint_0_Object_6" geometry={nodes.Joint_0_Object_6.geometry} material={materials['Joint_0_Object_6_Material_6.001']} skeleton={nodes.Joint_0_Object_6.skeleton} />
          <skinnedMesh name="Joint_0_Object_60" geometry={nodes.Joint_0_Object_60.geometry} material={materials['Joint_0_Object_0_Material_0.001']} skeleton={nodes.Joint_0_Object_60.skeleton} />
          <skinnedMesh name="Joint_0_Object_61" geometry={nodes.Joint_0_Object_61.geometry} material={materials['Joint_0_Object_32_Material_32.001']} skeleton={nodes.Joint_0_Object_61.skeleton} />
          <skinnedMesh name="Joint_0_Object_62" geometry={nodes.Joint_0_Object_62.geometry} material={materials['Joint_0_Object_33_Material_33.001']} skeleton={nodes.Joint_0_Object_62.skeleton} />
          <skinnedMesh name="Joint_0_Object_63" geometry={nodes.Joint_0_Object_63.geometry} material={materials['Joint_0_Object_34_Material_34.001']} skeleton={nodes.Joint_0_Object_63.skeleton} />
          <skinnedMesh name="Joint_0_Object_64" geometry={nodes.Joint_0_Object_64.geometry} material={materials['Joint_0_Object_32_Material_32.001']} skeleton={nodes.Joint_0_Object_64.skeleton} />
          <skinnedMesh name="Joint_0_Object_65" geometry={nodes.Joint_0_Object_65.geometry} material={materials['Joint_0_Object_33_Material_33.001']} skeleton={nodes.Joint_0_Object_65.skeleton} />
          <skinnedMesh name="Joint_0_Object_66" geometry={nodes.Joint_0_Object_66.geometry} material={materials['Joint_0_Object_34_Material_34.001']} skeleton={nodes.Joint_0_Object_66.skeleton} />
          <skinnedMesh name="Joint_0_Object_67" geometry={nodes.Joint_0_Object_67.geometry} material={materials['Joint_0_Object_67_Material_67.001']} skeleton={nodes.Joint_0_Object_67.skeleton} />
          <skinnedMesh name="Joint_0_Object_68" geometry={nodes.Joint_0_Object_68.geometry} material={materials['Joint_0_Object_32_Material_32.001']} skeleton={nodes.Joint_0_Object_68.skeleton} />
          <skinnedMesh name="Joint_0_Object_69" geometry={nodes.Joint_0_Object_69.geometry} material={materials['Joint_0_Object_33_Material_33.001']} skeleton={nodes.Joint_0_Object_69.skeleton} />
          <skinnedMesh name="Joint_0_Object_7" geometry={nodes.Joint_0_Object_7.geometry} material={materials['Joint_0_Object_37_Material_37.001']} skeleton={nodes.Joint_0_Object_7.skeleton} />
          <skinnedMesh name="Joint_0_Object_70" geometry={nodes.Joint_0_Object_70.geometry} material={materials['Joint_0_Object_34_Material_34.001']} skeleton={nodes.Joint_0_Object_70.skeleton} />
          <skinnedMesh name="Joint_0_Object_71" geometry={nodes.Joint_0_Object_71.geometry} material={materials['Joint_0_Object_71_Material_71.001']} skeleton={nodes.Joint_0_Object_71.skeleton} />
          <skinnedMesh name="Joint_0_Object_8" geometry={nodes.Joint_0_Object_8.geometry} material={materials['Joint_0_Object_6_Material_6.001']} skeleton={nodes.Joint_0_Object_8.skeleton} />
          <skinnedMesh name="Joint_0_Object_9" geometry={nodes.Joint_0_Object_9.geometry} material={materials['Joint_0_Object_54_Material_54.001']} skeleton={nodes.Joint_0_Object_9.skeleton} />
          <skinnedMesh name="Joint_41_Object_0_SINGLE" geometry={nodes.Joint_41_Object_0_SINGLE.geometry} material={materials['Joint_0_Object_53_Material_53.001']} skeleton={nodes.Joint_41_Object_0_SINGLE.skeleton} />
          <skinnedMesh name="Joint_41_Object_1_SINGLE" geometry={nodes.Joint_41_Object_1_SINGLE.geometry} material={materials['Joint_41_Object_1_Material_1.001']} skeleton={nodes.Joint_41_Object_1_SINGLE.skeleton} />
          <skinnedMesh name="Joint_41_Object_2_SINGLE" geometry={nodes.Joint_41_Object_2_SINGLE.geometry} material={materials['Joint_0_Object_52_Material_52.001']} skeleton={nodes.Joint_41_Object_2_SINGLE.skeleton} />
          <skinnedMesh name="Joint_45_Object_0_SINGLE" geometry={nodes.Joint_45_Object_0_SINGLE.geometry} material={materials['Joint_45_Object_0_Material_0.001']} skeleton={nodes.Joint_45_Object_0_SINGLE.skeleton} />
          <skinnedMesh name="Joint_49_Object_0_SINGLE" geometry={nodes.Joint_49_Object_0_SINGLE.geometry} material={materials['Joint_49_Object_0_Material_0.001']} skeleton={nodes.Joint_49_Object_0_SINGLE.skeleton} />
        </group>
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} scale={375.37} />
      </group>
    </group>
  )
}

useGLTF.preload('Fox_NLATest-transformed.glb')
