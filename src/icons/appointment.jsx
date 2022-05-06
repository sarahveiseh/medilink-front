import { ICWrapper } from "./wrapper";

export const ICAppointment = ({ className, onClick }) => {
  return (
    <ICWrapper onClick={onClick} className={className} viewPort="0 0 512 512">
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M422.268,21.113v-2.639C422.268,8.288,413.98,0,403.794,0H382.68c-10.186,0-18.474,8.288-18.474,18.474v2.639h-79.175    v-2.639C285.031,8.288,276.743,0,266.557,0h-21.113c-10.186,0-18.474,8.288-18.474,18.474v2.639h-79.175v-2.639    C147.794,8.288,139.506,0,129.32,0h-21.113C98.02,0,89.732,8.288,89.732,18.474v2.639H0V512h512V21.113H422.268z M380.041,18.474    c0-1.43,1.209-2.639,2.639-2.639h21.113c1.43,0,2.639,1.209,2.639,2.639V63.34h-26.392V18.474z M242.804,18.474    c0-1.43,1.209-2.639,2.639-2.639h21.113c1.43,0,2.639,1.209,2.639,2.639V63.34h-26.392V18.474z M105.567,18.474    c0-1.43,1.209-2.639,2.639-2.639h21.113c1.43,0,2.639,1.209,2.639,2.639V63.34h-26.392V18.474z M496.165,496.165H15.835V163.629    h480.33V496.165z M496.165,147.794H15.835v-26.392h424.907v-15.835H15.835V36.948h73.897v42.227h58.062V36.948h79.175v42.227    h58.062V36.948h79.175v42.227h58.062V36.948h73.897V147.794z" />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M248.082,184.742v68.619H36.948v221.691h332.536v-63.34h105.567V184.742H248.082z M142.515,459.216H52.784v-47.505h89.732    V459.216z M142.515,395.876H52.784v-58.062h89.732V395.876z M142.515,321.979H52.784v-52.784h89.732V321.979z M248.082,459.216    h-89.732v-47.505h89.732V459.216z M248.082,395.876h-89.732v-58.062h89.732V395.876z M248.082,321.979h-89.732v-52.784h89.732    V321.979z M353.649,459.216h-89.732v-47.505h89.732V459.216z M353.649,395.876h-89.732v-58.062h89.732V395.876z M353.649,321.979    h-89.732v-52.784h89.732V321.979z M353.649,253.361h-89.732v-52.784h89.732V253.361z M459.216,395.876h-89.732v-58.062h89.732    V395.876z M459.216,321.979h-89.732v-52.784h89.732V321.979z M459.216,253.361h-89.732v-52.784h89.732V253.361z" />
        </g>
      </g>
    </ICWrapper>
  );
};