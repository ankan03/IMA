import React from 'react'
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import { Theme, createStyles, makeStyles, withStyles } from '@material-ui/core/styles';

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

function DeleteButton() {
    return (
        <StyledButtonHollow startIcon={<RemoveIcon />}>Delete</StyledButtonHollow>
    )
}

export default DeleteButton
