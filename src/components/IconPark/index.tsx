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

export const PauseIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12V36"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M32 12V36"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const NextIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 12L26 24L14 36"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M34 12V36"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const PreIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34 36L22 24L34 12"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M14 12V36"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShuffleIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 33L44 37L40 41"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M40 7L44 11L40 15"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
    />
    <path
      d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
    />
  </svg>
);

export const PlayOnceIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M38 7L44 13L38 19"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M24 19V31"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M24 19L21 22L19.5 23.5"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlayCycleIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 25C4 18.3502 9.39624 13 16 13H44"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M38 7L44 13L38 19"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M44 23C44 29.6498 38.6038 35 32 35H4"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M10 41L4 35L10 29"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const DownIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36 18L24 30L12 18"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UpIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 30L25 18L37 30"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const XIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14L34 34"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 34L34 14"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RightIcon = ({ width, height, color }: IconType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12L31 24L19 36"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);
