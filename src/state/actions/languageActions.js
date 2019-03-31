import {SET_LANGUAGE} from "state/actions/types";

export const setLanguage = languageObj => dispatch => {
    return dispatch({
        type: SET_LANGUAGE,
        payload: languageObj,
    });
};
