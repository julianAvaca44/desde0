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
    '@media (min-width: 800px)': {
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
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

class MenuCmp extends Component {
    constructor(props){
        super(props);
        //this.classes = useStyles();
        this.container = this.props.container;
        // this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        // const [mobileOpen, setMobileOpen] = React.useState(false);
    }

    render(){
        return (
            <nav className={this.props.classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.container}
                            variant="temporary"
                            anchor={'left'}
                            open={false}
                            classes={{
                                paper: this.props.classes.drawerPaper,
                              }}
                            // onClose={handleDrawerToggle}
                            ModalProps={{keepMounted: true // Better open performance on mobile.
                            }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: this.props.classes.drawerPaper,
                              }}
                            open>
                            {drawer}>
                        </Drawer>
                    </Hidden>
                </nav>
        );
    }
}

export default withStyles(useStyles)(MenuCmp);