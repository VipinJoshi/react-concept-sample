import constants from "../../constant";

export function setSelectedLanguage(data) {
 // localStorage.setItem("language", data);
  return {
    type: constants.SELECTED_LANGUAGE,
    payload: data
  };
}


