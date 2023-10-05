// Todo: Bring in the required import from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import Nav from './components/Nav';
import HomeView from './views/HomeView'; // Import the appropriate view components for each route
import AboutView from './views/AboutView';
import ProfileView from './views/ProfileView';

function App() {
  return (
    <>
      <Nav />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <Switch>
          <Route path="/" exact component={HomeView} /> {/* Home view */}
          <Route path="/about" component={AboutView} /> {/* About view */}
          <Route path="/profile/:id" component={ProfileView} /> {/* Profile view with a dynamic 'id' parameter */}
        </Switch>
    </>
  );
}

export default App;
