import React from 'react';
import BodyCmp from './components/body/body';
import './App.css';
import HeaderCmp from './components/header/header';
import FooterCmp from './components/footer/footer';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
      <CssBaseline />
        <div className='App-cmp'>
          <HeaderCmp cabezera='Hola'/>
          <BodyCmp/>
          <FooterCmp name='Chau'/>
        </div>
      </React.Fragment>  
    );
  }
}

export default App;
