
import Galaxy from "./Galaxy";

function GalaxyBackground() {
  return (
    <div className="galaxy-background">
      <Galaxy
        density={1}
        glowIntensity={0.35}
        flareIntensity={1}
        starSpeed={0.75}
        mouseRepulsion
        clickWarp
        starColors={[]}
        hueShift={140}
        saturation={0}
        starSize={1}
        twinkleIntensity={0.39}
        speed={0.65}
        rotationSpeed={0.03}
        layers={3}
        direction="backward"
        repulsionStrength={2}
        mouseInteraction
        intro
        lightMode={false}
        transparent={false}
        backgroundColor="#080611"
      />
    </div>
  );
}

export default GalaxyBackground;
