import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = {
  drawer: {
    '@media (min-width: 960px)': {
      width: `${drawerWidth}px`,
      flexShrink: 0
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
};

const drawer = (
    <div>
      <div/>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

class MenuCmp extends Component {
    constructor(props){
        super(props);    
        this.container = this.props.container;
    }

    render(){
        return (
            <nav className={this.props.classes.drawer}>
                    <Hidden mdUp implementation="css">
                        <Drawer
                            container={this.container}
                            variant="temporary"
                            anchor={'left'}
                            open={this.props.menuOpen}
                            onClose={this.props.menuOpenHandle}
                            classes={{paper: this.props.classes.drawerPaper}}
                            ModalProps={{keepMounted: true}}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: this.props.classes.drawerPaper,
                              }}
                            open>
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
        );
    }
}

export default withStyles(useStyles)(MenuCmp);