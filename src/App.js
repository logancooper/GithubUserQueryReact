import './App.css';
import SearchForm from './components/SearchForm';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from './components/UserList'
import UserProfile from './components/UserProfile';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    }
  }
  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path='/'>
            <SearchForm handleSubmit={this._fetchUser}/>
          </Route>
          <Route exact path='/users'>
            <UserList users={this.state.users}/>
          </Route>
          <Route path={`/users/:username`}>
            <UserProfile users={this.state.users} />
          </Route>
        </Switch>
        
      </Router>
    );
  }

  _fetchUser = (username) => {
    console.log("Fetching ", username);
    this.setState({
      isLoading: true
    }, async () => {
        const response = await fetch(
            `https://api.github.com/users/${username}`
            ).then(response => response.json());
        console.log("response from API is: ", response);
        if(response.message)
        {
          console.log("Invalid Username");
        }
        else
        {
          let newUsersList = []
          if(this.state.users.length !== 0)
          {
            newUsersList = [...this.state.users];
          }
          
          newUsersList.push(response);
          this.setState({
              users: newUsersList,
              isLoading: false
          })

          console.log(this.state.users);
        }

    })
  }
}

export default App;
