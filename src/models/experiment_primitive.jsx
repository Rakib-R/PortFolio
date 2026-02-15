import React , {useRef} from 'react'
import { useFrame ,useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';


const Experiment_primitive = () => {

      const gltf = useLoader(GLTFLoader, '/models/optimized-room.glb')
      const meshRef = useRef();
      useFrame((state , delta) =>
        {
            meshRef.current.rotation.x += delta
        }) 
  return (
    <>
         <primitive 
         ref={meshRef}
            position={[0, -3, 0]}
            object={gltf.scene}
        />
    </>
  )
}

export default Experiment_primitive