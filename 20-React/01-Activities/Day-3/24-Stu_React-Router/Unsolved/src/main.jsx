import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter(
  // Todo: Define the accessible routes, and which components respond to which URL
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} /> {/* Homepage */}
      <Route path="/profile/:id" component={ProfilePage} /> {/* Profile page with a dynamic 'id' parameter */}
      <Route path="/about" component={AboutPage} /> {/* About page */}
      <Route component={ErrorPage} /> {/* Error page for unmatched routes */}
    </Switch>
  </Router>
);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {router}
  </React.StrictMode>
);