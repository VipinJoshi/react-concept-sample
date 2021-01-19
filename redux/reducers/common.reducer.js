const initialState = "english";

export function setLanguage(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SELECTED_LANGUAGE":
      return payload;
    default:
      return state;
  }
}
