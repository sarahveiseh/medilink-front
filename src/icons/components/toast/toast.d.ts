interface IToast {
  type?: 'error' | 'success'
  title?: string
  description?: string
  children?: any
  open?: boolean
  close?: any
}
