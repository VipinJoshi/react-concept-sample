export function setSelectedLanguage(data) {
  // localStorage.setItem("language", data);
  return {
    type: "SELECTED_LANGUAGE",
    payload: data
  };
}
