import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import apiKey from './config'



// App componants
import Photo from './Components/Photo';
import Search from './Components/Search';
import Nav from './Components/Nav'


class App extends Component {

  constructor() {
    super();
    this.state = {
      images:{water:[], fire:[], ice:[]},
      loading: true, 
      search:{topic:"", results:[]},
      currentTopic:""
    };
    
  } 
  componentDidMount() {
    this.setThreeTopics();  
  }

  //API call used for the initial three topics and searches
  axiosCall = (topic) => {
    return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      return response.data
    })
  }

  setThreeTopics = () => {
    // map over images then take the key names to search
    //for the three base topics, ignoring the search object
   
    Object.keys(this.state.images).map(topic =>
        this.axiosCall(topic)
          .then (response => {
          this.setState({images: {
              ...this.state.images,
              [topic]:response.photos.photo}})
            })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
            })
      )
      this.setState({loading: false})
    }
  
  //Search takes a topic and adds it to the search object in images
  handleSearch = (topic) => {
    console.log("Searching")
    this.axiosCall(topic)
    .then(response => {
      this.setState({search: {
        ...this.state.search,
        topic: topic, results:response.photos.photo}})
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    this.setState({loading: false})
    this.handleTopicUpdate(topic)
    
  }
  //when a new topic is searched for updates the current searched for state
handleTopicUpdate = (newTopic) => {
  this.setState({
    currentTopic: newTopic
  })
}

render() { 
  return (
    <BrowserRouter>
        <div className="container">
        <Search performSearch={this.handleSearch}/>
        <Nav images={this.state.images}/>}/>
        <Switch>
          <Route exact path={"/"} render={ () => 
          (this.state.loading)
            ? <p>Loading...</p>
          // : console.log(this.state.loading)
          :<Redirect to={`/Photo/${Object.keys(this.state.images)[0]}`} /> 
          } />
          <Route exact path="/photo/:searchURL" render={(props) =>  
            (this.state.loading)
            ? <p>Loading...</p>
            : <Photo {...props} 
            images={this.state.images} 
            search={this.state.search}
            currentTopic={this.state.currentTopic}  
            performSearch={this.handleSearch}
            changeTopic={this.handleTopicUpdate}  
            /> } /> 
          
        </Switch>
        </div>   
  </BrowserRouter>
  );
}
}

export default App;