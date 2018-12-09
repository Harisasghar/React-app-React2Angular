import * as React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import users from './users/users';
import userdetails from './users/userdetails';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/users" />} />
            <Route path="/users" component={users} />
            <Route path="/userdetails/:id" component={userdetails}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
