import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './footerStyles';


class FooterCmp extends Component {
    constructor(props){
        super(props);   
        this.state = { descripcion : 'Mundo'}; 
    }
    
    render() {
        return (
            <div className={this.props.classes.footerCmp}>
                <Button>footer</Button>
            </div>
        );
    }
}

FooterCmp.propTypes = {
    name : PropTypes.string.isRequired
}

export default withStyles(styles)(FooterCmp);