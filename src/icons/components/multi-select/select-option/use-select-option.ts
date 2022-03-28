import { useCallback } from 'react'

export const useSelectOption = ({ state }) => {
  return {
    handleChange: useCallback(
      ({ value, onChange }) => {
        const existed =
          state === null
            ? false
            : state !== undefined &&
              state.length &&
              state.some((item) => item === value)
        const payload =
          state === null
            ? [value]
            : state !== undefined
            ? existed
              ? [...state.filter((item) => item !== value)]
              : [...state, value]
            : [value]
        onChange(payload)
      },
      [state]
    ),
  }
}
