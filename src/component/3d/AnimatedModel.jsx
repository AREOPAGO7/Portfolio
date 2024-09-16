import { useGLTF } from "@react-three/drei";
import { useSpring, a } from '@react-spring/three';

function AnimatedModel(props) {
  // Define the animation using react-spring
  const springProps = useSpring({
    from: { position: [0, 0, 0] },
    to: async (next) => {
      while (true) {
        await next({ position: [0, 0.5, 0] });
        await next({ position: [0, 0, 0] });
      }
    },
    config: { duration: 4000, tension: 100, friction: 10 }, // Duration and easing configuration
    reset: true,
    reverse: true,
  });

  return <a.primitive object={useGLTF("/logo.glb").scene} {...props} position={springProps.position} />;
}

export default AnimatedModel;
