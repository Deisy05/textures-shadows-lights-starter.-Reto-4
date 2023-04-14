import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import { DirectionalLightHelper, HemisphereLightHelper,  PointLightHelper, SpotLightHelper } from 'three'
import { useRef } from 'react'
import Torux from './Torux'


export default function Experience() {

    const directionalLightRef = useRef()
     const rectLightRef = useRef()
     const hemisphereLightRef = useRef()
     const pointLightRef = useRef()
     const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    //useHelper(hemisphereLightRef, HemisphereLightHelper, 1.5)
    //useHelper(pointLightRef, PointLightHelper, 2)
    //useHelper(spotLightRef, SpotLightHelper)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight ref={directionalLightRef} castShadow={true} position={[0, 5, -2]} intensity={1.5} />
        {/* <rectAreaLight ref={rectLightRef} width = {5} height = {10} intensity = {10} position={[0,2,2]} color={'#39E847'} /> */}
        {/* <hemisphereLight ref={hemisphereLightRef} position={[0,2,2]} color={'#4BEE55'} groundColor={'#431746'} intensity={15}/> */}
        {/* <pointLight ref={pointLightRef} castShadow={true}color={'#33F5EF'} distance={10} position={[0,2,-2]} decay={4} intensity={10}/> */}
        {/* <spotLight ref={spotLightRef} castShadow={true} position={[-4,3,2]} angle={Math.PI * 0.20} color={'#39E847'} distance={52} penumbra={0.3} decay={4} intensity={15}/> */}


        <ambientLight intensity={1.5} />
        <Torux/>
        <Floor/>
    </>
}