
import { useEffect, useRef } from "react";

const starColors = [
  "#ffffff",
  "#f8fbff",
  "#fffdf2",
  "#fff5e8",
  "#eef7ff",
  "#fff0f8",
];

const createStars = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${count}-${index}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    glow: Math.random() < 0.16,
    color: starColors[Math.floor(Math.random() * starColors.length)],
  }));

const starLayers = [
  { id: "stars-tiny", count: 180 },
  { id: "stars-small", count: 180 },
  { id: "stars-medium", count: 90 },
  { id: "stars-large", count: 36 },
  { id: "stars-bright", count: 16 },
];

const shadows = starLayers.map((layer) => ({
  ...layer,
  stars: createStars(layer.count),
}));

function StarBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!background || reducedMotion) {
      return undefined;
    }

    const pointer = { x: 0, y: 0, active: false };
    let burst = null;
    let frame = 0;
    const stars = Array.from(background.querySelectorAll(".star-dot"), (star) => ({
      element: star,
      xPercent: Number(star.dataset.x),
      yPercent: Number(star.dataset.y),
    }));

    const updateStars = () => {
      stars.forEach((star) => {
        const {
          element,
          xPercent,
          yPercent,
        } = star;
        const x = xPercent * window.innerWidth / 100;
        const y = yPercent * window.innerHeight / 100;
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distanceSquared = dx * dx + dy * dy;
        const radius = 220;
        const influence = pointer.active
          ? Math.max(0, 1 - Math.sqrt(distanceSquared) / radius) ** 2
          : 0;
        const distance = Math.sqrt(distanceSquared);
        const directionX = distance ? dx / distance : 0;
        const directionY = distance ? dy / distance : 0;

        let offsetX = directionX * influence * 52;
        let offsetY = directionY * influence * 52;

        if (burst) {
          const burstDistance = Math.hypot(
            x - burst.x,
            y - burst.y
          );
          const burstInfluence = Math.max(
            0,
            1 - burstDistance / burst.radius
          ) ** 2;
          const burstDirectionX = burstDistance
            ? (x - burst.x) / burstDistance
            : 0;
          const burstDirectionY = burstDistance
            ? (y - burst.y) / burstDistance
            : 0;

          offsetX += burstDirectionX * burstInfluence * burst.strength;
          offsetY += burstDirectionY * burstInfluence * burst.strength;
        }

        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      if (burst) {
        burst.strength *= 0.93;
        if (burst.strength < 0.2) {
          burst = null;
        }
      }

      frame = burst || pointer.active ? window.requestAnimationFrame(updateStars) : 0;
    };

    const wake = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateStars);
      }
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      wake();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      wake();
    };

    const handleClick = (event) => {
      burst = {
        x: event.clientX,
        y: event.clientY,
        radius: 320,
        strength: 90,
      };
      wake();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("click", handleClick);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div ref={backgroundRef} className="star-background" aria-hidden="true">
      {shadows.map((layer) => (
        <div
          key={layer.id}
          className={`star-layer ${layer.id}`}
        >
          {layer.stars.map((star) => (
            <span
              key={star.id}
              className={`star-dot ${star.glow ? "star-dot-glow" : ""}`}
              data-x={star.x}
              data-y={star.y}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                "--star-tint": star.color,
                "--twinkle-duration": `${2.2 + Math.random() * 3.8}s`,
                "--twinkle-delay": `${Math.random() * -5}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default StarBackground;
