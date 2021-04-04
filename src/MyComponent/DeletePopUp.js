import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useState, useEffect, useCallback, useRef } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import '../App.css'


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        backgroundColor: '#2A3F4D 0% 0% no-repeat padding-box',
    },
}))(MuiDialogActions);


const themeDeleteDialogBox = createMuiTheme({
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                hover: {
                    border: '1px solid green',
                    backgroundColor: 'yellow',
                },
                color: 'white',
                borderColor: '#14AFF1',
                borderRadius: '10px',
            },
            contained: {
                backgroundColor: 'red',
                borderRadius: '10px',
            }
        },

        MuiDialogActions: {
            spacing: {
                backgroundColor: 'green',
            },
        }
    },

});


function DeletePopUp(props) {
    const { checkList, openPopupDelete, setOpenPopupDelete } = props;
    const [deleteButtonPress, setDeleteButtonPress] = useState(0)


    const handleClickOpen = () => {
        setOpenPopupDelete(true);
    };
    const handleClose = () => {
        setOpenPopupDelete(false);
    };

    function fetchDataFromApi() {
        // const myArray = ['1', '2', '3', '4', '5']
        axios.post('http://localhost:8080/1828049/DeleteInvoiceDataServlet', {
            // doc_id: docId,
            arr: checkList
        })
            .then((response) => {
                console.log(`DeletePopUp Response ${response.data.message}`)
                handleClose()
            }, (error) => {
                console.log(`DeletePopUp Response ${error}`)
                handleClose()
            });
    }

    const deleteClickHandeller = e => {
        fetchDataFromApi()
    }

    return (
        <div>
            <ThemeProvider theme={themeDeleteDialogBox}>
                <Dialog
                    onClose={handleClose}
                    open={openPopupDelete}>

                    <DialogTitle id="dialog" onClose={handleClose}>
                        Delete record(s)?
          </DialogTitle>
                    <DialogContent dividers id="dialog">
                        <Typography gutterBottom>
                            You'll lose your record(s) after this action. We can't recover them once you delete.
            </Typography>
                        <Typography gutterBottom>
                            Are you sure you want to <text id="tex">permanently delete</text> them?
            </Typography>
                    </DialogContent>
                    <DialogActions dividers id="dialog">
                        <Button autoFocus onClick={handleClose} color="primary" variant="outlined" style={{ textTransform: 'none' }}>
                            Cancel
            </Button>
                        {/* <Button type='submit' autoFocus onClick={() => fetchDataFromApi()} color="primary" variant="contained" style={{ textTransform: 'none', backgroundColor: '#14AFF1' }}>
                            Delete
            </Button> */}
                        <form onSubmit={deleteClickHandeller}>
                            <Button type='submit' autoFocus color="primary" variant="contained" style={{ textTransform: 'none', backgroundColor: '#14AFF1' }}>
                                Delete
            </Button>
                        </form>

                    </DialogActions>
                </Dialog>
            </ThemeProvider>

        </div >
    )
}

export default DeletePopUp

