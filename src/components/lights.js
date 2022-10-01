import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Deg2Rad from "./degToRad";

const LightDisplay = () => {
  const spotLight = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;
    spotLight.current.position.y = (y + 2) * Deg2Rad(340);
    spotLight.current.position.x = x * 3 * Deg2Rad(270);
  });

  return (
    <>
      <spotLight
        ref={spotLight}
        color={"red"}
        distance={50}
        castShadow
        intensity={5}
        angle={0.5}
        penumbra={0.3}
        attenuation={2}
        anglePower={3}
      />
      <directionalLight
        args={["white", 1]}
        // position={[1, 0.5, 0]}
        position={[2, 2, 0]}
        intensity={0.4}
        castShadow
      />
      <ambientLight intensity={0.1} />
    </>
  );
};

export default LightDisplay;
