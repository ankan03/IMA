import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useState, useEffect, useCallback, useRef } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import '../App.css'


const themeDialogBox = createMuiTheme({
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                maxWidth: '25vw',
            },
        },
        MuiPaper: {

            rounded: {
                width: '65vw',
                background: '#2A3E4C'
            },
        }
    },
});

const themeAddButton = createMuiTheme({
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: '#97A1A9',
                borderRadius: '10px',
                width: '5vw',
                color: 'white',
                fontSize: '10px',
            },
            outlined: {
                border: '1px solid #14AFF1',
                padding: '5px 5px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '10px',
            },
            root: {
                color: '#14AFF1',
                fontSize: '20px',

            },
            contained: {
                // color: '#14aff1',
                width: '4vw',
                fontSize: '10px',
            }
        },
        MuiIconButton: {
            root: {
                color: '#FFFFFF',
            }
        }
    },
});

const themeCancelButton = createMuiTheme({
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: '#97A1A9',
                borderRadius: '10px',
                width: '5vw',
                color: 'white',
                fontSize: '10px',
            },
            outlined: {
                border: '1px solid #14AFF1',
                padding: '5px 5px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '10px',
            },
            root: {
                color: '#14AFF1',
                fontSize: '20px',

            },
            textSizeSmall: {
                padding: '0px'
            },
            label: {
                marginTop: '15.5vh',
            }
        },
        MuiIconButton: {
            root: {
                color: '#FFFFFF',
            }
        }
    },
});

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        margin: '0px',

    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



function EditPopUp(props) {
    const classes = useStyles();
    const { docId, openPopupEdit, setOpenPopupEdit } = props;
    const [invoiceAmount, setinvoiceAmount] = useState(null)
    const [notes, setnotes] = useState(null)
    const [isSaveButtonPressed, setIsSaveButtonPressed] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const isMounted = useRef(true)

    const handleClickOpen = () => {
        setOpenPopupEdit(true);
    };

    const handleClose = () => {
        setOpenPopupEdit(false);
    };

    function fetchDataFromApi() {

        axios.post('http://localhost:8080/1828049/EditInvoiceDataServlet', {
            doc_id: docId,
            updated_amount: invoiceAmount,
            note: notes
        })
            .then((response) => {
                console.log(`EditPopUp Response ${response.data.message}`)
            }, (error) => {
                console.log(`EditPopUp Response ${error}`)
            });
    }

    const addClickHandeller = e => {


        if (invoiceAmount != null && notes != null) {
            setIsSaveButtonPressed(1)
        } else {
            e.preventDefault()
            alert(`Enter Values or go back`)
        }
    }

    const onReset = e => {
        setinvoiceAmount('')
        setnotes('')
    }

    return (
        <div>
            <ThemeProvider theme={themeDialogBox}>
                <Dialog open={openPopupEdit}>
                    <DialogTitle>
                        <Grid container>
                            <Grid item xs={11}>
                                <div color='#FFFFFF' >

                                    <span style={{ color: 'white' }}>Edit Invoice</span>
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <ThemeProvider theme={themeAddButton}>
                                    <IconButton aria-label="delete" onClick={handleClose} color="white">
                                        <CloseIcon />
                                    </IconButton>
                                </ThemeProvider>

                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent dividers>




                        <form onSubmit={addClickHandeller}>
                            <Grid container>
                                <Grid item xs={12} container>
                                    <Grid item xs={4}>
                                        <p className="add-moodle-tag">Invoice Amount</p>
                                        <p className="add-moodle-tag">Notes</p>
                                        {/* <ThemeProvider theme={themeCancelButton}>
                                            <Button size="small" className={classes.margin} onClick={handleClose} >
                                                Cancel
        </Button>
                                        </ThemeProvider> */}
                                    </Grid>

                                    <Grid item xs={8}>
                                        <input className="add-moodle-input" style={{ marginTop: '10px' }} value={invoiceAmount} name='INVOICE_AMOUNT' onChange={e => setinvoiceAmount(e.target.value)}></input>
                                        <textarea style={{ outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '14vw', height: '18vh', margin: '0.9vw 0.2vw 0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} name="comment" form="usrform" resize='none' value={notes} onChange={e => setnotes(e.target.value)}></textarea>

                                        <div style={{ marginTop: '10px' }}>
                                            {/* <ThemeProvider theme={themeAddButton}>
                                                <Button variant="outlined" className={classes.margin} onClick={() => onReset()} style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: '5vw', marginRight: '1.25vw' }}>
                                                    Clear
                                                </Button>
                                                <Button variant="contained" className={classes.margin} type='submit' onClick={() => fetchDataFromApi()} style={{ background: '#14AFF1', borderRadius: '10px' }}>
                                                    Save
                                                </Button>
                                            </ThemeProvider> */}
                                        </div>



                                    </Grid>

                                    {/* <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                
                                    <label style={{ display: 'inline', maxWidth: '18vw', marginRight: '3vw' }}>
                                        <span>Invoice Amount</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>
                                    <input style={{ border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '3vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} className="customInput" value={invoiceAmount} name='INVOICE_AMOUNT' onChange={e => setinvoiceAmount(e.target.value)}></input>
                                </div>

                                <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                    <label style={{ display: 'block', maxWidth: '10vw', marginRight: '2vw' }}>
                                        Notes
                                        
                                    </label>
                                    <textarea style={{ border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '19vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} name="comment" form="usrform" resize='none' value={notes} onChange={e => setnotes(e.target.value)}></textarea>
                                </div> */}
                                    {/* <ThemeProvider theme={themeAddButton}>
                                        <Button size="small" className={classes.margin} onClick={handleClose} >
                                            Cancel
        </Button>
                                    </ThemeProvider>

                                    <ThemeProvider theme={themeAddButton}>
                                        <Button variant="outlined" className={classes.margin} onClick={() => onReset()}>
                                            Clear
</Button>
                                        <Button variant="contained" className={classes.margin} type='submit' onClick={() => fetchDataFromApi()}>
                                            Save
        </Button>
                                    </ThemeProvider> */}


                                </Grid>



                            </Grid>

                            <ThemeProvider theme={themeAddButton}>
                                <Button size="small" className={classes.margin} onClick={handleClose} >
                                    Cancel
        </Button>
                            </ThemeProvider>

                            <ThemeProvider theme={themeAddButton}>
                                <Button style={{ marginLeft: '8vw', marginRight: '1.1vw' }} variant="outlined" className={classes.margin} onClick={() => onReset()}>
                                    Clear
</Button>
                                <Button variant="contained" className={classes.margin} type='submit' onClick={() => fetchDataFromApi()} style={{ borderRadius: '10px', backgroundColor: '#14AFF1' }}>
                                    Save
        </Button>
                            </ThemeProvider>
                        </form>

                    </DialogContent>
                </Dialog>
            </ThemeProvider>

        </div>
    )
}

export default EditPopUp
