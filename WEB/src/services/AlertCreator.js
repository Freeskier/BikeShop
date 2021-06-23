import React from 'react'
import {Alert} from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function AlertCreator({notify, setNotify}) {
    return(
        <Snackbar
            autoHideDuration={1500}
            onClose={() => setNotify({isOpen:false})}
            open = {notify.isOpen}
            anchorOrigin={{vertical:"top", horizontal:"right"}}>
            <Alert severity={notify.type}>
                {notify.message}
            </Alert>
            </Snackbar>
    )
}