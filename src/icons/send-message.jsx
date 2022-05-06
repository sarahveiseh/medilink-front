import { ICWrapper } from "./wrapper";

export const ICSendMessage = ({ className, onClick, ...rest }) => {
  return (
    <ICWrapper onClick={onClick} className={className} {...rest}>
      <path
        d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
        fill="#0C59CD"
      />
      <path
        d="M24.2764 11.0528C24.4472 10.9674 24.6517 10.9867 24.8035 11.1026C24.9552 11.2186 25.0277 11.4108 24.9903 11.5981L23.5874 16.4478C23.534 16.6325 23.3793 16.7702 23.1897 16.802L17.5 17.7549C17.232 17.8084 17.232 18.1915 17.5 18.2451L23.1897 19.198C23.3793 19.2298 23.534 19.3675 23.5874 19.5522L24.9903 24.4019C25.0277 24.5892 24.9552 24.7814 24.8035 24.8974C24.6517 25.0133 24.4472 25.0326 24.2764 24.9472L11.2764 18.4472C11.107 18.3625 11 18.1894 11 18C11 17.8106 11.107 17.6375 11.2764 17.5528L24.2764 11.0528Z"
        fill="white"
      />
    </ICWrapper>
  );
};