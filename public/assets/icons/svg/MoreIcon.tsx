import React from 'react';

const MoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      aria-label="More"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24">
      <title>More</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};

export default MoreIcon;
