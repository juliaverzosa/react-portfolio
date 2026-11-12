
import { useEffect, useState } from "react";
import { Cloud } from "react-icon-cloud";

const cloudOptions = {
  clickToFront: 500,
  depth: 1,
  imageScale: 2,
  initial: [0.1, -0.1],
  outlineColour: "#0000",
  reverse: true,
  wheelZoom: false,
};

export function IconCloud({ images = [] }) {
  const [imagesReady, setImagesReady] = useState(false);
  const imageKey = images.join("|");

  useEffect(() => {
    let active = true;
    setImagesReady(false);

    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = resolve;
            image.src = src;
          })
      )
    ).then(() => {
      if (active) {
        setImagesReady(true);
      }
    });

    return () => {
      active = false;
    };
  }, [imageKey]);

  return (
    <div className="icon-cloud" aria-busy={!imagesReady}>
      {imagesReady && (
        <Cloud key={imageKey} options={cloudOptions}>
          {images.map((src, index) => (
            <a
              key={`${src}-${index}`}
              href={src}
              title={src.split("/").pop().replace(".svg", "")}
              onClick={(event) => event.preventDefault()}
            >
              <img
                src={src}
                alt=""
                width="50"
                height="50"
                loading="eager"
                decoding="async"
              />
            </a>
          ))}
        </Cloud>
      )}
    </div>
  );
}
