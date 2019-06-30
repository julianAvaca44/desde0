import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './header.scss';

const drawerWidth = 240;
const styles = {
    root: {
        display: 'flex',
    },
    toolbar: {
        justifyContent: 'center'
    },
    appBar: {
        '@media (min-width: 960px)': {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        }
    },
    menuButton: {
        '@media (max-width: 959px)': {
            marginRight: "30px",
            flex: "none"
          },
        '@media (min-width: 960px)': {
          display: 'none'
        },
    },
    title: {
        '@media (max-width: 959px)': {
            flex: "auto"
          }
    },
}

class HeaderCmp extends Component {
    render(){
        let isPrincipal = this.props.location.pathname === '/reactjs' || this.props.location.pathname === '/reactjs/';
        let classesAppBar = isPrincipal?'':this.props.classes.appBar;
        let classesTitle = isPrincipal?'':this.props.classes.title;
        let menu = isPrincipal?'':(<IconButton color="inherit" className={this.props.classes.menuButton} aria-label="Open drawer" edge="start" onClick={this.props.onClick}><MenuIcon /></IconButton>);
        return (
            <div className={this.props.classes.root + ' header-cmp'}>
                <AppBar className={classesAppBar} position="fixed" color='secondary'>
                    <Toolbar className={this.props.classes.toolbar}>
                        {menu}
                        <Typography variant="h5" className={classesTitle} noWrap>
                            ReactJS-0
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>  
        );
    }
}

export default withStyles(styles)(HeaderCmp);