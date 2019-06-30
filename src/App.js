import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BodyCmp from './components/body/body';
import NotFoundCmp from './components/notFound/notFound';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <React.Fragment>
        <CssBaseline />
          <div className='App-cmp'>
            <Switch>
              <Route strict path="/reactjs" component={BodyCmp} />
              <Redirect exact from="/" to="/reactjs" />
              <Route component={NotFoundCmp} />
            </Switch>
          </div>
        </React.Fragment>  
      </BrowserRouter>
    );
  }
}

export default App;
