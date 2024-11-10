import { SVGProps } from "react";

const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 25.77L26.18 29.5L24.54 22.47L30 17.74L22.81 17.13L20 10.5L17.19 17.13L10 17.74L15.46 22.47L13.82 29.5L20 25.77Z"
        fill="#FBB1B0"
      />
    </svg>
  );
};

export default StarIcon;
