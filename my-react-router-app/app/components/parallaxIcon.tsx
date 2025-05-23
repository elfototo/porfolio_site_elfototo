import { useEffect, useState } from "react";

export default function ParallaxIcon({
  src,
  speed = 20,
  className = "",
}: {
  src: string;
  speed: number;
  className: string;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <img
        src={src}
        alt="Parallax Icon"
        className={`absolute z-20 ${className}`}
        style={{
          transform: `translateY(${offset * (speed / 100)}px) scale(${
            1 + offset / 10000
          }) rotate(${offset / 40}deg)`,
          transition: "transform 0.1s ease-out, opacity 0.3s ease",
          filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))",
        }}
      />
    </>
  );
}
