import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

class AboutMeCmp extends Component {  
    render(){
        return (
            <div className={this.props.classes.divSection + ' aboutme-cmp'}>
                <Container className={this.props.classes.container}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <div className=' center-rjs'> 
                                <h1>About Me</h1>
                                <p>Julian Federico Avaca</p>
                                <p>Full stack developer - IT Engineer</p>
                                <p>Contactame</p>
                            </div>
                        </Grid> 
                        <Grid item xs={12} sm={6}>
                            <div className={this.props.classes.heightAll + ' center-rjs'}>
                                <Avatar alt="juli" src="./imagenes/perfil.PNG" className={this.props.classes.avatar} />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>            
        )
    }
    
}

export default AboutMeCmp;