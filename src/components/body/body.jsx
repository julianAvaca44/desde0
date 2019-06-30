import React, { Component } from 'react';
import ReactIntroCmp from '../reactIntro/ReactIntro';
import TutorialCmp from '../tutorial/Tutorial';
import { withStyles } from '@material-ui/core/styles';
import HeaderCmp from '../header/header';
import FooterCmp from '../footer/footer';
import styles from './bodyStyles';
import { Route } from "react-router-dom";
   
import './body.scss';


class BodyCmp extends Component {
    render(){
        return (
            [
                <HeaderCmp/>,
                <Route exact path={`${this.props.match.url}/tutorial`} render={() => <TutorialCmp {...this.props}/>}></Route>,
                <Route exact path={`${this.props.match.url}`} render={() => <ReactIntroCmp {...this.props}/>}></Route>,
                <FooterCmp/>
            ]
        )
    }
}

export default withStyles(styles)(BodyCmp);