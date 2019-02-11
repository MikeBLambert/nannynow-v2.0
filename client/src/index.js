import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import styles from './index.scss';
import App from './components/app/App';

render(
  <Provider store={store}>
    <App className={styles.index} />
  </Provider>,
  document.getElementById('root'),
);
