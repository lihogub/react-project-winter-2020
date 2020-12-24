export const formActions = {
    FORM_NAME_SET: "FORM_NAME_SET",
    FORM_PHONE_SET: "FORM_PHONE_SET",
    FORM_EMAIL_SET: "FORM_EMAIL_SET",
    FORM_COMMENT_SET: "FORM_COMMENT_SET",
    FORM_AGREE_SET: "FORM_AGREE_SET",
    FORM_CAPTCHA_SET: "FORM_CAPTCHA_SET"
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
    }
}