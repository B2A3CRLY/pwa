import React from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
const NavBar = () => (
  <div className="navbar">
    <Link to="/">Feed</Link>
    <Link to="/profile">Profile</Link>
  </div>
);
const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
  </div>
);
const Feed = (props) => (
  <Template title="Feed"/>
);
const Profile = (props) => (
  <Template title="Profile"/>
);
const App = () => {
  /*const [query, setQuery] = useState('');
    const search = async (e) => {
      if (e.key === 'Enter') {
        const { data } = await userData ;
        console.log(`Data : ${data}`)
      }
  }*/
  return (
      <Router history={browserHistory}>
        <Route path="/" component={Feed}/>
        <Route path="/profile" component={Profile}/>
      </Router>
      /*
      <div className="main-container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress = {search}
        />
      </div>*/
  );
}
export default App;