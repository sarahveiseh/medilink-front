interface IDropdownOption {
  children?: string | JSX | JSX.Element | Element | any
  onClick?: Function | MouseEventHandler<HTMLSpanElement>
  active?: boolean
  to?: string
}
