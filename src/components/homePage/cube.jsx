function Cube() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Cube;
