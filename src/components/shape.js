import { useTexture } from "@react-three/drei";
import moonColor from "../textures/lroc_color_poles_1k.jpg";
import moonDisplacement from "../textures/ldem_3_8bit.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

const Sphere = (props) => {
  const moonRef = useRef();
  const [hover, setHover] = useState(false);
  const { scale } = useSpring({ scale: hover ? 1 : 0.9 });
  const [colorMap, displacementMap] = useTexture([moonColor, moonDisplacement]);

  useFrame((state) => {
    moonRef.current.rotation.y += 0.001;
  });
  return (
    <animated.mesh
      {...props}
      castShadow
      ref={moonRef}
      scale={scale}
      // scale={hover ? 1 : 0.9}
      onPointerEnter={() => setHover(!hover)}
      onPointerLeave={() => setHover(!hover)}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color={"white"}
        metalness={0.5}
        roughness={0.2}
        map={colorMap}
        envMapIntensity={0.4}
      />
    </animated.mesh>
  );
};

export default Sphere;
