// AnimatedModel.jsx
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useState } from "react";

function AnimatedModel() {
  // Load the first model and animation (from /model.glb)
  const { scene: modelScene, animations: modelAnimations } =
    useGLTF("/model.glb");

  // Load the second animation (from /modelAnimation.glb)
  const { animations: animationActions } = useGLTF("/modelAnimation.glb");

  // Use the animations from the first model (default animation)
  const { actions: modelActions, names: modelNames } = useAnimations(
    modelAnimations,
    modelScene
  );

  // Use the second animation (this will only be used on click)
  const { actions: animationActionsMap, names: animationNames } = useAnimations(
    animationActions,
    modelScene
  );

  const [isPlayingSecondAnimation, setIsPlayingSecondAnimation] =
    useState(false);

  // Default to play the first animation (from /model.glb) when the component is mounted
  useEffect(() => {
    if (modelActions && modelNames.length > 0) {
      // Stop all animations before playing the first one
      Object.values(modelActions).forEach((action) => action.stop());

      // Play the first animation from /model.glb
      const firstAnimation = modelActions[modelNames[0]];
      if (firstAnimation) {
        firstAnimation.play();
      }
    }
  }, [modelActions, modelNames]);

  // Handle click to play the second animation (from /modelAnimation.glb)
  const handleClick = () => {
    if (!isPlayingSecondAnimation) {
      const secondAnimationName = animationNames[0]; // The first animation from modelAnimation.glb

      // Check if the second animation exists
      if (secondAnimationName && animationActionsMap[secondAnimationName]) {
        const secondAnimation = animationActionsMap[secondAnimationName];

        // Play the second animation very slowly for 2 seconds
        setIsPlayingSecondAnimation(true);

        // Reset and play the second animation (from modelAnimation.glb)
        secondAnimation.reset().play();
        secondAnimation.clampWhenFinished = true;
        secondAnimation.loop = 1; // Play once
        secondAnimation.setDuration(2); // Play for 2 seconds

        // Slow down the animation by setting the time scale to 0.2 (faster than before)
        secondAnimation.getMixer().timeScale = 0.25; // Slow down to 20% speed (a bit faster)

        // After 2 seconds, stop the second animation and return to default animation
        setTimeout(() => {
          secondAnimation.stop();
          setIsPlayingSecondAnimation(false);

          // Reset to default animation after 2 seconds
          const firstAnimation = modelActions[modelNames[0]];
          if (firstAnimation) {
            firstAnimation.play();
          }
        }, 2000); // Stop after 2 seconds
      }
    }
  };

  return (
    <primitive
      object={modelScene}
      scale={0.5}
      position={[0.35, -0.4, 0]}
      onClick={handleClick} // Trigger the handleClick function on model click
    />
  );
}

export default AnimatedModel;
