import React from 'react';

const Test = ({match}) => {
    let topic = match.params.topic;
    return (
        <div>
          <h2>{topic}</h2>
          <h2>test</h2>
        </div>  
    );  
}

export default Test;