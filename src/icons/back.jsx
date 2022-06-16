import { ICWrapper } from "./wrapper";

export const ICBack = ({ className, onClick, role, id }) => {
  return (
    <ICWrapper
      viewPort="0 0 72 72"
      className={className}
      onClick={onClick}
      role={role}
      id={id}>
      <g xmlns="http://www.w3.org/2000/svg" id="line">
        <polyline
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          points="46.8146,33.4278 55,25.2139 46.8146,17"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M32.3288,54.4975c-8.0865,0-14.6418-6.5554-14.6418-14.6418s6.5554-14.6418,14.6418-14.6418h21.7298"
        />
      </g>
    </ICWrapper>
  );
};
