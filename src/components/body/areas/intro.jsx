import React, { Component } from 'react';
import logo from '../../../logo.svg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


class IntroCmp extends Component {
    render(){
        return (
            <div className={this.props.classes.root + ' intro-cmp'}>
                <Container>
                    <Grid container spacing={10} justify="center" alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <div className='center-rjs'>
                                <img src={logo} className='App-logo' alt='logo' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className='center-rjs'>
                                <h1>ReactJs Desde 0</h1>
                                <h3>Conoce todo lo que necesitas saber sobre ReactJs por <span>Julian Federico Avaca</span></h3>
                                <p>Desde como configurar WebPack, como ultilizar Sass, peticiones ansincronas al servidor hasta aplicar <span>Redux</span></p>
                            </div>
                            <Divider className={this.props.classes.dividerFull} variant='middle'/> 
                            <div className='center-rjs'>
                                <Link to="reactjs/tutorial">
                                    <Button color="secondary" size="large" variant="contained">GET STARTED</Button>
                                </Link>
                            </div>
                        </Grid>    
                    </Grid>
                </Container>
            </div>   
        )
    }
}

export default IntroCmp;