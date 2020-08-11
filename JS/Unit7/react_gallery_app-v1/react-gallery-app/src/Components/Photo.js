import React from 'react';
import Image from './image'
import { Route, NavLink, Redirect } from 'react-router-dom';

// import NotFound from './NotFound';

const Photo = props => {

  const results = props.data;
  let photos;
  if (results.length)
    photos = results.map( photo => 
    // console.log(photo)
    <Image
      farm={photo.farm} 
      server={photo.server}
      id={photo.id}
      secret={photo.secret}
      key={photo.id}
    />
  )
   
  return(
    // <nav class="main-nav">
    // <ul>
    //   <li><NavLink to={`${match.url}`}>HTML</NavLink></li>
    //   <li><a href='#'>Dogs</a></li>
    //   <li><a href='#'>Computers</a></li>
    // </ul>
  // </nav>
  <div className="photo-container">
    <h2 >Results</h2>
      <ul>
        {photos}
      </ul>
  </div>  
  );

};
  
  export default Photo;