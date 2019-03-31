import {SET_LANGUAGE} from "state/actions/types";

const initialState = {
    language: navigator.language.substr(0, 2),
    rtl: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload.language,
                rtl: action.payload.rtl,
            };

        default:
            return state;
    }
}
