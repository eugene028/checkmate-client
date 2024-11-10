import { SVGProps } from "react";

const RightArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M25 30L15 20L25 10" stroke="#FC6678" stroke-width="2" />
    </svg>
  );
};

export default RightArrow;
