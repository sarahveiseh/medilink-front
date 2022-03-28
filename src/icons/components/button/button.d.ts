interface IButton {
  className?: string
  onClick?: any
  children?: any
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  role?: string
  id?: string
  icon?: boolean
  loading?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
  dragHandleProps?: any
  tooltip?: string
}
