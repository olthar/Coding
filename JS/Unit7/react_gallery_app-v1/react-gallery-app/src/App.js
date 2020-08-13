import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Router
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import apiKey from './config'



// App componants
import Photo from './Components/Photo';
import Search from './Components/Search';
import Test from './Components/Test';


class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      topic:''
    };
  } 
  componentDidMount() {
    this.handleSearch("cats");
  }
  
  handleSearch = (topic) => {
    console.log(topic);
    // const {match: {params}, history} = this.props
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        loading: false,
        topic
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
            {/* <Test /> */}
            <Switch>
            <Route path="/" render={() => <Search performSearch={this.handleSearch}/>}/>

            {/* <Route exact path="/" render={() => <Photo 
            data={this.state.images} 
            performSearch={this.handleSearch}/> } />
            <Route path="/photo/:topic" component={Photo}/>   */}
              {/* <Route exact path="/photos/:search" render={() =>  
              (this.state.loading)
              ? <p>Loading...</p>
              : <Photo data={this.state.images} /> } />  */}
              
            </Switch>
        </div>   
  </BrowserRouter>
  );
}
}

export default App;