import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';

//components
import Header from './components/Header';
import ListItem from './components/ListItem';
import Loading from './components/Loading';

class App extends Component {

  state = {
    users: [],
    loadging: false
  }
  componentWillMount(){
    axios
    .get('./assets/feed.json')
    .then(res => {
      this.setState({loading: true})

      return setTimeout(() => {
        this.setState({users: res.data, loading: false})
      }, 1500); 
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.loading ? <Loading color="#E51C72"/> :
          <Fragment>
            {this.state.users.map( user => <ListItem name={user.name} thumbnail={user.image} key={parseInt(Math.random()*1000)} />)}
          </Fragment>
        } 
      </div>
    );
  }
}

export default App;
