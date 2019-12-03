import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          user: props.userData
      }
  }


  componentDidMount() {
    console.log(this.state.user);
  }




  render() {
    return (
      <div className="usecard">
        <h2>{this.state.user.data.login}</h2>
        <img className="avatar" src={this.state.user.data.avatar_url} />
        <h3>{this.state.user.data.name ? this.state.user.data.name : "NO REAL NAME PROVIDED"}</h3>
        <p><span>Followers: {this.state.user.data.followers}</span> <span>Following: {this.state.user.data.following}</span></p>
        
      </div>
    );
  }
}
