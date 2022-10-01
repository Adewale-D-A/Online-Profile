import {
  Scroll,
  ScrollControls,
  Html,
  Text3D,
  Center,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Camera from "./components/camera";
import Evn from "./components/environment";
import LightDisplay from "./components/lights";
import Sphere from "./components/shape";
import SusHtml from "./components/suspenseHtml";

const BoxGeo = () => {
  return (
    <>
      <mesh position={[0, -2, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <Suspense fallback={<SusHtml />}>
          <Camera position={[0, 1, 5]} />
          <LightDisplay />

          <Evn />
          <ScrollControls pages={2} distance={1}>
            <Scroll html className="scroll-html">
              <div className="topBar">
                <div className="nav-components">
                  <span>Home</span>
                </div>
                <div className="nav-components">
                  <span>About Me</span>
                </div>
                <div className="nav-components">
                  <span>Projects</span>
                </div>
                <div className="nav-components">Contact Me</div>
              </div>
            </Scroll>
            <Scroll>
              <Sphere position={[0, 1, -2]} />
              <Center rotation={[-0.1, -0.1, 0]} position={[0, 1, 0]}>
                <Text3D
                  curveSegments={32}
                  bevelEnabled
                  bevelSize={0.04}
                  bevelThickness={0.1}
                  height={0.5}
                  lineHeight={0.5}
                  letterSpacing={-0.06}
                  size={0.5}
                  font="/Inter_Bold.json"
                >
                  {`My Online Profile`}
                  <meshNormalMaterial />
                </Text3D>
              </Center>
            </Scroll>
            <Scroll>
              <BoxGeo />
            </Scroll>
            <Html>
              <h1>Hello there</h1>
              <h1>Hey there?</h1>
            </Html>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
