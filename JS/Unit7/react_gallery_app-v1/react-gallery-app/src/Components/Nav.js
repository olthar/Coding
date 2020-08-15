import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Nav = (props) => {
    let threeTopics = Object.keys(props.images)
    return(
        //Dynamically labeled buttons reflecting the current three topics
<React.Fragment>
<nav className="main-nav">
  <ul>
    <li><NavLink to={`/photo/${threeTopics[0]}`}>{threeTopics[0]}</NavLink></li>
    <li><NavLink to={`/photo/${threeTopics[1]}`}>{threeTopics[1]}</NavLink></li>
    <li><NavLink to={`/photo/${threeTopics[2]}`}>{threeTopics[2]}</NavLink></li>
  </ul>
</nav>

           
    {/* <Route path={`${match.path}Photo`} 
           render={ () => <Photo  /> } />         
    <Route path={`${match.path}/css`} 
           render={ () => <Photo /> } />     
    <Route path={`${match.path}/javascript`} 
           render={ () => <Photo  /> } /> */}
</React.Fragment>
   
   
   
   )
}

export default withRouter(Nav);