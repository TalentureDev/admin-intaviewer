import Header from './components/Header'
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Profile = lazy(() => import('./screens/Profile'));
const Home = lazy(() => import('./screens/Home'));
const Register = lazy(() => import('./screens/Register'));
const Users = lazy(() => import('./screens/Users'));
const Brands = lazy(() => import('./screens/Brands'));



const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <main className='py-3'>
              <Container>
                <Route exact path='/' component={Home} />
                <Route path='/admin/profile' component={Profile} />
                <Route path='/admin/register' component={Register} />
                <Route path='/admin/users' component={Users} />
                <Route path='/admin/brands' component={Brands} />
              </Container>
            </main>
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
