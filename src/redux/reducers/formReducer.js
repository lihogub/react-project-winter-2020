import {formActions} from "../actions/actions"

const defaultState = {
    name: "",
    phone: "",
    email: "",
    comment: "",
    captcha: "",
    agree: false,
    loading: false,
    error: false,
    errorMsg: "",
    captchaSiteKey: "6LclJRQaAAAAAKhXKoqcXGAatHECHoN9xuYsytzk"
}

export function formReducer(state = defaultState, action) {
    const {type, payload} = action
    switch (type) {
        case (formActions.FORM_NAME_SET): {
            return {...state, ...payload}
        }
        case (formActions.FORM_PHONE_SET): {
            return {...state, ...payload}
        }
        case (formActions.FORM_EMAIL_SET): {
            return {...state, ...payload}
        }
        case (formActions.FORM_COMMENT_SET): {
            return {...state, ...payload}
        }
        case (formActions.FORM_AGREE_SET): {
            return {...state, ...payload}
        }
        case (formActions.FORM_CAPTCHA_SET): {
            return {...state, ...payload}
        }
        case (formActions.FORM_SEND_STARTED): {
            return {...state, loading: true}
        }
        case (formActions.FORM_SEND_SUCCESS): {
            return {...state, loading: false}
        }
        case (formActions.FORM_SEND_FAILURE): {
            return {...state, loading: false, error: true, ...payload}
        }
        default: {
            return state
        }
    }
}