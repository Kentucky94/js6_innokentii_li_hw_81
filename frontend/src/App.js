import React, {Component} from 'react';
import {fetchLink} from "./store/actions";
import {connect} from "react-redux";

import './App.css';

class App extends Component {
  state = {
    originalUrl: ''
  };

  inputChangeHandler = event => {
    this.setState({
      originalUrl: event.target.value,
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.fetchLink(this.state);
  };

  render() {
    let shortLink = null;

    if(this.props.currentLink._id){
      shortLink = (
        <div>
          <h4>Now your link looks like this:</h4>
          <a href={'http://localhost:8080/' + this.props.currentLink.shortUrl}>
            {'http://localhost:8080/' + this.props.currentLink.shortUrl}
          </a>
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Shorten your link!</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" placeholder='Enter URL here!' onChange={this.inputChangeHandler}/>
          <button>Shorten!</button>
        </form>
        {shortLink}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLink: state.currentLink,
});

const mapDispatchToProps = dispatch => ({
  fetchLink: linkData => dispatch(fetchLink(linkData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);