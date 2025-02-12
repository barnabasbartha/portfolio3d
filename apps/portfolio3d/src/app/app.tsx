import { useRef, useState } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import styled from 'styled-components';

function Box(props: MeshProps) {
  const ref = useRef<Mesh | null>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta / 2;
    ref.current.rotation.y += delta / 2;
  });

  return (
    <mesh
      {...props}
      ref={(r) => {
        ref.current = r;
      }}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => {
        event.stopPropagation();
        hover(true);
      }}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const StyledCanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  return (
    <StyledCanvasContainer>
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
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </StyledCanvasContainer>
  );
}
