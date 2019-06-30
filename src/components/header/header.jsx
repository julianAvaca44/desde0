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
        textAling: 'center',
        justifyContent: 'center'
    },
    appBar: {
        marginLeft: drawerWidth,
        '@media (min-width: 960px)': {
            width: `calc(100% - ${drawerWidth}px)`,
        }
    },
    menuButton: {
        marginRight: "30px",
        '@media (min-width: 960px)': {
          display: 'none',
        },
    },
}

class HeaderCmp extends Component {
    render(){
        return (
            <div className={this.props.classes.root + ' header-cmp'}>
                <AppBar className={this.props.classes.appBar} position="fixed" color='secondary'>
                    <Toolbar>
                        <IconButton color="inherit"  className={this.props.classes.menuButton} aria-label="Open drawer" edge="start" onClick={this.props.onClick}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap>
                            ReactJS-0
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>  
        );
    }
}

export default withStyles(styles)(HeaderCmp);