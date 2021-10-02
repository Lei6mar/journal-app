import { types } from "../types/types";


export const setError = (err) => ({
  types: types.uiSetError,
  payload: err
})

export const removeError = () => {
  type: types.uiRemoveError
}