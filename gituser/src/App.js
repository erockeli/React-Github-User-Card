import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(){

    state ={
    users:[],
    followers:[]
  }
}

componentDidMount(){
  axios.get(`https://api.github.com/users/erockeli/`)
    .then( response => {
      this.state({users:response.data})
    })
    .catch( err => console.log("Error in axios call", err))

    axios.get(`https://api.github.com/users/erockeli/followers`)
    .then( response => {
      this.state({followers:response.data})
    })
    .catch( err => console.log("Error in axios call", err))




}




render(){

  return(
    <div>
      <UserCard userinfo={this.state.users} followes={this.state.followers}/>

    </div>

  )
}
}