import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MenuCmp from './menu';
import { withStyles } from '@material-ui/core/styles';

const useStyles = {
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
};

class TutorialCmp extends Component { 
    render() {
        return (
            <div className={this.props.classes.root}>
                <MenuCmp menuOpen={this.props.menuOpen} menuOpenHanlde={this.props.menuOpenHanlde}></MenuCmp>
                <main className={this.props.classes.content}>
                    <Typography variant="h3">
                        Arranquemos "D0"
                    </Typography>
                    <Typography paragraph>
                        Primero lo primero, en tutorial iremos aprendiendo los conecptos basicos hasta llegar a los mas avanzados y sumando herramientas de desarrollo para complementar la informacion como el caso de Redux.
                        Ire dando ejemplos de uso basico y entretenidos. 
                    </Typography>
                    <Typography variant="h3">
                        Que necesito saber?
                    </Typography>
                    <Typography paragraph>
                        Para poder entender de reactJs lo primero que necesitamos es tener una base de HTML, CSS, y JavaScript.
                    </Typography>
                    <Typography variant="h3">
                        Que necesito para desarrollar?
                    </Typography>
                    <Typography paragraph>
                        Bien para comenzar a desarrollar habra que tener instalado algun editor de texto o ide, ya sea sublime, atom, webStorm, o visual studio code. yo por mi parte estoy desarrollando con el visual Studio code pero ustedes pueden usar el mas comodo les parezca.
                    </Typography>
                </main>
            </div>
        )
    }
}

export default withStyles(useStyles)(TutorialCmp);
