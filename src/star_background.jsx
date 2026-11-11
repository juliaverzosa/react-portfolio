
const createStars = (count) =>
  Array.from({ length: count }, () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    return `${x}vw ${y}vh 0 var(--star-color)`;
  }).join(", ");

const starLayers = [
  { id: "stars-small", count: 180 },
  { id: "stars-medium", count: 80 },
  { id: "stars-large", count: 30 },
];

const shadows = starLayers.map((layer) => ({
  ...layer,
  shadows: createStars(layer.count),
}));

function StarBackground() {
  return (
    <div className="star-background" aria-hidden="true">
      {shadows.map((layer) => (
        <div
          key={layer.id}
          className={`star-layer ${layer.id}`}
          style={{ "--star-shadows": layer.shadows }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
