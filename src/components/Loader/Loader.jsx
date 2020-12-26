import React from "react";
import styles from "./Loader.module.css"
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {formActionCreators} from "../../redux/actions/actions";
import successImg from "../../res/images/Check-512.png"
import errorImg from "../../res/images/Close-512.png"
import {withRouter} from "react-router-dom"

class Loader extends React.Component {

    onHide = (onSuccess) => {
        if (onSuccess) {
            this.props.history.push("/")
        }
        this.props.resetFormFailure() && this.props.resetFormSuccess()
    }

    imgStyle = {
        width: 75 + "%",
        maxWidth: 50+"vw"
    }

    render() {
        return (
            <>
                <div className={`${styles.loaderBackdrop} ${!this.props.loading ? "d-none" : ""}`}>
                    <div className={styles.loader}/>
                </div>

                <Modal
                    onHide={()=>this.onHide(true)}
                    backdrop={true}
                    keyboard={false}
                    show={this.props.success && !this.props.error}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="row justify-content-center">
                            <img src={successImg} style={this.imgStyle} alt={"success"}/>
                            <h3 className="text-center py-3">
                                Заявка успешно отправлена
                            </h3>
                        </div>
                    </Modal.Body>
                    <div className="row justify-content-center py-3">
                        <button type="button" className="btn btn-success" onClick={()=>this.onHide(true)}>
                            Закрыть
                        </button>
                    </div>
                </Modal>

                <Modal
                    onHide={()=>this.onHide(false)}
                    backdrop={true}
                    keyboard={false}
                    show={this.props.error}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="row justify-content-center">
                            <img src={errorImg} style={this.imgStyle} className="col-12" alt={"error"}/>
                            <h3 className="text-center py-3 col-12">
                                Произошла ошибка
                            </h3>
                            <p className="py-0 my-0">
                                {this.props.errorMsg}
                            </p>
                        </div>
                    </Modal.Body>
                    <div className="row justify-content-center py-3">
                        <button type="button" className="btn btn-danger" onClick={()=>this.onHide(false)}>
                            Закрыть
                        </button>
                    </div>
                </Modal>
            </>
        )
    }

}

const mapStateToProps = ({form}) => {
    return {loading: form.loading, success: form.success, error: form.error, errorMsg: form.errorMsg}
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators(formActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Loader))