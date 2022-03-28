export const initialState = {
  // drawer: { open: false },
  drawer: { open: localStorage.getItem('drawer') == 'true' || false },
  dialog: { open: false, data: {}, type: null },
  toast: { open: false, type: null, title: null, description: null },
  dark: true,
}
