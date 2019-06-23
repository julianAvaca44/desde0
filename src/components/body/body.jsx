import React, { Component } from 'react';
import IntroCmp from './areas/intro';
import AboutMeCmp from './areas/aboutMe';
import DescriptionCmp from './areas/description';
import WhatIsReactJsCmp from './areas/whatIsReactJs';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import styles from './bodyStyles';
import './body.scss';

class BodyCmp extends Component {
    constructor(props){
        super(props);
        this.state = { texto : 'Mundo'};
    }

    render(){
        return (
        <main className='body-cmp'>
            <IntroCmp {...this.props}></IntroCmp>
            <WhatIsReactJsCmp {...this.props}></WhatIsReactJsCmp>
            <Divider className={this.props.classes.divider} variant='middle'/>
            <DescriptionCmp {...this.props}></DescriptionCmp>
            <Divider className={this.props.classes.divider} variant='middle'/>
            <AboutMeCmp {...this.props}></AboutMeCmp>            
        </main>    
        )
    }
}

export default withStyles(styles)(BodyCmp);