import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Grid_Header from './Grid_Header';
import { pxToRem } from '../utils/theme';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            // width: 128 px,
            // height: 128 px,
            // margin: 8 px,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

    }),

);

// const theme = createMuiTheme({
//     overrides: {
//         // Style sheet name ⚛️
//         MuiButton: {
//             // Name of the rule
//             text: {
//                 // Some CSS
//                 color: 'white',
//             },
//         },
//     },
// });

function MyHeaderSection() {
    const classes = useStyles();
    return (
        // <div className={classes.root}>

        //     <Typography variant="h5" display='block' align='center'>
        //         ABC Products
        //     </Typography>

        //     <Typography variant="h6" display='block' align='left'>
        //         Invoice List
        //     </Typography>

        //     {/* <OverridesCss /> */}

        //     <Grid_Header />

        // </div>
        <div>
            <Grid_Header />
        </div>


    )
}

export default MyHeaderSection
