import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>

        <Route path='/favorites'>
          <FavoritesPage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/register'>
          <RegisterPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
