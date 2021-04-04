import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { pxToRem, pxToVh, pxToVw } from "../utils/theme";
import { Button, Grid } from '@material-ui/core';
//import img3 from '../assets/delete.svg';
//import '../Table.css';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import GeneratePdf from './GeneratePdf';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: pxToRem(650),
  },
  tableRow: {
    borderBottom: "none"

  },
  viewCor: {
    "& .MuiPaper-rounded": {
      width: "100vh"
    },
    backgroundColor: '#273D49CC',
    color: '#97A1A9',
    border: '1px #97A1A9 solid',
    marginRight: pxToRem(250),
    borderRadius: pxToRem(10)

  },
  DialogBox: {
    //width:pxToVw(1200),
  },
  dd: {

    color: "white",
    background: "#97A1A9 0% 0 % no - repeat padding- box",
    backgroundColor: "#14AFF1",
    borderRadius: pxToRem(10),
    opacity: "1",
    marginLeft: "0.5rem",
  },
  cancel: {
    // width: pxToRem(106),
    // height: pxToRem(45),
    color: "#14AFF1",
    // background: "#97A1A9 0% 0 % no - repeat padding- box",
    // backgroundColor: "#14AFF1",
    borderRadius: pxToRem(10),
    opacity: "1",
    // marginTop: "0.3rem",
    // marginLeft: "3rem",
    // marginRight:"22rem"
  }
});

function createData(CustomerName, CustomerNo, bill_id, Invoice_amount, Duedate) {
  return { CustomerName, CustomerNo, bill_id, Invoice_amount, Duedate };
}

const rows = [
  createData('KRAFTUS', "CCCA02", 1928511027, 1454.21, "Feb 8,2019"),
  createData('W H', 200386051, 1928512738, 17197.44, "Jan 24, 2019"),
];

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: pxToRem(20),
  },
  closeButton: {
    position: 'absolute',
    right: pxToRem(10),
    top: pxToRem(10),
    color: theme.palette.grey[500],
  },

});


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, handleClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {handleClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
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
  },
}))(MuiDialogActions);

const themeVc = createMuiTheme({
  overrides: {
    MuiIconButton: {
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

export default function ViewCorrespondenceModal({ totalAmount, finalCheckItemList, openPopupViewCorrospondance, setOpenPopupViewCorrospondance }) {
  const [addAmount, setAddAmount] = React.useState(0);
  const classes = useStyles();

  console.log(`total_amount = ${totalAmount}`)
  const handleClickOpen = () => {
    setOpenPopupViewCorrospondance(true);
  };
  const handleClose = () => {
    setOpenPopupViewCorrospondance(false);
  };

  // function addAllAmount() {
  //   console.log('Inside addAllAmount')
  //   let sum = 0.0
  //   for (let i = 0; i < finalCheckItemList.length; i++) {
  //     console.log(`sum = ${sum}`)
  //     sum += parseFloat(finalCheckItemList[i].totalOpenAmount)
  //   }
  //   setAddAmount(sum)
  // }

  function preparationForDownload() {
    // addAllAmount()
    GeneratePdf(totalAmount, finalCheckItemList)
  }

  return (
    <div>

      <Dialog
        open={openPopupViewCorrospondance}
        onClose={handleClose}
        className={classes.DialogBox}
        maxWidth="lg"
      >
        <DialogTitle id="view_dialog" onClose={handleClose} style={{ backgroundColor: "#2A3E4C" }} maxWidth="lg">

          <Grid container>
            <Grid item xm={11} sm={11}>
              <div color='#FFFFFF' >

                <span style={{ color: 'white' }}>View Correspondence (2)</span>
              </div>
            </Grid>

            <Grid xm={1} sm={1}>
              <IconButton aria-label="delete" onClick={handleClose} color="white">
                <CloseIcon />
              </IconButton>
            </Grid>

          </Grid>
        </DialogTitle>
        <DialogContent dividers id="delete_dialog" style={{ backgroundColor: "#2A3E4C", color: "#97A1A9" }} >
          <Typography gutterBottom>
            Subject :
            <span style={{ color: "#fff" }}>
              Invoice Details -[ Account Name ]
            </span>
            <br></br><br></br> Dear Sir/Madam,<br></br> Greetings!<br></br><br></br> This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department.<br></br> <br></br>Please find the details of the invoices below:
            </Typography>
          <Typography gutterBottom>

            <TableContainer component={Paper} style={{ backgroundColor: "#2A3E4C", color: "#97A1A9" }}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableRow} style={{ color: "#97A1A9" }}>Customer Name</TableCell>
                    <TableCell className={classes.tableRow} align="right" style={{ color: "#97A1A9" }}>Invoice Number</TableCell>
                    <TableCell className={classes.tableRow} align="right" style={{ color: "#97A1A9" }}>PO Number</TableCell>
                    <TableCell className={classes.tableRow} align="right" style={{ color: "#97A1A9" }}>Invoice date</TableCell>
                    <TableCell className={classes.tableRow} align="right" style={{ color: "#97A1A9" }}>Due Date</TableCell>
                    <TableCell className={classes.tableRow} align="right" style={{ color: "#97A1A9" }}>Currency</TableCell>
                    <TableCell className={classes.tableRow} align="right" style={{ color: "#97A1A9" }}>Open Amount($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {finalCheckItemList.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" style={{ color: "#FFF" }} className={classes.tableRow}>
                        {row.nameCustomer}
                      </TableCell>
                      <TableCell align="right" className={classes.tableRow} style={{ color: "#FFF" }}>{row.invoiceId}</TableCell>
                      <TableCell align="right" className={classes.tableRow} style={{ color: "#FFF" }}>{row.custNumber}</TableCell>
                      <TableCell align="right" className={classes.tableRow} style={{ color: "#FFF" }}>{row.documentCreateDate}</TableCell>
                      <TableCell align="right" className={classes.tableRow} style={{ color: "#FFF" }}>{row.dueInDate}</TableCell>
                      <TableCell align="right" className={classes.tableRow} style={{ color: "#FFF" }}>{row.invoiceCurrency}</TableCell>
                      <TableCell align="right" className={classes.tableRow} style={{ color: "#FFF" }}>{row.totalOpenAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </Typography>
          <Typography gutterBottom>
            Total Amount to be Paid :
            <span style={{ color: "#fff" }}>
              $124.00K</span>
            <br></br><br></br> In case you have already made a payment for the above items, please send us the details to ensure the payment is posted.<br></br> Let us know if we can be of any further assistance.<br></br> Looking forward to hearing from you.<br></br><br></br> Kind Regards,<br></br> [Sender’s First Name][Sender’s Last Name] <br></br>Phone : [Sender’s contact number]<br></br> Fax : [If any]<br></br> Email : [Sender’s Email Address]<br></br> Company Name[Sender’s Company Name]
            </Typography>
        </DialogContent>
        <DialogActions id="delete_dialog" style={{ backgroundColor: "#2A3E4C", color: "#C0C6CA" }}>
          <Button className={classes.cancel} autoFocus onClick={handleClose} color="primary" variant="content" id="del" style={{ textTransform: 'none' }}>
            Cancel
            </Button>

          {/* <Button className={classes.dd} autoFocus onClick={() => GeneratePdf(finalCheckItemList)} color="primary" variant="content" id="del1" style={{ textTransform: 'none' }}>
            Download
            </Button> */}

          <Button className={classes.dd} autoFocus onClick={() => preparationForDownload()} color="primary" variant="content" id="del1" style={{ textTransform: 'none' }}>
            Download
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}