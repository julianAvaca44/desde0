import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './footerStyles';


class FooterCmp extends Component {  
    render() {
        return (
            <div className={this.props.classes.footerCmp}>
                <Button>footer</Button>
            </div>
        );
    }
}

export default withStyles(styles)(FooterCmp);