import { PerspectiveCamera } from "@react-three/drei";

const Camera = (props) => {
  return (
    <>
      <PerspectiveCamera {...props} makeDefault />
    </>
  );
};

export default Camera;
