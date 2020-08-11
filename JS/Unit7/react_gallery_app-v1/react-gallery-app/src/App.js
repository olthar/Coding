import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import apiKey from './config'

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App componants
import Photo from './Components/Photo';
import Search from './Components/Search';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  } 
  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'cats' ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }


render() { 
  console.log("")
  return (
    <BrowserRouter>
      <div className="container">
        
          <Route exact path="/search" component={Search} />
          <Route exact path="/" render={() => 
            (this.state.loading)
            ? <p>Loading...</p>
            : <Photo data={this.state.images} /> } />    
          {/* <SearchForm onSearch={this.performSearch} />       */}
        </div>   
     
  </BrowserRouter>
  );
}
}

