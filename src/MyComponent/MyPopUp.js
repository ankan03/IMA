import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import '../App.css'


const themeDialogBox = createMuiTheme({
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                maxWidth: '66vw',
            },
        },
        MuiPaper: {

            rounded: {
                width: '75vw',
                background: '#2A3E4C'
            },
        }
    },
});

const themeDatePicker = createMuiTheme({
    overrides: {
        MuiPopover: {
            paper: {
                outline: '0',
                position: 'absolute',
                maxWidth: 'calc(19% - 0px)',
                minWidth: '16px',
                maxHeight: 'calc(119% - 108px)',
                minHeight: '21px',
                overflowX: 'hidden',
                overflowY: 'auto',
                marginBlockStart: '1px',
                marginLeft: '35px',
            },
            root: {
                color: '#356680',
            },
            rounded: {
                borderRadius: '10px',
            }
        },
        MuiPickersCalenda: {
            week: {
                display: 'flex',
                justifyContent: 'center',
                background: '#223746',
            }
        },
        MuiPickersBasePicker: {
            pickerView: {
                display: 'flex',
                maxWidth: '355px',
                minWidth: '274px',
                minHeight: '305px',
                overflowX: 'hidden',
                flexDirection: 'column',
                justifyContent: 'center',
            }
        },
        MuiPaper: {

            rounded: {
                width: '75vw',
                background: '#2A3E4C'
            },
            root: {
                color: 'white',
                backgroundColor: '#bd0a0a',
            }
        },

        MuiIconButton: {
            root: {
                flex: '0 0 auto',
                color: 'white',
                padding: '12px',
                overflow: 'visible',
                fontSize: '1.5rem',
                textAlign: 'center',
                borderRadius: '50%',
            }
        },
        MuiButtonBase: {
            root: {
                color: 'white'
            }
        },
        MuiPickersDay: {
            daySelected: {
                color: '#fff',
                fontWeight: '500',
                backgroundColor: '#14AFF1',
            },
            day: {
                color: '#97A1A9'
            }
        },
        MuiPickersCalendarHeader: {
            iconButton: {
                backgroundColor: '#223746',
            },
            dayLabel: {
                color: '#97A1A9',
                width: '36px',
                margin: '0 2px',
                textAlign: 'center',
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: '4.5px 10px',
                width: '12vw',
                height: '4vh',
                // marginBottom: '15px',
                // padding: '2px',
            },
            adornedEnd: {
                paddingRight: '14px',
                color: 'white',
            },
            root: {
                position: 'relative',
                borderRadius: '10px',
                marginTop: '10px'
            }
        },
        MuiInputBase: {
            root: {
                color: 'white'
            }
        },
        // MuiOutlinedInput: {
        //     root: {
        //         position: 'relative',
        //         borderRadius: '10px',
        //     }
        // }


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
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



function MyPopUp(props) {
    const classes = useStyles();
    const { title, children, openPopup, setOpenPopup } = props;
    const [customerName, setcustomerName] = useState(null)
    const [customerNo, setcustomerNo] = useState(null)
    const [invoiceNo, setinvoiceNo] = useState(null)
    const [invoiceAmount, setinvoiceAmount] = useState(null)
    const [dueDate, setdueDate] = useState(null)
    const [notes, setnotes] = useState(null)
    const [isAddButtonPressed, setIsAddButtonPressed] = useState(0)


    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(convert(date));
        console.log(`Date = ${selectedDate}`)
    };

    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    const handleClickOpen = () => {
        setOpenPopup(true);
    };

    const handleClose = () => {
        setOpenPopup(false);
    };

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/1828049/AddInvoiceDataServlet`,{
    //         params: {
    //             customer_name: customerName,
    //             customer_no:customerNo,
    //             invoice_no: invoiceNo,
    //             invoice_amount: invoiceAmount,
    //             due_date:dueDate,
    //             notes:notes
    //         }
    //       })
    //         .then(response => {
    //             console.log(response)
    //             // setPost(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }, [isAddButtonPressed])

    function apiCall() {
        axios.get(`http://localhost:8080/1828049/AddInvoiceDataServlet`, {
            params: {
                customer_name: customerName,
                customer_no: customerNo,
                invoice_no: invoiceNo,
                invoice_amount: invoiceAmount,
                due_date: selectedDate,
                notes: notes
            }
        })
            .then(response => {
                console.log(`AddInvoiceDataServlet ${response}`)
                // setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addClickHandeller = e => {
        if (customerName != null && customerNo != null && invoiceAmount != null && invoiceNo != null && selectedDate != null) {
            apiCall()
        } else {
            e.preventDefault()
            alert(`Enter mandatoryvalues`)
        }





    }

    const onReset = e => {
        setcustomerName('')
        setcustomerNo('')
        setinvoiceAmount('')
        setinvoiceAmount('')
        setinvoiceNo('')
        setdueDate('')
        setnotes('')
    }


    return (
        <div>
            <ThemeProvider theme={themeDialogBox}>
                <Dialog open={openPopup}>
                    <DialogTitle>
                        <Grid container>
                            <Grid item xs={11}>
                                <div color='#FFFFFF' >

                                    <span style={{ color: 'white' }}>Add Invoice</span>
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
                                <Grid item xs={6} container>
                                    <Grid item xs={4}>
                                        {/* <label >
                                        <span>Customer Name</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label> */}

                                        <p className="add-moodle-tag">Customer Name<span style={{ color: 'red', fontSize: '15px' }}>*</span></p>
                                        <p className="add-moodle-tag">Customer No.<span style={{ color: 'red', fontSize: '15px' }}>*</span></p>
                                        <p className="add-moodle-tag">Invoice No.<span style={{ color: 'red', fontSize: '15px' }}>*</span></p>
                                        <p className="add-moodle-tag">Invoice Amount<span style={{ color: 'red', fontSize: '15px' }}>*</span></p>
                                        <ThemeProvider theme={themeAddButton}>
                                            <Button size="small" className={classes.margin} onClick={handleClose} >
                                                Cancel
        </Button>
                                        </ThemeProvider>

                                        {/* <label >
                                        <span>Customer No.</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>

                                    <label >
                                        <span>Invoice No.</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>

                                    <label >
                                        <span>Invoice Amount</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label> */}

                                    </Grid>
                                    <Grid item xs={8} style={{ marginTop: '1vh' }}>
                                        <input className="add-moodle-input" value={customerName} name='CUSTOMER_NAME' onChange={e => setcustomerName(e.target.value)} ></input>
                                        <input className="add-moodle-input" value={customerNo} name='CUSTOMER_NO' onChange={e => setcustomerNo(e.target.value)}></input>
                                        <input className="add-moodle-input" value={invoiceNo} name='INVOICE_NO' onChange={e => setinvoiceNo(e.target.value)}></input>
                                        <input className="add-moodle-input" value={invoiceAmount} name='INVOICE_AMOUNT' onChange={e => setinvoiceAmount(e.target.value)}></input>
                                    </Grid>
                                    {/* <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                    
                                    <label style={{ display: 'inline', maxWidth: '10vw', marginRight: '2vw' }}>
                                        <span>Customer Name</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>
                                    <input style={{ outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '3vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} className="customInput" value={customerName} name='CUSTOMER_NAME' onChange={e => setcustomerName(e.target.value)}></input>
                                </div>

                                <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                    
                                    <label style={{ display: 'inline', maxWidth: '10vw', marginRight: '2vw' }}>
                                        <span>Customer No.</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>
                                    <input style={{outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '3vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} className="customInput" value={customerNo} name='CUSTOMER_NO' onChange={e => setcustomerNo(e.target.value)}></input>
                                </div>


                                <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                    
                                    
                                    <label style={{ display: 'inline', maxWidth: '10vw', marginRight: '2vw' }}>
                                        <span>Invoice No.</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>
                                    <input style={{outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '3vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} className="customInput" value={invoiceNo} name='INVOICE_NO' onChange={e => setinvoiceNo(e.target.value)}></input>
                                </div>


                                <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                
                                    <label style={{ display: 'inline', maxWidth: '10vw', marginRight: '2vw' }}>
                                        <span>Invoice Amount</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>
                                    <input style={{outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '3vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} className="customInput" value={invoiceAmount} name='INVOICE_AMOUNT' onChange={e => setinvoiceAmount(e.target.value)}></input>
                                </div>
                                <ThemeProvider theme={themeAddButton}>
                                <Button size="small" className={classes.margin} onClick={handleClose} >
          Cancel
        </Button>
                                </ThemeProvider>
                                 */}


                                </Grid>

                                <Grid item xs={6} container>
                                    {/* <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                    <label style={{ display: 'inline', maxWidth: '10vw', marginRight: '2vw' }}>
                                        <span>Due Date</span>
                                        <span style={{ color: 'red', fontSize: '15px' }}>*
                                       </span>
                                    </label>
                                    <input style={{outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '3vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} className="customInput" type='date' value={dueDate} name='DUE_DATE' onChange={e => setdueDate(e.target.value)} />
                                </div>

                                <div style={{ color: '#97A1A9', fontSize: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '15px' }}>
                                    <label style={{ display: 'block', maxWidth: '10vw', marginRight: '2vw' }}>
                                        Notes
                                        
                                    </label>
                                    
                                    <textarea style={{outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '19vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} name="comment" form="usrform" resize='none' value={notes} onChange={e => setnotes(e.target.value)}></textarea>
                                </div> */}
                                    <Grid item xs={4}>

                                        <p className="add-moodle-tag">Due Date<span style={{ color: 'red', fontSize: '15px' }}>*</span></p>
                                        <p className="add-moodle-tag">Notes</p>


                                    </Grid>

                                    <Grid item xs={8}>
                                        <ThemeProvider theme={themeDatePicker}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}  >
                                                <KeyboardDatePicker disableToolbar inputVariant="outlined" id="due_in_date"
                                                    variant="inline"
                                                    format="dd-MM-yyyy"
                                                    // margin="normal"
                                                    //id="date-picker-inline"
                                                    //label="Due in Date"
                                                    value={selectedDate}
                                                    name="due_in_date"
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}


                                                />
                                            </MuiPickersUtilsProvider>
                                        </ThemeProvider>
                                        {/* style={{ outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '15vw', height: '19vh', margin: '0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} */}
                                        <textarea style={{ outline: 'none', border: '1px solid #356680', borderRadius: '10px', width: '16vw', height: '18vh', margin: '0.9vw 0.2vw 0.1vw 0.2vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46' }} name="comment" form="usrform" resize='none' value={notes} onChange={e => setnotes(e.target.value)}></textarea>

                                        {/* <ThemeProvider theme={themeAddButton}>
                                            <Button variant="outlined" className={classes.margin} onClick={() => onReset()} >
                                                Clear
</Button>
                                            <Button variant="contained" className={classes.margin} type='submit'>
                                                Add
        </Button>
                                        </ThemeProvider> */}

                                        <ThemeProvider theme={themeAddButton}>
                                            <Button variant="outlined" className={classes.margin} onClick={() => onReset()} style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: '7.7vw', marginRight: '1.25vw', borderRadius: '10px' }}>
                                                Clear
                                                </Button>
                                            <Button variant="contained" type='submit' style={{ background: '#14AFF1', borderRadius: '10px', width: '4vw' }} type='submit'>
                                                Add
                                                </Button>
                                        </ThemeProvider>

                                    </Grid>

                                    <div>



                                    </div>
                                </Grid>

                            </Grid>
                        </form>

                    </DialogContent>
                </Dialog>
            </ThemeProvider>

        </div>
    )
}

export default MyPopUp
