import React from 'react'

import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';





//import {FiArrowLeftCircle} from 'react-icons/fi'
import './styles.css'
//import logo from '../../img/logo.png'


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

const PageHeader = () =>{
    
    const classes = useStyles();
    return(
        <>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar style={{justifyContent:"space-between"}}>
                <Typography variant="h6"  font-family="Lobster" noWrap >
                    <h6 style={{ alignContent:"center"}}>Creative Обмен денег</h6>
                </Typography>
                </Toolbar>
            </AppBar>
    </>

    )
}
export default PageHeader;