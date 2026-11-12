
import Lanyard from "./Lanyard";
import "./Lanyard_overlay.css";

function LanyardOverlay() {
  return (

<div className="lanyard-overlay">
  <Lanyard frontImage="/id_lanyard/id_front.png" backImage="/id_lanyard/id_back.png" strapImage="/id_lanyard/id_logo.png"
  imageFit="contain"
  cardColor="#ffffff"
  orientation="portrait"
  finish="glossy"
  cornerRadius={0.3}
  size={0.62}
  anchor="center"
  strapLength={0.5}
  strapColor="#111111"
  strapWidth={0.65}
  metal="silver"
  gravity={1}
  damping={0.5}
  elasticity={0.5}
  breeze={0.5}
  interactive
  intro
/>
</div>
  );
}

export default LanyardOverlay;
