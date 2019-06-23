import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './header.scss';

const styles = {
    toolbar: {
        textAling: 'center',
        justifyContent: 'center'
    }
}

class HeaderCmp extends Component {
    constructor(props){
        super(props);
        this.state = { descripcion : 'Mundo'};
    }

    render(){
        return (
            <AppBar className='header-cmp' color='secondary' position="static">
                <Container maxWidth="sm" className='header-cmp' color='secondary'>
                    <Grid item xs={12}>
                        <Toolbar className={this.props.classes.toolbar}>
                            <Typography variant="h5">ReactJS-0</Typography>
                        </Toolbar>                        
                    </Grid>
                </Container>
            </AppBar>
        );
    }
}

HeaderCmp.propTypes = {
    cabezera: PropTypes.string.isRequired
}

export default withStyles(styles)(HeaderCmp);