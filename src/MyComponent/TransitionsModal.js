import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

const StyledButtonHollow = withStyles({
    root: {
        border: '1px solid #14AFF1',
        borderRadius: 7,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 0.9vw',
        margin: '0.3vw 0.6vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const StyledButtonSolid = withStyles({
    root: {
        background: 'linear-gradient(45deg, #14AFF1 30%, #14AFF1 90%)',
        borderRadius: 7,
        border: 0,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 1.2vw',
        margin: '0.3vw 0.3vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#283A46',
        fontSize: '1vw',
        width: '20vw',
        padding: '10px 12px',
        float: 'right',
        color: 'white',
    },
}))(InputBase);

const StyledTextField = withStyles({
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#283A46',
        border: '1px solid #356680',
        fontSize: '1vw',
        width: '16vw',
        padding: '10px 12px',
        float: 'right',
        color: 'white',
        marginLeft: '2vw'
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        minWidth: '30vw',
        borderRadius: '8px'
    },
    paper: {
        backgroundColor: '#2A3E4C',
        border: '0px solid #000',
        boxShadow: theme.shadows[5],
        borderRadius: '8px'
    },
    head: {
        color: 'white',
        borderBottom: '1px solid black',
        fontSize: '1.5vw',
        height: '5vh',
        padding: '1vw 1.6vw'
    },
    body: {
        height: '35vh',
        padding: '1vw 1.6vw'

    },
    tail: {
        borderTop: '1px solid black',
        height: '5vh',
        padding: '1vw 0.6vw'
    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <span>
            <StyledButtonHollow onClick={handleOpen}><CreateIcon style={{ fontSize: '1.2vw' }} />&nbsp;Edit</StyledButtonHollow>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.head}>
                            Edit Invoice
                <CloseIcon style={{ float: 'right' }} />
                        </div>
                        <div className={classes.body}>
                            <div style={{ paddingBottom: '1.5vw' }}>
                                <span style={{ marginRight: '3vw' }} className="grey font20">Invoice Amount</span>
                                <BootstrapInput defaultValue="$1000.00" id="bootstrap-input" />
                            </div>
                            <div>
                                <span className="grey font20">Notes</span>
                                <StyledTextField
                                    style={{ float: 'right', color: 'white' }}
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                        <div className={classes.tail}>
                            <span><StyledButtonHollow style={{ float: 'left', border: 'none', color: '#14AFF1', pointer: 'cursor' }}>Cancel</StyledButtonHollow></span>
                            <span style={{ float: 'right' }}><StyledButtonSolid>Save</StyledButtonSolid></span>
                            <span style={{ float: 'right' }}><StyledButtonHollow>Reset</StyledButtonHollow></span>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </span>
    );
}