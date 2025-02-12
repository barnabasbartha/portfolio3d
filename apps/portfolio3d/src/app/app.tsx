import { Canvas, MeshProps } from '@react-three/fiber';
import styled from 'styled-components';

const Box = (props: MeshProps) => (
  <mesh {...props}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="orange" />
  </mesh>
);

const StyledCanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const App = () => (
  <StyledCanvasContainer>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  </StyledCanvasContainer>
);
