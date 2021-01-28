import 'bootstrap/dist/css/bootstrap.min.css';
import './external.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './redux/store';

// import screens view 
import Home from './screens/Home';

const store = createStore(reducers, applyMiddleware(ThunkMiddleware, createLogger()))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
