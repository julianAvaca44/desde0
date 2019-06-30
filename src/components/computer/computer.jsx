import React, { Component } from 'react';
import './computer.scss';

class ComputerCmp extends Component {
    render(){
        return (
            <div className="computer-cmp">
                <div className="monitor">
                    <div className="pantalla">
                        {this.props.children}
                    </div>
                </div>
                <div className="keyboard"></div>
            </div>
        )
    }
}

export default ComputerCmp;