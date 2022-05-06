import { ICWrapper } from "./wrapper";

export const ICDoctor = ({ className, onClick }) => {
  return (
    <ICWrapper onClick={onClick} className={className} viewPort="0 0 60 60">
      <g xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5,31c-4.072,0-7.436,3.06-7.931,7H27.5v-6.125c1.04-0.259,1.939-0.918,2.506-1.873l12.92-21.851   c0.756-1.275,0.769-2.806,0.035-4.094S40.904,2,39.421,2h-2.272C36.585,0.822,35.391,0,34,0c-1.596,0-5.5,1.227-5.5,3.5   S32.404,7,34,7c1.758,0,3.204-1.308,3.449-3h1.971c0.755,0,1.429,0.392,1.802,1.048c0.374,0.655,0.367,1.435-0.018,2.085   l-12.92,21.851C27.907,29.62,27.24,30,26.5,30s-1.407-0.38-1.791-1.026L11.428,7.132c-0.385-0.649-0.392-1.429-0.018-2.084   C11.784,4.392,12.458,4,13.212,4h2.338C15.796,5.692,17.242,7,19,7c1.596,0,5.5-1.227,5.5-3.5S20.596,0,19,0   c-1.391,0-2.585,0.822-3.149,2h-2.639c-1.483,0-2.806,0.77-3.54,2.058S8.951,6.876,9.713,8.161l13.282,21.842   c0.566,0.955,1.465,1.613,2.505,1.872V38h-9c-6.065,0-11,4.935-11,11s4.935,11,11,11s11-4.935,11-11v-9h11.069   c0.495,3.94,3.859,7,7.931,7c4.411,0,8-3.589,8-8S50.911,31,46.5,31z M34,5c-1.234,0-3.358-0.989-3.498-1.5   C30.642,2.989,32.766,2,34,2c0.827,0,1.5,0.673,1.5,1.5S34.827,5,34,5z M19,2c1.234,0,3.358,0.989,3.498,1.5   C22.358,4.011,20.234,5,19,5c-0.827,0-1.5-0.673-1.5-1.5S18.173,2,19,2z M25.5,49c0,4.963-4.038,9-9,9s-9-4.037-9-9s4.038-9,9-9h9   V49z M46.5,45c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S49.809,45,46.5,45z" />
        <path d="M46.5,35c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S48.706,35,46.5,35z M46.5,41c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S47.603,41,46.5,41z" />
      </g>
    </ICWrapper>
  );
};