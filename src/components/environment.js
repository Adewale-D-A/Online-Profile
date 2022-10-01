import { Environment } from "@react-three/drei";
import * as THREE from "three";
const Evn = () => {
  return (
    <Environment background>
      <mesh>
        <sphereGeometry args={[50, 100, 100]} />
        <meshBasicMaterial color={"#282c34"} side={THREE.BackSide} />
      </mesh>
    </Environment>
  );
};

export default Evn;
