import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Theme, createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import MyPopUp from './MyPopUp';


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

function AddButton() {
    const [openPopup, setOpenPopup] = useState(false)
    return (
        // <div>
        //     <StyledButtonHollow startIcon={<AddIcon />} onClick={() => setOpenPopup(true)}>Add</StyledButtonHollow>
        //     <MyPopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>

        //     </MyPopUp>
        // </div>
        <StyledButtonHollow startIcon={<AddIcon />} onClick={() => setOpenPopup(true)}>Add</StyledButtonHollow>


    )
}

export default AddButton
//  <Controls.Button
// text="Add New"
// variant="outlined"
// startIcon={<AddIcon />}
// className={classes.newButton}
// onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
// />