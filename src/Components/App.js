import React from 'react';

import { ToastContainer, Flip } from 'react-toastify';
import { Route, BrowserRouter, useLocation, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';

import Todos from './todos/Todos';
import Rewards from './rewards/Rewards';
import { TodosProvider } from '../Context/todosContext';

const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='app'>
      <ToastContainer
        position='top-center'
        transition={Flip}
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter location={location} key={location.pathname}>
        <TodosProvider>
          <AnimatePresence exitBeforeEnter>
            <Route exact path='/rewards'>
              <Rewards />
            </Route>
            <Route exact path='/todos'>
              <Todos />
            </Route>
            <Route exact path='/'>
              <Redirect exact to='/todos' />
            </Route>
          </AnimatePresence>
        </TodosProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
