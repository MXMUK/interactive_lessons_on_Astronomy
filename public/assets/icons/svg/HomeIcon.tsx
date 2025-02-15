import React from 'react';

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      aria-label="Home"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24">
      <title>Home</title>
      <path
        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"></path>
    </svg>
  );
};

export default HomeIcon;
