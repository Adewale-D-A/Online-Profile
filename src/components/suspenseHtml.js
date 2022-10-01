import { Html, useProgress } from "@react-three/drei";

const SusHtml = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <h1>{progress} % loading</h1>
    </Html>
  );
};

export default SusHtml;
