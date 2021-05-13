import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Cart from "./Cart";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    appData: {
      marginTop: "10vh",
      width: `calc(100% - ${drawerWidth}px)`,
      display: "flex",
    },
  }));
  
  function Navbar({ children }) {
    const classes = useStyles();
      return (
        <div className={classes.root}>
        <AppBar id="navbar" position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
                Robot Market
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          className="drawer-right"
          anchor="right">
          <Toolbar />
          <div className={classes.drawerContainer + " drawer"}>
           <Cart />
          </div>
        </Drawer>
        <div className={classes.appData}>{children}</div>
      </div>
      )
  }
  export default Navbar
  