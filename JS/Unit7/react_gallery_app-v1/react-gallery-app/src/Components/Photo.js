import React from 'react';
import Image from './image'

// import NotFound from './NotFound';

const Photo = (props) => {
//Topic is taken from the url
  let topic = (props.match.params.searchURL)
  let results;

  //When the search topic either submitted by the search bar or typing into url is new, the results displayed are updated
  if (props.currentTopic === topic || props.images[topic]) { 
    (props.images[topic])
    ? results = props.images[topic]
    : results = props.search.results
  } else { 
    props.performSearch(topic)
    }

  let photos;
  if (results)
    photos = results.map( photo => 

    <Image
      farm={photo.farm} 
      server={photo.server}
      id={photo.id}
      secret={photo.secret}
      key={photo.id}
    />
  )

  return(
    <div className="photo-container">
      {/* <h2 >{word}</h2> */}
      <h2 >{topic}</h2>
        <ul>
          {photos}
        </ul>
    </div>
    );
};
  
  export default Photo;