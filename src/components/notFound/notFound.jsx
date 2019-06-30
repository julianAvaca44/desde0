import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ComputerCmp from '../computer/computer';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/HomeSharp';
import { Link } from "react-router-dom";
import './notFound.scss';

class NotFoundCmp extends Component {
    render(){
        return (
            <div className='notFound-cmp'>
                <Container>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} sm={12}>
                            <ComputerCmp>
                                <div className="center-div pantalla-contenido">
                                    <h1>ERROR: 404</h1>
                                    <h1>PAGE NOT FOUND</h1>
                                    <Link to="/">
                                        <Button color="secondary" size="small" variant="contained">
                                            <HomeIcon/>
                                            <span>Ir al inicio</span>
                                        </Button>
                                    </Link>
                                </div>                                
                            </ComputerCmp>
                        </Grid>
                    </Grid>
                    <Divider variant="middle"/>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} sm={12}>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default NotFoundCmp;