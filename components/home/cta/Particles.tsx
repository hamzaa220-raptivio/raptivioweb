"use client";

function seededRandom(seed: number) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

const particles = Array.from({ length: 60 }, (_, index) => ({
  size: seededRandom(index * 5 + 1) * 3 + 1,
  left: seededRandom(index * 5 + 2) * 100,
  top: seededRandom(index * 5 + 3) * 100,
  duration: 4 + seededRandom(index * 5 + 4) * 8,
  delay: seededRandom(index * 5 + 5) * 5,
}));

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((particle, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40 animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

    </div>
  );
}
