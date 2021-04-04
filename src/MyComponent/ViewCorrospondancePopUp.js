import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

function ViewCorrospondancePopUp(props) {
    const { finalCheckItemList, openPopupViewCorrospondance, setOpenPopupViewCorrospondance } = props;
    console.log(`Inside ViewCorrospondancePopUp : finalCheckItemList=${finalCheckItemList.map(e => e.nameCustomer)}`)


    const handleClickOpen = () => {
        setOpenPopupViewCorrospondance(true);
    };
    const handleClose = () => {
        setOpenPopupViewCorrospondance(false);
    };




    return (
        <div>

            {/* <button id="b2" onClick={handleClickOpen}>View Correspondence</button> */}
            <Dialog
                onClose={handleClose}
                //aria-labelledby="customized-dialog-title" 
                open={openPopupViewCorrospondance}
                maxWidth="true">

                <DialogTitle dividers id="dialog" onClose={handleClose}>
                    View Corrospondence (2)?
        </DialogTitle>
                <DialogContent dividers id="dialog">
                    <Typography style={{ color: "#C0C6CA" }}>
                        Subject: Invoice Details -
          <br /><br />
          Dear Sir/Madam,
          <br /><br />
          Gentle reminder that you have one or more open invoices on your account.
          <br />
          Please get back to us with an expected date of payment. If you have any specific issue with the invoice(s), please let us know so that we can address it at the earliest.
          <br /><br />
          Please find the details of the invoices below:
          </Typography>
                    <Typography>
                        <div id="scrollableDiv" className="app">

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Invoice Number </TableCell>
                                        <TableCell align="left">PO Number </TableCell>
                                        <TableCell align="left">Invoice Date</TableCell>
                                        <TableCell align="left">Due Date</TableCell>
                                        <TableCell align="left">Currency</TableCell>
                                        <TableCell align="left">Open Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {finalCheckItemList?.map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell align="left">{row.invoiceId}</TableCell>
                                            <TableCell align="left">{row.custNumber}</TableCell>
                                            <TableCell align="left">{row.documentCreateDate}</TableCell>
                                            <TableCell align="left">{row.dueInDate}</TableCell>
                                            <TableCell align="left">{row.invoiceCurrency}</TableCell>
                                            <TableCell align="left">{row.totalOpenAmount}</TableCell>


                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </div>
                    </Typography>
                    <Typography>
                        In case you have already made a payment for the above items, please send us the details to ensure the payment is posted.
          <br />
          Let us know if we can be of any further assistance.
          <br />
          Looking forward to hearing from you.
          <br />
          Kind Regards,
          <br />
          [Sender’s First Name] [Sender’s Last Name]
          <br />
          Phone : [Sender’s contact number]
          <br />
          Fax : [If any]
          <br />
          Email : [Sender’s Email Address]
          <br />
          Company Name[Sender’s Company Name]
          </Typography>
                </DialogContent>
                <DialogActions dividers id="dialog">
                    <Button autoFocus onClick={handleClose} color="primary" variant="outlined" style={{ textTransform: 'none' }}>
                        Cancel
          </Button>
                    <Button autoFocus onClick={handleClose} color="primary" variant="contained" style={{ textTransform: 'none' }}>
                        Download
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ViewCorrospondancePopUp
