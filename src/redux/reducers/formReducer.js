import {formActions} from "../actions/actions"

const defaultState = {
    name: "",
    phone: "",
    email: "",
    comment: "",
    agree: false,
    captcha: ""
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
        default: {
            return state
        }
    }
}