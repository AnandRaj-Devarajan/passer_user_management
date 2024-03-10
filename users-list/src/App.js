import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const UserList = lazy(() => import('./components/UserList'));
const CreateUser = lazy(() => import('./components/CreateUser'));
const UserDetails = lazy(() => import('./components/UserDetails'));
const NotFound = lazy(() => import('./utils/common/NotFound'));

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index path="/" element={<UserList />} />
            <Route path="/user/*" element={<UserList />} />
            <Route path="/user/create-user" element={<CreateUser />} />
            <Route path="/user/detail/:id" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
