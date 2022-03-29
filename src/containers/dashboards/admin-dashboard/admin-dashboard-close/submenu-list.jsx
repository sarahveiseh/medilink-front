import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SubmenuItem = styled.div`
  position: absolute;
  top: ${({ position }) => `${+position?.[1]}px`};
  left: ${({ position }) => `${80 + +position?.[0]}px`};

  min-width: 200px;
  border-radius: 5px;
  padding: 20px 10px 0 10px;
  background-color: transparent;
  z-index: 150 !important;
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  &:hover {
    display: block !important;
  }
`;

export const SubmenuList = ({ element, position, setElement }) => {
  return (
    <>
      <SubmenuItem
        className="scrollbar-hide"
        onMouseEnter={() => setElement(element)}
        onMouseLeave={() => setElement("")}
        isSelected={element !== ""}
        position={position}
      >
        <div
          onClick={() => setElement("")}
          className="w-full flex flex-col space-y-2 p-2 bg-gray-900 text-white rounded-[5px] overflow-y-auto scrollbar-hide"
        >
          {getSubMenuItems(element)}
        </div>
      </SubmenuItem>
    </>
  );
};

const LinkItem = ({ url, urlText }) => {
  const { pathname } = useLocation();

  const isDisabled = pathname === url;
  return (
    <Link className={`${isDisabled ? "pointer-events-none" : ""}`} to={url}>
      <div
        className={`rounded text-white hover:bg-gray-700 px-2 hover:cursor-pointer h-10 flex items-center ${
          isDisabled ? "bg-gray-700" : ""
        }`}
      >
        {urlText}
      </div>
    </Link>
  );
};

const getSubMenuItems = (menu) => {
  switch (menu) {
    case "doctors":
      return (
        <>
          <LinkItem url="/doctors" urlText="Doctors" />
        </>
      );
    case "patients":
      return (
        <>
          <LinkItem url="/patients" urlText="Patients" />
        </>
      );

    case "profile":
      return (
        <>
          <LinkItem url="/admin" urlText="Profile" />
        </>
      );
    default:
      return null;
  }
};
