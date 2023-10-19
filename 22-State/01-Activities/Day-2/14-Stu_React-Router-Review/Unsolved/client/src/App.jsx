import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { /* Todo: Import the required assets from 'react-router-dom' */ } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleThought from './pages/SingleThought';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
            {/* TODO: Add code here that creates a allows for displaying the home page or single thought's comments */}
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
              <Route 
                path="/thoughts/:thoughtId" 
                element={<SingleThought />}
              />
            </Routes>          
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
