import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Door() {
    const PATH ="/static/textures/extra/"
    const props = useTexture({
      map: PATH + "color.jpg",
      //displacementMap: PATH + 'height.png',
      normalMap: PATH + 'normal.jpg',
      roughnessMap: PATH + 'roughness.jpg',
      aoMap: PATH + 'ao.jpg',
      
    })
    return (
        <mesh castShadow={true}  >
            <sphereGeometry/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}