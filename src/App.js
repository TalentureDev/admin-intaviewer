import Header from './components/Header'
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';

import  Profile  from './screens/Profile';
import  Home  from './screens/Home';
import  Register  from './screens/Register';
import  Users  from './screens/Users';
import  Brands  from './screens/Brands';
import  Login  from './screens/Login';



const App = () => {

  return (
      <Router>
        <Header />
      <main className='py-3'>
        
            <Container>
              <Route path='/login' component={Login} />
              <Route path='/admin/profile/:id' component={Profile} />
              <Route path='/admin/register' component={Register} />
              <Route path='/admin/users' component={Users} />
              <Route path='/admin/brands' component={Brands} />
              <Route exact path='/' component={Home} />
            </Container>
           
          </main>
        <Footer />
      </Router>
  );
}

export default App;
