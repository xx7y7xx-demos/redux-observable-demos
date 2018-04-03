import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './redux/configureStore';

const store = configureStore({});

it('renders without crashing', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
  // #1 Closing window before HTTP request finished will cause a error:
  // > TypeError: Cannot read property '_location' of null
  // To avoid this issue, try to delay the end of testing.
  setTimeout(() => {
    done();
  }, 3000)
});
