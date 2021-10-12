import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = () => (
//   <div>
//   <h1>HATS PAGE</h1>
//   </div>
// );

// const Homepage = (props) => {
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <h1>Homepage</h1>
//     </div>
//   );
// };

// const TopicList = (props) => {
//   return (
//     <div>
//       <h1>Topic List Page</h1>
//       <Link to={`${props.match.url}/13`}>To Topic 13</Link>
//       <Link to={`${props.match.url}/17`}>To Topic 17</Link>
//       <Link to={`${props.match.url}/21`}>To Topic 21</Link>
//     </div>
//   );
// };

// const TopicDetail = () => {
//   return (
//     <div>
//       <h1>Topic Detail Page</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
     <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
