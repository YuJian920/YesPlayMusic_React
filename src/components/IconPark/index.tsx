import type { IconType } from "./type";

export const PlayIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z"
      fill={color}
      stroke={color}
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

export const LikeIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
      // fill={color}
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MoreIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="24" r="3" fill={color} />
    <circle cx="24" cy="24" r="3" fill={color} />
    <circle cx="36" cy="24" r="3" fill={color} />
  </svg>
);
