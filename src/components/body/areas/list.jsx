import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';

class ListCmp extends Component {
    render(){
        return (
            <List>
                {this.props.list
                .map((text, index) => {
                    return (
                        <ListItem key={this.props.baseKey + '-' + index}>
                            <ListItemIcon>
                                <DoneIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>);
                    })
                }
            </List>
        )
    }
}

export default ListCmp;