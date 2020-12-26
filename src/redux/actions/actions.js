import axios from "axios";

const submitFormAddress = "https://react-warriors-rest-api.herokuapp.com/submit"

export const formActions = {
    FORM_NAME_SET: "FORM_NAME_SET",
    FORM_PHONE_SET: "FORM_PHONE_SET",
    FORM_EMAIL_SET: "FORM_EMAIL_SET",
    FORM_COMMENT_SET: "FORM_COMMENT_SET",
    FORM_AGREE_SET: "FORM_AGREE_SET",
    FORM_CAPTCHA_SET: "FORM_CAPTCHA_SET",
    FORM_SEND_STARTED: "FORM_SEND_STARTED",
    FORM_SEND_SUCCESS: "FORM_SEND_SUCCESS",
    FORM_SEND_FAILURE: "FORM_SEND_FAILURE",
    FORM_SUCCESS_RESET: "FORM_SUCCESS_RESET",
    FORM_FAILURE_RESET: "FORM_FAILURE_RESET"
}

export const formActionCreators = {
    setFormName(name) {
        return {type: formActions.FORM_NAME_SET, payload: {name}}
    },
    setFormPhone(phone) {
        return {type: formActions.FORM_PHONE_SET, payload: {phone}}
    },
    setFormEmail(email) {
        return {type: formActions.FORM_EMAIL_SET, payload: {email}}
    },
    setFormComment(comment) {
        return {type: formActions.FORM_COMMENT_SET, payload: {comment}}
    },
    setFormAgree(agree) {
        return {type: formActions.FORM_AGREE_SET, payload: {agree}}
    },
    setFormCaptcha(captcha) {
        return {type: formActions.FORM_CAPTCHA_SET, payload: {captcha}}
    },
    resetFormFailure() {
        return {type: formActions.FORM_FAILURE_RESET}
    },
    resetFormSuccess() {
        return {type: formActions.FORM_SUCCESS_RESET}
    },
    formSendStarted() {
        return {type: formActions.FORM_SEND_STARTED}
    },
    formSendSuccess() {
        return {type: formActions.FORM_SEND_SUCCESS}
    },
    formSendFailure(errorMsg) {
        return {type: formActions.FORM_SEND_FAILURE, payload: {errorMsg}}
    },
    sendForm() {
        return function (dispatch, getState) {
            dispatch(formActionCreators.formSendStarted())
            const payload = {
                name: getState().form.name,
                email: getState().form.email,
                phone: getState().form.phone,
                comment: getState().form.comment,
                captcha: getState().form.captcha
            }
            axios.post(submitFormAddress, payload)
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        dispatch(formActionCreators.formSendSuccess())
                    } else {
                        dispatch(formActionCreators.formSendFailure(res.data.error || "Unknown error"))
                    }
                })
                .catch(error => {
                    dispatch(formActionCreators.formSendFailure("Network error"))
                })
        }
    }
}