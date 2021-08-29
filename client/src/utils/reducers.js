import { useReducer } from "react";
import { UPDATE_FIELDS, UPDATE_GAMES } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FIELDS:
      return {
        ...state,
        fields: [...action.fields],
      };

    case UPDATE_GAMES:
      return {
        ...state,
        games: [...action.games],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
