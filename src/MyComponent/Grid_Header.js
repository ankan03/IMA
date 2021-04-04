import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid_Table_Area from './Grid_Table_Area';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import productLogo from '../assets/productLogo.svg';
import companyLogo from '../assets/logo.svg';
import '../App.css'
const theme = createMuiTheme({
    overrides: {
        // Style sheet name 
        MuiGrid: {
            // Name of the rule
            item: {
                paddingTop: '3vh',
                display: 'flex',
            },
        },
    },
});

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             display: 'flex',
//             paddingLeft: '1vw',
//             paddingRight: '1vw',
//             '& > *': {
//                 margin: theme.spacing(1),
//                 width: theme.spacing(16),
//                 height: theme.spacing(16),
//             },
//         },

//         paper1: {
//             width: '100vw',
//             height: '90vh',
//             background: '#273D49CC',
//         },
//         buttonPredict: {
//             backgroundColor: '#97A1A9',
//             marginLeft: '2vw',
//             marginTop: '3vh',
//             borderRadius: '.5em'
//         },
//         buttonViewCorrospondance: {
//             marginLeft: '1vw',
//             marginTop: '3vh',
//             borderRadius: '.5em',
//             color: '#97A1A9',
//             border: '1px solid #97A1A9'
//         },
//         buttonAdd: {

//             color: '#FFFFFF',
//             marginLeft: '31vw',
//             marginTop: '3vh',
//             borderRadius: '.5em',
//             border: '1px solid #14AFF1'
//         },
//         buttonEdit: {
//             marginLeft: '1vw',
//             marginTop: '3vh',
//             borderRadius: '.5em',
//             color: '#97A1A9',
//             border: '1px solid #97A1A9'
//         },
//         buttonDelete: {
//             marginLeft: '1vw',
//             marginTop: '3vh',
//             borderRadius: '.5em',
//             color: '#97A1A9',
//             border: '1px solid #97A1A9'
//         },
//         textFieldSearch: {
//             marginLeft: '1vw',
//             marginTop: '3vh',
//             borderRadius: '.5em',
//             color: '#97A1A9',
//             height: '1vh',




//         },
//     }),
// );

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

function Grid_Header() {
    const classes = useStyles();

    return (
        <div className="root">
            <Grid container >
                <ThemeProvider theme={theme}>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5} >
                        <img src={productLogo} alt="" className='App-logo1' />
                    </Grid>
                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                        <img src={companyLogo} alt="" className='' />
                    </Grid>
                </ThemeProvider>

            </Grid>

            <h2 style={{ color: 'white', padding: 0, marginLeft: 0, marginBlockStart: '10px', marginBlockEnd: '10px', fontWeight: 'normal' }}>Invoice List</h2>

            <Grid_Table_Area />

            <br />
        </div>



        // <div>
        //     <Grid_Table_Area />

        // </div>
    );
}

export default Grid_Header
