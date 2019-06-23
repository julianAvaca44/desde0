import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardCmp from './card';
import Container from '@material-ui/core/Container';

const cards = [
    {
        image: './imagenes/iconos/redux.png',
        title:'Redux',
        description: 'Aprende como implementar el Framework de vanguardia para ReactJS, con Redux obtendremos un mejor manejo de nuestra app...',
        labelButton: 'Leer Más...'
    },
    {
        image: './imagenes/iconos/webpack.png',
        title:'WebPack',
        description: 'Con Webpack, el sistema de bundling, podremos preparar el desarrollo de la aplicación para un ambiente productivo...',
        labelButton: 'Leer Más...'
    },
    {
        image: './imagenes/iconos/sass.png',
        title:'Sass',
        description: 'Aprenderemos como usar Sass a través de este tutorial, para que puedas aplicar tus propios estilos de una manera más simple... ',
        labelButton: 'Leer Más...'
    }
]


class DescriptionCmp extends Component {    
    render(){
        return (
            <div className={this.props.classes.divSection  + ' description-cmp'}>
                <Container className={this.props.classes.container}>
                    <Grid container>
                        {cards.map((element, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={4} className={this.props.classes.itemCenter}>
                                    <CardCmp {...element} {...this.props}></CardCmp>    
                                </Grid> )                          
                            })
                        }
                    </Grid>
                </Container>
            </div>
        )
    }
    
}

export default DescriptionCmp;