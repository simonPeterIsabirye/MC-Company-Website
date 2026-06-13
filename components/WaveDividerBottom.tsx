import React from 'react';

export default function WaveDividerBottom() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-24 lg:h-32 fill-[#03091B]"
      >
        <path d="M0,120 L0,0 C480,0 960,120 1440,0 L1440,120 Z" />
      </svg>
    </div>
  );
}
