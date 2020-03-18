import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import NoteDetails from './components/notes/NoteDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateNote from './components/notes/CreateNote'


class App extends Component {

  render(){
    const { currentUser } = this.props
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => {
              return currentUser.jwt ? < Dashboard /> : <Redirect to='/login' component={SignIn} />
            }} />
            <Route exact path='/note/:id' render={(props) => {
              return currentUser.jwt ? < NoteDetails routing={props} /> : <Redirect to='/login' component={SignIn} />
            }} />
            {/* <Route path='/note/:id' component={NoteDetails} /> */}
            <Route exact path='/create' render={() => {
              return currentUser.jwt ? < CreateNote /> : <Redirect to='/login' component={SignIn} />
            }} />
            {/* <Route path='/create' component={CreateNote} /> */}
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(App);