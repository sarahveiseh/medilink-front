interface IModal {
  size?: "sm" | "md" | "lg" | "xl";
  children?: any;
  onClose?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  id?: string;
  role?: string;
  slot?: string;
  header?: string;
  withHeader?: boolean;
}
