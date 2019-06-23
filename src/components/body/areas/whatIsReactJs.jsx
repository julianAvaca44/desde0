import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListCmp from './list';

const listText = [
    "Es una biblioteca de Javascript open Source.",
    "Funciona tanto del lado del cliente como en el servidor",
    "Permite renderizar mucho más eficiente y rápido: Virtual DOM",
    "Está basado en componentes",
    "HTML y JavaScript juntos en un solo archivo: JSX.",
    "Permite la creación de aplicaciones complejas, con UIs dinámicas",
    "Se puede agregar a aplicaciones existentes de forma sencilla.",
    "Creada por Facebook, y utilizada en sus propios productos.",
    "Tiene un gran ecosistema, que brinda muchas bibliotecas y frameworks auxiliares",
    "Grandes empresas la utilizan, y aportan a la comunidad y el ecosistema: Airbnb, Netflix, Apple, Instagram, Paypal, etc."
]


class WhatIsReactJsCmp extends Component {
    render () {
        return (
            <div className={this.props.classes.divSection + ' get-started-cmp'}>
                <Container className={this.props.classes.container}>
                    <Grid container direction="row" justify="center" alignItems="flex-start">
                        <Grid item xs={12} sm={6}>
                            <div>
                                <h1>¿Qué es ReactJs?</h1>
                            </div>
                            <div className={this.props.classes.parr}>
                                <p>ReactJS es un biblioteca de Javascript de código abierto, para construir interfaces de usuario(UI) con el objetivo de facilitar el desarrollo de aplicaciones SPA(single page application) más eficientes. Funciona tanto en el lado del cliente como en el servidor, haciendo posible la creación de aplicaciones isomórficas.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>
                                <h1>¿Quién lo desarrolla?</h1>
                            </div>
                            <div className={this.props.classes.parr}>
                                <p>Cuenta con una gran comunidad de desarrolladores. Creada y mantenida por Facebook y la comunidad de software libre, han participado en el proyecto más de mil desarrolladores diferentes.</p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <div>
                                <h1 className={this.props.classes.h1}>¿Por qué ReactJs?</h1>
                            </div> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ListCmp list={listText.filter((element, index) => index < 5)} baseKey='list1'></ListCmp>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ListCmp list={listText.filter((element, index) => index > 4)} baseKey='list2'></ListCmp>
                        </Grid>
                    </Grid>   
                </Container>
            </div>
        )
    }
}

export default WhatIsReactJsCmp;