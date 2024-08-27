import React from 'react';
import seedrandom from 'seedrandom';
import chroma from 'chroma-js';

interface VaultProp {
  id: string;
}

const generateColor = (seed: string) => {
  const rng = seedrandom(seed);
  const hue = rng() * 360;
  const saturation = 0.5 + rng() * 0.1; // saturation between 0.5 and 1
  const lightness = 0.4 + rng() * 0.4; // lightness between 0.4 and 0.8
  return chroma.hsl(hue, saturation, lightness).hex();
};

const Vault: React.FC<VaultProp> = ({ id }) => {
  const color = generateColor(id);

  return (
    <div
      className="size-48 hover:w-64 rounded-3xl overflow-hidden flex flex-col justify-end items-end transition-all duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="w-full h-[80%] hover:h-full bg-black opacity-50 rounded-3xl ease-in-out transition-all duration-300"></div>
    </div>
  );
};

export default Vault;