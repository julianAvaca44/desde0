import React, { Component } from 'react';
import IntroCmp from '../body/areas/intro';
import AboutMeCmp from '../body/areas/aboutMe';
import DescriptionCmp from '../body/areas/description';
import WhatIsReactJsCmp from '../body/areas/whatIsReactJs';
import Divider from '@material-ui/core/Divider';

class ReactIntroCmp extends Component{
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

export default ReactIntroCmp;