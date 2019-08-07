import React from "react";
import ReactDOM from "react-dom";
import Scrollbar from "react-perfect-scrollbar";

const Modal = props => {
    console.log(props);

    return ReactDOM.createPortal(
        <div onClick={props.onClose} style={style.modalScreen}>
            <Scrollbar>
                <div onClick={e => e.stopPropagation()}>{props.children}</div>
            </Scrollbar>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;

const style = {
    modalScreen: {
        background: "#717174",
        position: "fixed",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        opacity: 0.9,
        zIndex: 50
    },
    dialog: {
        background: " #fff",
        position: "fixed",
        padding: "12px",
        // top: "20%",
        // left: "50%",
        zIndex: 10000,
        borderRadius: "5px",
        boxShadow: "0, 0, 8px, #111"
    }
};

<Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    onClose={this.handleClose}
    open={this.state.open}
>
    {/* <PerfectScrollbar onClick={this.handleClose}> */}
    <div className={classes.modal}>
        <div className={classes.top}>
            <div className={classes.btnComplete}>Complete</div>
            <div className={classes.closeIcon} onClick={this.handleClose}>
                <CloseIcon />
            </div>
        </div>
        <div className={classes.bottom}>
            <div className={classes.left}>
                <div className={classes.taskName}>Hello</div>
                <div className={classes.taskDesc}>This task has no notes.</div>
                <div
                    style={{
                        paddingLeft: "15px",
                        fontSize: "14px",
                        color: "#007bff",
                        height: "32px",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <div
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 500
                        }}
                    >
                        <AddIcon
                            style={{
                                width: "20px",
                                height: "20px"
                            }}
                        />
                        <div style={{ paddingLeft: "5px" }}>
                            Add Checklist Item
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        paddingLeft: "15px",
                        margin: "10px 0 5px",
                        fontSize: "14px",
                        color: "#007bff",
                        height: "32px",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <div
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 500
                        }}
                    >
                        <AddIcon
                            style={{
                                width: "20px",
                                height: "20px"
                            }}
                        />
                        <div style={{ paddingLeft: "5px" }}>Add Attachment</div>
                    </div>
                </div>

                <Activity />
                {/* <Modal
                                onClose={() =>
                                    alert("somone click outside content area")
                                }
                            >
                                <div>Hii there</div>
                            </Modal> */}
            </div>
            <div className={classes.right}>
                <TaskExtra handleDateChange={this.handleDateChange} />
                <TastCreation />
            </div>
        </div>
    </div>
    {/* </PerfectScrollbar> */}
</Modal>;
