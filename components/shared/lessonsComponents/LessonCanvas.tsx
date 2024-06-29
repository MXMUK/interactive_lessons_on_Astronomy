import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
// import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

export default function LessonCanvas({ models }: { models: string[] }) {
  let model = null;
  let scale = null;

  // const router = useRouter();
   
  //  console.log({ basePath: router.basePath}); 

  const earthModel = useGLTF('http://localhost:3000/earth.glb');
  const sunModel = useGLTF('http://localhost:3000/sun.glb');
  const moonModel = useGLTF('http://localhost:3000/moon.glb');
  const jupiterModel = useGLTF('http://localhost:3000/jupiter.glb');

  return (
    <div className="h-full">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <mesh scale={2}>
          <primitive object={earthModel.scene} />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
