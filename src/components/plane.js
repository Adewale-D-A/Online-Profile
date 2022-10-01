const Plane = (props) => {
  return (
    <>
      <mesh {...props} receiveShadow>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
};

export default Plane;
