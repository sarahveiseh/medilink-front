import { ICWrapper } from "./wrapper";

export const ICPlus = ({ className, onClick }) => {
  return (
    <ICWrapper onClick={onClick} className={className}>
      <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
    </ICWrapper>
  );
};
